import * as yup from 'yup';
import { validationRules } from '@britishcouncil/react-forms';
import { commonMaxLengths, validationRulesI18n } from 'ors-ui';

import { UnifiedReceivingOrganisation } from 'common/models';
import i18next from 'common/i18n';

export const roMaxValidLengths = {
  orgName: 250,
  person: 30,
  case: 15,
};

export type SelectedOrganisationType = Partial<UnifiedReceivingOrganisation> & {
  isValid?: boolean;
};

type Trans = {
  selectedOrganisation: string;
  orgName: string;
  person: string;
  case: string;
  overallScore: string;
  requiredMessage: string;
};

export enum ConditionSelection {
  No = '1',
  Yes = '2',
}

export interface RoForm {
  selectedCountry: string;
  selectedOrganisation: string;
  organisationName: string;
  address1: string;
  address2: string;
  address3: string;
  address4: string;
  postCode: string;
  person: string;
  case: string;
  condition: ConditionSelection;
  overallScore: string;
  listeningScore: string;
  readingScore: string;
  writingScore: string;
  speakingScore: string;
}

export const getInitValue = (init: SelectedOrganisationType, isIwas: boolean): RoForm => ({
  selectedCountry: init?.countryId?.toString() ?? (isIwas ? '' : 'all'),
  selectedOrganisation: init?.stedOrganisationId ? String(init?.stedOrganisationId) : '',
  organisationName: init?.organisationName ?? '',
  address1: init?.addressLine1 ?? '',
  address2: init?.addressLine2 ?? '',
  address3: init?.addressLine3 ?? '',
  address4: init?.addressLine4 ?? '',
  postCode: init?.postCode ?? '',
  person: init?.contactPerson ?? '',
  case: init?.caseNumber ?? '',
  condition: init?.overallMinimumScore ? ConditionSelection.Yes : ConditionSelection.No,
  overallScore: init?.overallMinimumScore ? String(init.overallMinimumScore) : '',
  listeningScore: init?.listeningMinimumScore ? String(init.listeningMinimumScore) : '',
  readingScore: init?.readingMinimumScore ? String(init.readingMinimumScore) : '',
  writingScore: init?.writingMinimumScore ? String(init.writingMinimumScore) : '',
  speakingScore: init?.speakingMinimumScore ? String(init.speakingMinimumScore) : '',
});

export const getSchema = (
  i18key: Trans,
  isNew = false,
  isOther = false,
  isCountryRequired = false
) => {
  const orgNameSchema = yup.string().required(i18key.selectedOrganisation).max(250, i18key.orgName);

  const schema = yup.object().shape({
    selectedCountry: isCountryRequired ? validationRulesI18n.requiredString() : yup.string(),
    organisationName: yup.string().when('selectedOrganisation', {
      is: 'new',
      then: orgNameSchema,
      otherwise: isOther ? orgNameSchema : yup.string(),
    }),
    person: yup.string().max(30, i18key.person),
    case: yup.string().max(15, i18key.case),
    condition: yup.string(),
    address1: yup.string().when('selectedOrganisation', {
      is: 'new',
      then: validationRulesI18n.addressField().required(i18key.requiredMessage),
      otherwise: isOther
        ? validationRulesI18n.addressField().required(i18key.requiredMessage)
        : yup.string(),
    }),
    address2: validationRulesI18n.addressField(),
    address3: validationRulesI18n.addressField(),
    address4: validationRulesI18n.addressField(),
    postCode: yup
      .string()
      .max(
        commonMaxLengths.postCode,
        i18next.t('APPB2C.common.basic.forms.maxLengthMessage', {
          count: commonMaxLengths.postCode,
        })
      )
      .matches(validationRules.windows1252.regex, {
        message: i18next.t('APPB2C.common.basic.forms.unsupportedChars'),
        excludeEmptyString: true,
      }),
    overallScore: yup.string().when('condition', {
      is: ConditionSelection.Yes,
      then: yup.string().required(i18key.overallScore),
      otherwise: yup.string().nullable(),
    }),
    listeningScore: yup.string().nullable(),
    readingScore: yup.string().nullable(),
    writingScore: yup.string().nullable(),
    speakingScore: yup.string().nullable(),
  });

  if (isNew) {
    return yup.object().shape({
      ...schema.fields,
      selectedOrganisation: yup.string().required(i18key.selectedOrganisation),
    });
  }

  return schema;
};
