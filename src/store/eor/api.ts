import { ApiErrorDetailed, extractApiError } from '@britishcouncil/react-common';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  EnquiryOnResultsRequestDetailsDto,
  registrationEnquiryOnResultsClient,
  IPayOnlineFromRegistrationServiceQuery as IPayOnlineFromRegistrationServiceQueryMod,
  OnlinePaymentStartedDto as OnlinePaymentStartedDtoMod,
  SubmitEnquiryOnResultsRequest,
  registrationClient as registrationClientMod,
  registrationTransactionsClient,
  UnpaidTransactionDto,
} from 'ors-api/mod';
import {
  EnquiryOnResultsRequestDetailsDto as EnquiryOnResultsRequestDetailsDtoIol,
  IPayOnlineFromRegistrationServiceQuery as IPayOnlineFromRegistrationServiceQueryIol,
  OnlinePaymentStartedDto as OnlinePaymentStartedDtoIol,
  registrationClient as registrationClientIol,
  registrationEnquiryOnResultsClient as registrationEnquiryOnResultsClientIol,
} from 'ors-api/iol';
import {
  AcceptedTermsAndConditionsResult,
  enquiryOnResultClient,
  EnquiryOnResultsB2CSubmitViewModel,
  EnquiryOnResultsRegistrationDetails,
  examResultClient,
  ProductType,
  registrationDocumentClient,
  registrationEnquiryOnResultsReadClient,
  registrationEnquiryOnResultsSumbitClient,
  StorageFile,
  termsAndConditionsTypeClient,
  EnquiryOnResultsDetailsViewModel,
} from 'ors-api/ors2';
import { ApiErrorsList, extractApiErrors } from 'ors-ui';

import { nestedAppRoutes } from 'Navigation';
import { TermsShortCodeEnum } from 'ors-utils';

const sliceName = 'eor';

export const getTrfNumber = createAsyncThunk<string, number, { rejectValue: ApiErrorsList }>(
  sliceName + '/getTrfNumber',
  async (registrationId, { rejectWithValue }) => {
    try {
      const response = await examResultClient.getTrfNumber(registrationId);
      return response.data;
    } catch (error) {
      const err = extractApiErrors(error);
      return rejectWithValue(err);
    }
  }
);

export const getEorDetails = createAsyncThunk<
  EnquiryOnResultsRegistrationDetails,
  number,
  { rejectValue: ApiErrorsList }
>(sliceName + '/getEorDetails', async (registrationId, { rejectWithValue }) => {
  try {
    const response = await enquiryOnResultClient.getDetails(registrationId);
    return response.data;
  } catch (error) {
    const err = extractApiErrors(error);
    return rejectWithValue(err);
  }
});

export const getNewestTermsVersion = createAsyncThunk<
  number,
  number,
  { rejectValue: ApiErrorsList }
>(sliceName + '/getNewestTermsVersion', async (organisationCountryId, { rejectWithValue }) => {
  try {
    const response = await termsAndConditionsTypeClient.getTermsAndConditionsNewestVersionNumber(
      TermsShortCodeEnum.Global_EoR,
      'IELTS',
      'B2C',
      organisationCountryId
    );
    return response.data;
  } catch (error) {
    const err = extractApiErrors(error);
    return rejectWithValue(err);
  }
});

type GetAcceptedTermsArgs = {
  registrationId: number;
  organisationCountryId: number;
};
export const getAcceptedTermsVersion = createAsyncThunk<
  AcceptedTermsAndConditionsResult,
  GetAcceptedTermsArgs,
  { rejectValue: ApiErrorsList }
>(sliceName + '/getAcceptedTermsVersion', async (req, { rejectWithValue }) => {
  try {
    const response =
      await termsAndConditionsTypeClient.getLastAcceptedTermsAndConditionsNewestVersionNumber(
        TermsShortCodeEnum.Global_EoR,
        'IELTS',
        'B2C',
        { registrationId: req.registrationId, organisationCountryId: req.organisationCountryId }
      );
    return response.data;
  } catch (error) {
    const err = extractApiErrors(error);
    return rejectWithValue(err);
  }
});

type SupportingEvidenceArgs = {
  registrationId: number;
  files: File[] | null | undefined;
};
export const uploadSupportingEvidence = createAsyncThunk<
  StorageFile[],
  SupportingEvidenceArgs,
  { rejectValue: ApiErrorsList }
>(sliceName + '/uploadSupportingEvidence', async (req, { rejectWithValue }) => {
  try {
    const response = await enquiryOnResultClient.uploadSupportingEvidenceFiles(
      req.registrationId,
      req.files
    );
    return response.data;
  } catch (error) {
    const err = extractApiErrors(error);
    return rejectWithValue(err);
  }
});

export type CreateEoRArgs = {
  registrationId: number;
  query: EnquiryOnResultsB2CSubmitViewModel;
};
export const createEoR = createAsyncThunk<number, CreateEoRArgs, { rejectValue: ApiErrorsList }>(
  sliceName + '/createEoR',
  async (req, { rejectWithValue }) => {
    try {
      const response = await registrationEnquiryOnResultsSumbitClient.createEoR(
        req.registrationId,
        req.query
      );
      return response.data;
    } catch (error) {
      const err = extractApiErrors(error);
      return rejectWithValue(err);
    }
  }
);

export const getEoRAcknowledgment = createAsyncThunk<
  EnquiryOnResultsDetailsViewModel,
  number,
  { rejectValue: ApiErrorDetailed }
>(sliceName + '/getEoRAcknowledgment', async (registrationId, { rejectWithValue }) => {
  try {
    const response = await registrationEnquiryOnResultsReadClient.getEoRDetails(registrationId);
    return response.data;
  } catch (error) {
    const err = extractApiError(error);
    return rejectWithValue(err);
  }
});

export const getUnpaidTransactions = createAsyncThunk<
  UnpaidTransactionDto[],
  number,
  { rejectValue: ApiErrorDetailed }
>(sliceName + '/getUnpaidTransactions', async (registrationId, { rejectWithValue }) => {
  try {
    const response = await registrationTransactionsClient.getUnpaidTransactions(
      registrationId,
      ProductType.EnquiryOnResults
    );
    return response.data;
  } catch (error) {
    const err = extractApiError(error);
    return rejectWithValue(err);
  }
});

export const getFileUrl = createAsyncThunk<string, number, { rejectValue: ApiErrorsList }>(
  sliceName + '/getFileUrl',
  async (documentId, { rejectWithValue }) => {
    try {
      const response = await registrationDocumentClient.getFileUrl(documentId, false);
      return response.data;
    } catch (error) {
      const err = extractApiErrors(error);
      return rejectWithValue(err);
    }
  }
);

/**
 * MOD
 */

export type PayOnlineArgsMod = {
  registrationId: number;
  transactionId: number;
  productType: ProductType;
  isUkvi: boolean;
};
export const payOnlineMod = createAsyncThunk<
  OnlinePaymentStartedDtoMod,
  PayOnlineArgsMod,
  { rejectValue: ApiErrorDetailed }
>(sliceName + '/payOnline', async (req, { rejectWithValue }) => {
  try {
    const response = await registrationClientMod.payOnline(req.registrationId, req.transactionId, {
      productType: req.productType,
      returnUrl: `${window.location.origin}/ttp${
        nestedAppRoutes(req.registrationId, { ctx: req.isUkvi ? 'ukvi' : 'ors' }).testDetails.eor
          .acknowledgement
      }`,
    } as IPayOnlineFromRegistrationServiceQueryMod);
    return response.data;
  } catch (error) {
    const err = extractApiError(error);
    return rejectWithValue(err);
  }
});

export const getEorDetailsMod = createAsyncThunk<
  EnquiryOnResultsRequestDetailsDto,
  number,
  { rejectValue: ApiErrorDetailed }
>(sliceName + '/getEorDetailsMod', async (registrationId, { rejectWithValue }) => {
  try {
    const response = await registrationEnquiryOnResultsClient.getDetails(registrationId);
    return response.data;
  } catch (error) {
    const err = extractApiError(error);
    return rejectWithValue(err);
  }
});

export type CreateEoRArgsMod = {
  registrationId: number;
  query: SubmitEnquiryOnResultsRequest;
};
export const createEoRMod = createAsyncThunk<
  number,
  CreateEoRArgsMod,
  { rejectValue: ApiErrorsList }
>(sliceName + '/createEoRMod', async (req, { rejectWithValue }) => {
  try {
    const response = await registrationEnquiryOnResultsClient.submitEorRequest(
      req.registrationId,
      req.query
    );
    return response.data;
  } catch (error) {
    const err = extractApiErrors(error);
    return rejectWithValue(err);
  }
});

/**
 * IOL
 */

export const getEorDetailsIol = createAsyncThunk<
  EnquiryOnResultsRequestDetailsDtoIol,
  number,
  { rejectValue: ApiErrorDetailed }
>(sliceName + '/getEorDetailsIol', async (registrationId, { rejectWithValue }) => {
  try {
    const response = await registrationEnquiryOnResultsClientIol.getDetails(registrationId);
    return response.data;
  } catch (error) {
    const err = extractApiError(error);
    return rejectWithValue(err);
  }
});

export const createEoRIol = createAsyncThunk<
  number,
  CreateEoRArgsMod,
  { rejectValue: ApiErrorsList }
>(sliceName + '/createEoRIol', async (req, { rejectWithValue }) => {
  try {
    const response = await registrationEnquiryOnResultsClientIol.submitEorRequest(
      req.registrationId,
      req.query
    );
    return response.data;
  } catch (error) {
    const err = extractApiErrors(error);
    return rejectWithValue(err);
  }
});

interface PayOnlineIolReq {
  registrationId: number;
  transactionId: number;
  registrationPayOnlineQuery?: IPayOnlineFromRegistrationServiceQueryIol;
}
export const payOnlineIol = createAsyncThunk<
  OnlinePaymentStartedDtoIol,
  PayOnlineIolReq,
  { rejectValue: ApiErrorsList }
>(sliceName + '/payOnlineIol', async (req, { rejectWithValue }) => {
  try {
    const response = await registrationClientIol.payOnline(req.registrationId, req.transactionId, {
      productType: ProductType.EnquiryOnResults,
      returnUrlVirtualPath:
        '/ttp' +
        nestedAppRoutes(req.registrationId, { ctx: 'iol' }).testDetails.eor.acknowledgement,
    });
    return response.data;
  } catch (error) {
    const err = extractApiErrors(error);
    return rejectWithValue(err);
  }
});
