import { AppThunk } from '..';
import { extractApiError } from '@britishcouncil/react-common';
import { ExamFormat, ProductType, termsAndConditionsTypeClient } from 'ors-api/ors2';
import { termsAndConditionsClient } from 'ors-api/ukvi';
import {
  IELTSProducts,
  IPayOnlineFromRegistrationServiceQuery as IPayOnlineFromRegistrationServiceQueryIol,
  registrationClient as registrationClientIol,
  RegistrationDto as RegistrationDtoIol,
} from 'ors-api/iol';
import {
  IPayOnlineFromRegistrationServiceQuery as IPayOnlineFromRegistrationServiceQueryMod,
  registrationClient as registrationClientMod,
} from 'ors-api/mod';
import { isLifeSkillsExam, makeTermsUrl, storeOrganisationAliasInLS } from 'ors-utils';
import { extractApiErrors } from 'ors-ui';

import { getExamContext } from 'core';
import { nestedAppRoutes } from 'Navigation/helpers';
import { converters } from 'common';
import { ChangeState, registration } from '../registration';
import {
  getTransactions,
  getTransactionsDetails,
  getTransactionsDetailsUkvi,
  getTransactionsUkvi,
} from './api';
import { ExtendedTransactionPaymentDetails, payments } from '.';

interface RegDetails {
  id: number;
  organisationCountryId: number;
  examFormat: ExamFormat;
  isUkvi: boolean;
  termsShortCode: string;
  productId?: string;
}

export const setExtendedTransactions =
  (regDetails: RegDetails, needTermsConsentUpdate?: boolean): AppThunk =>
  async (dispatch, getState) => {
    const { id: regId, isUkvi } = regDetails;

    await dispatch(isUkvi ? getTransactionsUkvi(regId) : getTransactions(regId));

    const transactions = getState().payments.transactions.data;
    if (!transactions) return;

    const extendedTransactions: ExtendedTransactionPaymentDetails[] = await Promise.all(
      transactions?.map(async (t) => {
        const acceptedTerms = await getAcceptedTerms(regDetails);
        return {
          ...t,
          termsLink: acceptedTerms,
          needTermsConsentUpdate: needTermsConsentUpdate,
        };
      })
    );

    const unifiedTransactions = converters
      .toUnifiedTransactions()
      .fromIcUkviTransactions(extendedTransactions, regDetails);

    const unpaidTransactions: ExtendedTransactionPaymentDetails[] = await Promise.all(
      unifiedTransactions?.filter((t) => !t.isPaid).sort((t1, t2) => t1.id - t2.id)
    );

    const paidTransactions: ExtendedTransactionPaymentDetails[] = unifiedTransactions
      ?.filter((t) => t.isPaid && (t.grossAmount !== 0 || t.isFreeExamPayment))
      .sort((t1, t2) => t2.id - t1.id);

    dispatch(
      payments.actions.setTransactionLists({ paid: paidTransactions, unpaid: unpaidTransactions })
    );
  };

export const setTransactionDetails =
  (regDetails: RegDetails, transactionId: number): AppThunk =>
  async (dispatch, getState) => {
    const getDetails = regDetails.isUkvi ? getTransactionsDetailsUkvi : getTransactionsDetails;
    await dispatch(getDetails({ registrationId: regDetails.id, transactionId: transactionId }));

    const transactionDetails = getState().payments.transactionDetails.data;
    if (transactionDetails) {
      const termsLink = await getAcceptedTerms(regDetails);
      dispatch(payments.actions.setTransactionDetails({ ...transactionDetails, termsLink }));
    }
  };

const getAcceptedTerms = async (regDetails: RegDetails): Promise<string> => {
  const { id: regId, isUkvi, organisationCountryId, termsShortCode } = regDetails;

  const terms = makeTermsUrl({
    shortCode: termsShortCode,
    organisationCountryId: organisationCountryId,
    withBase: true,
  });

  const getLastTerms = isUkvi
    ? termsAndConditionsClient.getLastAcceptedTermsAndConditionsNewestVersionNumber
    : termsAndConditionsTypeClient.getLastAcceptedTermsAndConditionsNewestVersionNumber;

  const isLifeSkills = isLifeSkillsExam(regDetails?.productId);

  const ukviProductGroupShortCode = isLifeSkills ? 'LIFESKILLS' : 'IELTSUKVI';

  const productGroupShortCode = isUkvi ? ukviProductGroupShortCode : 'IELTS';

  try {
    const response = await getLastTerms(termsShortCode, productGroupShortCode, 'B2C', {
      registrationId: regId,
      organisationCountryId: organisationCountryId,
    });
    const acceptedTerms = response.data;

    return makeTermsUrl({
      shortCode: termsShortCode,
      organisationCountryId: organisationCountryId,
      version: acceptedTerms?.version ? String(acceptedTerms?.version) : undefined,
      isLifeSkills: isLifeSkills,
      withBase: true,
    });
  } catch (error) {
    return terms;
  }
};

export const loadTransDetails =
  (registrationId: number, transactionId: number): AppThunk =>
  async (dispatch, getState) => {
    await payments.api.getTransactionsDetails({ registrationId, transactionId });
  };

//** IOL */

export const setExtendedTransactionsIol =
  (reg?: RegistrationDtoIol): AppThunk =>
  async (dispatch, getState) => {
    const transactions = getState().payments.transactionsIol.data;
    const productId = getState().registration.ttRegistrationIol?.productId;
    const isUol =
      productId === IELTSProducts.UkviOnlineAC || productId === IELTSProducts.UkviOnlineGT;

    if (!transactions) return;

    const unifiedTransactions = converters
      .toUnifiedTransactions()
      .fromIolTransactions(transactions, reg)
      .map((t) => {
        return {
          ...t,
          termsLink: isUol
            ? 'https://takeielts.britishcouncil.org/sites/default/files/ukvi_ielts_online_terms_and_conditions.pdf'
            : 'https://takeielts.britishcouncil.org/sites/default/files/ielts_online_terms_and_conditions.pdf',
        };
      });

    const unpaidTransactions: ExtendedTransactionPaymentDetails[] = await Promise.all(
      unifiedTransactions?.filter((t) => !t.isPaid).sort((t1, t2) => t2.id - t1.id)
    );

    const paidTransactions: ExtendedTransactionPaymentDetails[] = unifiedTransactions
      ?.filter((t) => t.isPaid && t.grossAmount !== 0)
      .sort((t1, t2) => t1.id - t2.id);

    dispatch(
      payments.actions.setTransactionLists({ paid: paidTransactions, unpaid: unpaidTransactions })
    );
  };

export const handlePayOnlineIol =
  (regId: number, transactionId: number, productType: ProductType): AppThunk =>
  async (dispatch, getState) => {
    dispatch(registration.actions.setPayOnlineState(ChangeState.PENDING));

    const returnUrlVirtualPath =
      '/ttp' + nestedAppRoutes(regId, { ctx: 'iol' }).testDetails.payments.paymentAcknowledgement;

    try {
      const response = await registrationClientIol.payOnline(regId, transactionId, {
        productType: productType,
        returnUrlVirtualPath,
      } as IPayOnlineFromRegistrationServiceQueryIol);

      if (response.data.paymentPageUrl) {
        dispatch(registration.actions.setPayOnlineState(ChangeState.IDLE));
        window.location.href = response.data.paymentPageUrl;
      }
    } catch (error) {
      const err = extractApiErrors(error);
      dispatch(payments.actions.setErrors(err));
      dispatch(registration.actions.setPayOnlineState(ChangeState.FAILED));
    }
  };

export const handlePayOnlineMod =
  (regId: number, transactionId: number, productType: ProductType): AppThunk =>
  async (dispatch, getState) => {
    const isUkvi = getExamContext() === 'ukvi';
    const isEor = productType === ProductType.EnquiryOnResults;

    dispatch(registration.actions.setPayOnlineState(ChangeState.PENDING));

    const returnUrl = `${window.location.origin}/ttp${
      isEor
        ? nestedAppRoutes(regId, { ctx: isUkvi ? 'ukvi' : 'ors' }).testDetails.eor.acknowledgement
        : nestedAppRoutes(regId, { ctx: isUkvi ? 'ukvi' : 'ors' }).testDetails.payments
            .paymentAcknowledgement
    }`;

    try {
      const response = await registrationClientMod.payOnline(regId, transactionId, {
        productType: productType,
        returnUrl: returnUrl,
      } as IPayOnlineFromRegistrationServiceQueryMod);

      if (response.data.paymentPageUrl) {
        dispatch(registration.actions.setPayOnlineState(ChangeState.IDLE));
        storeOrganisationAliasInLS();
        window.location.href = response.data.paymentPageUrl;
      }
    } catch (error) {
      const apiError = extractApiError(error);
      dispatch(payments.actions.setErrors(extractApiErrors(error)));
      if (apiError.code === 'OnlinePaymentPending') {
        dispatch(registration.actions.setPayOnlineState(ChangeState.IDLE));
        dispatch(registration.actions.setIsOnlinePaymentInProgress(true));
      } else {
        dispatch(registration.actions.setPayOnlineState(ChangeState.FAILED));
      }
    }
  };
