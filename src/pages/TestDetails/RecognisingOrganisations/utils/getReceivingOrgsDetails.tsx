import { DateTime } from 'luxon';
import {
  AwardingBodySystem,
  ExamResultDeliveryDetails,
  RegistrationResultDeliveryDetails,
} from 'ors-api/ors2';
import { RegistrationResultDeliveryDetails as RegistrationResultDeliveryDetailsUkvi } from 'ors-api/ukvi';
import {
  RegistrationReceivingOrganisationDto as RegistrationReceivingOrganisationDtoMod,
  ReceivingOrganisationMethodOfDelivery,
  ReceivingOrganisationLimitsDto,
  CentreConfigurationDto,
  OrganisationCountryConfigurationDto,
} from 'ors-api/mod';
import { RegistrationReceivingOrganisationDto } from 'ors-api/iol';
import { includesInUrl, localeFns } from 'ors-utils';

import { ReceivingOrgsAllowedActions } from 'store/receivingOrgs';
import { converters, UnifiedResultDetails } from 'common';

const maxNumberOfFreeAtrfsUkvi = 5;

export const getReceivingOrgsDetails = (
  details: UnifiedResultDetails,
  settings: ROSettingsAndValues,
  locale?: string
) => {
  const isUkvi = includesInUrl('/ukvi/');
  const isIol = includesInUrl('/iol/');
  const isMod = !isIol && details.awardingBodySystem === AwardingBodySystem.CMDS;

  const {
    centreConfig,
    deliveryDetails,
    orgCountryConfig,
    receivingOrganisationsIol,
    receivingOrganisationsMod,
    regResultDeliveryDetails,
    regResultDeliveryDetailsUkvi,
    receivingOrgsAllowedActions,
    receivingOrgLimits,
  } = settings;

  const maxReceivingOrgsCount = isIol
    ? details.maxReceivingOrgsCount || 0
    : isUkvi
      ? maxNumberOfFreeAtrfsUkvi
      : isMod
        ? (receivingOrgLimits?.edeliveryReceivingOrganisationsLimit || 0) +
        (receivingOrgLimits?.postalReceivingOrganisationsLimit || 0)
        : receivingOrgLimits?.postalReceivingOrganisationsLimit || 0;

  const maxPostalReceivingOrgsCount = isMod
    ? receivingOrgLimits?.postalReceivingOrganisationsLimit || 0
    : undefined;

  const selectedReceivingOrgs = isIol
    ? converters
      .toUnifiedReceivingOrgs(details.registrationId, details.isCancelled)
      .fromCmdsROs(receivingOrganisationsIol || [], 'iol', receivingOrgsAllowedActions)
    : isMod
      ? converters
        .toUnifiedReceivingOrgs(details.registrationId, details.isCancelled)
        .fromCmdsROs(receivingOrganisationsMod || [], 'mod', receivingOrgsAllowedActions)
      : converters
        .toUnifiedReceivingOrgs(details.registrationId, details.isCancelled)
        .fromIwasROs(
          regResultDeliveryDetails?.receivingOrganisations ||
          regResultDeliveryDetailsUkvi?.receivingOrganisations ||
          [],
          details.awardingBodySystem,
          isUkvi ? 'ukvi' : undefined
        );

  const additionalTextForTestReportForm = orgCountryConfig?.additionalTextForTestReportForm || '';

  const isReceivingOrgsDisabled =
    centreConfig?.isReceivingOrganisationDisabled ||
    (details.isB2B && centreConfig?.isReceivingOrganisationForAgentRegistrationDisabled) ||
    false;

  const receivingOrgsDisabledNote =
    (deliveryDetails?.isPastExam
      ? centreConfig?.infoAfterExamDateIfReceivingOrganisationDisabled
      : centreConfig?.infoBeforeExamDateIfReceivingOrganisationDisabled) || '';

  const displayReceivingOrgsNote =
    (isReceivingOrgsDisabled && !!receivingOrgsDisabledNote) ||
    (!isReceivingOrgsDisabled && !!additionalTextForTestReportForm);

  const availableOrganisationSlots =
    (maxReceivingOrgsCount &&
      selectedReceivingOrgs &&
      maxReceivingOrgsCount -
      selectedReceivingOrgs?.filter((org) => org.status !== 'cancel-confirmed').length) ||
    0;

  const availablePostalOrganisationSlots =
    (maxPostalReceivingOrgsCount &&
      maxPostalReceivingOrgsCount -
      selectedReceivingOrgs?.filter(
        (org) =>
          org.methodOfDelivery === ReceivingOrganisationMethodOfDelivery.Postal &&
          org.status !== 'cancel-confirmed'
      ).length) ||
    0;

  const availableEdeliveryOrganisationSlots =
    (receivingOrgLimits?.edeliveryReceivingOrganisationsLimit &&
      receivingOrgLimits.edeliveryReceivingOrganisationsLimit -
      selectedReceivingOrgs?.filter(
        (org) =>
          org.methodOfDelivery === ReceivingOrganisationMethodOfDelivery.Edelivery &&
          org.status !== 'cancel-confirmed'
      ).length) ||
    0;

  const receivingOrgsSelectionDeadline = details.receivingOrgsSelectionDeadline ?
    localeFns(locale).localeDate(details.receivingOrgsSelectionDeadline.toJSDate()) || '' : '';

  const isPastReceivingOrgsSelectionDeadline = (isIol || isMod) ? false : details.receivingOrgsSelectionDeadline ?
    details.receivingOrgsSelectionDeadline < DateTime.now() : false;

  const showLimitReachedOrDeadlinePassedNote =
    availableOrganisationSlots === 0 || isPastReceivingOrgsSelectionDeadline;

  const canAddOrEditReceivingOrganisation =
    !details.isCancelled &&
    (!details.isExported ||
      (details.isExported &&
        availableOrganisationSlots > 0 &&
        !!orgCountryConfig?.allowTestTakerToRequestATRFsAfterIwasExport &&
        (isMod || isIol || !isPastReceivingOrgsSelectionDeadline)));

  return {
    isIol,
    isMod,
    deliveryDetails,
    maxReceivingOrgsCount,
    maxPostalReceivingOrgsCount,
    selectedReceivingOrgs,
    additionalTextForTestReportForm,
    isReceivingOrgsDisabled,
    receivingOrgsDisabledNote,
    displayReceivingOrgsNote,
    availableOrganisationSlots,
    availablePostalOrganisationSlots,
    availableEdeliveryOrganisationSlots,
    receivingOrgsSelectionDeadline,
    showLimitReachedOrDeadlinePassedNote,
    canAddOrEditReceivingOrganisation,
    resultSettingsIol: { isLoading: false, data: undefined },
    receivingOrgsAllowedActions: { isLoading: false, data: undefined },
  };
};

type ROSettingsAndValues = {
  centreConfig?: CentreConfigurationDto;
  orgCountryConfig?: OrganisationCountryConfigurationDto;
  deliveryDetails?: ExamResultDeliveryDetails;
  regResultDeliveryDetails?: RegistrationResultDeliveryDetails;
  regResultDeliveryDetailsUkvi?: RegistrationResultDeliveryDetailsUkvi;
  receivingOrganisationsIol?: RegistrationReceivingOrganisationDto[];
  receivingOrganisationsMod?: RegistrationReceivingOrganisationDtoMod[];
  receivingOrgsAllowedActions?: ReceivingOrgsAllowedActions;
  receivingOrgLimits?: ReceivingOrganisationLimitsDto;
};
