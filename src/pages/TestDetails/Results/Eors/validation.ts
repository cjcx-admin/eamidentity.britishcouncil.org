import * as yup from 'yup';
import { validationRules } from '@britishcouncil/react-forms';
import { OrganisationCountryConfigurationDto } from 'ors-api/mod';
import {
  ackFormInitValue,
  commonMaxLengths,
  getReceiver,
  invoiceConsent,
  RevOrderAckForm,
  validationRulesI18n,
} from 'ors-ui';

import i18next from 'common/i18n';

export const eorMaxValidLengths = {
  explanation: 500,
};

export interface EorForm extends RevOrderAckForm {
  trfNumber: string;
  explanation: string;
  files: (string | undefined)[];
  terms: boolean;
}

export type EorFormTrans = {
  trfNumberValidation: string;
  explanationRequired: string;
  explanationMaxLength: string;
  evidenceRequired: string;
  requiredMessage: string;
  maxLengthMessage: string;
};

export const formInitValue = {
  trfNumber: '',
  explanation: '',
  files: [],
  terms: false,
  ...ackFormInitValue,
};

export const getFormSchema = ({
  showTrfNumber,
  showPaymentForm,
  showTerms,
  isExceptionalScenario,
  orgCountryConfig,
  showInvoiceInfo,
}: {
  showTrfNumber: boolean;
  showPaymentForm: boolean;
  showTerms: boolean;
  isExceptionalScenario?: boolean;
  orgCountryConfig?: OrganisationCountryConfigurationDto;
  showInvoiceInfo?: boolean;
}) => {
  return yup.object().shape({
    trfNumber: showTrfNumber
      ? yup
          .string()
          .matches(trfRegEx, {
            message: i18next.t('APPB2C.registration.results.eor.preDeadline.trfNumberValidation'),
          })
          .required(i18next.t('APPB2C.common.basic.forms.requiredMessage'))
      : yup.string(),
    explanation: isExceptionalScenario
      ? yup
          .string()
          .required(i18next.t('APPB2C.registration.results.eor.preDeadline.explanationRequired'))
          .max(
            eorMaxValidLengths.explanation,
            i18next.t('APPB2C.common.basic.forms.maxLengthMessage', {
              count: eorMaxValidLengths.explanation,
            })
          )
      : yup.string().max(
          eorMaxValidLengths.explanation,
          i18next.t('APPB2C.common.basic.forms.maxLengthMessage', {
            count: eorMaxValidLengths.explanation,
          })
        ),
    files: yup
      .array()
      .of(yup.string())
      .min(
        isExceptionalScenario ? 1 : 0,
        i18next.t('APPB2C.registration.results.eor.preDeadline.evidenceRequired')
      ),
    terms: showTerms ? validationRulesI18n.acceptTermsAndConditions() : yup.boolean(),
    invoiceConsent: invoiceConsent(showPaymentForm && showInvoiceInfo),
    receiver: showPaymentForm
      ? getReceiver({
          firstName: firstName(
            i18next.t('APPB2C.common.basic.forms.requiredMessage'),
            i18next.t('APPB2C.common.basic.forms.maxLengthMessage', {
              count: commonMaxLengths.name,
            })
          ),
          lastName: lastName(
            i18next.t('APPB2C.common.basic.forms.requiredMessage'),
            i18next.t('APPB2C.common.basic.forms.maxLengthMessage', {
              count: commonMaxLengths.name,
            })
          ),
          orgCountryConfig,
          showInvoiceInfo,
        })
      : yup.object().shape({}),
  });
};

const trfRegEx = /^[A-Z0-9]{15,18}$/;

const firstName = (requiredMessage: string, maxLengthMessage: string) =>
  yup
    .string()
    .required(requiredMessage)
    .max(commonMaxLengths.name, maxLengthMessage)
    .matches(validationRules.unicodeChars.regex, {
      message: i18next.t('APPB2C.common.basic.forms.unsupportedChars'),
      excludeEmptyString: true,
    });

const lastName = (requiredMessage: string, maxLengthMessage: string) =>
  yup
    .string()
    .required(requiredMessage)
    .max(commonMaxLengths.name, maxLengthMessage)
    .matches(validationRules.unicodeChars.regex, {
      message: i18next.t('APPB2C.common.basic.forms.unsupportedChars'),
      excludeEmptyString: true,
    });
