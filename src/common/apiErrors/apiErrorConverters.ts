import {
  ApiErrorsList,
  commonMaxLengths,
  ErrorMessages,
  ExtendedApiError,
  reduceMultipleErrorSources,
  commonErrorCodes,
  commonErrorProps as sharedCommonErrorProps,
} from 'ors-ui';

import { roMaxValidLengths } from 'pages/TestDetails/RecognisingOrganisations/validation';
import { eorMaxValidLengths } from 'pages/TestDetails/Results/Eors/validation';
import i18next from '../i18n';
import {
  commonErrorProps,
  draftdErrorCodes,
  eorErrorCodes,
  osrErrorCodes,
  passwordErrorCodes,
  receivingOrgErrorCodes,
  regErrorCodes,
  transferErrorCodes,
} from './apiErrorCodes';

type ErrorMessageReceivingOrgsProps = {
  error: ApiErrorsList | undefined;
  maxPostalReceivingOrgsCount?: number;
};

export const errors = {
  tErrorMessage: (error: ApiErrorsList | undefined): ErrorMessages | undefined => {
    if (!error) return undefined;

    if (error.status === ExtendedApiError.RequestEntityTooLarge) {
      return [i18next.t('APPB2C.registration.testTaker.files.upload.error.fileTooLarge')];
    }

    return (error?.errors || []).map((e) => {
      const { code, property, message } = e;

      switch (code) {
        case regErrorCodes.UnableToDownloadFile:
          return i18next.t('APPB2C.common.basic.errors.unableToDownloadFile');
        case regErrorCodes.MissingFile:
          return i18next.t('APPB2C.common.cancelBooking.error.missingFile');
        case regErrorCodes.CancellationRequestAlreadyExists:
          return i18next.t('APPB2C.common.cancelBooking.error.requestedAlready');
        case regErrorCodes.RegistrationBookingNotFound:
        case regErrorCodes.UnableToSubmitCancellationRequest:
          return i18next.t('APPB2C.common.cancelBooking.error.cancelledAlready');
        case regErrorCodes.WrongPaymentConfig:
          return i18next.t('APPB2C.cj.review.error.wrongPaymentConfig');
        case regErrorCodes.UnableToUpdateCandidate:
          return i18next.t('APPB2C.registration.testTaker.editContact.error.pastCutoff');

        case commonErrorCodes.PropertyValidationError:
          switch (property) {
            case commonErrorProps.countryId:
              return i18next.t('APPB2C.registration.testTaker.editContact.error.missingCountry');
            case sharedCommonErrorProps.streetAddress1:
              return i18next.t('APPB2C.registration.testTaker.editContact.error.missingAddress');

            default:
              return null;
          }

        case commonErrorCodes.PredicateValidator:
          switch (property) {
            case commonErrorProps.fileCount:
              return i18next.t(
                'APPB2C.registration.testTaker.files.upload.error.maxNumberOfFilesExceeded'
              );
            case commonErrorProps.type:
              return i18next.t('APPB2C.registration.testTaker.files.upload.error.wrongFileType');
            case commonErrorProps.name:
              return i18next.t('APPB2C.registration.testTaker.files.upload.error.wrongFileName');
            case commonErrorProps.subTypeId:
              return i18next.t(
                'APPB2C.registration.testTaker.files.upload.error.uploadUnavailable'
              );

            default:
              return null;
          }

        default:
          if (message?.includes('not editable')) {
            return i18next.t('APPB2C.registration.testTaker.error');
          }

          return null;
      }
    });
  },

  tErrorMessageOsr: (error: ApiErrorsList | undefined): ErrorMessages | undefined => {
    if (!error) return undefined;

    return (error?.errors || []).map((e) => {
      switch (e.code) {
        case osrErrorCodes.NoAvailableSpeakingSlots:
          return i18next.t('APPB2C.common.changeSpeaking.cards.noSlots.error');
        case osrErrorCodes.MissingFile:
          return i18next.t('APPB2C.registration.results.osr.error.missingFile');
        case regErrorCodes.WrongPaymentConfig:
          return i18next.t('APPB2C.cj.review.error.wrongPaymentConfig');

        default:
          return null;
      }
    });
  },

  tErrorMessageTransfer: (error: ApiErrorsList | undefined): ErrorMessages | undefined => {
    return (error?.errors || []).map((e) => {
      switch (e.code) {
        case transferErrorCodes.SelfServeTransferDisabled:
          return i18next.t('APPB2C.common.transfer.selfService.review.errors.transferDisabled');
        case transferErrorCodes.SlotTaken:
          return i18next.t('APPB2C.common.changeSpeaking.cards.noSlots.error');
        case transferErrorCodes.FreeLrwSlotIsNotAvailable:
          return i18next.t('APPB2C.common.transfer.selfService.review.errors.noLrwSlots');

        default:
          return null;
      }
    });
  },

  tErrorMessageReceivingOrgs: ({
    error,
    maxPostalReceivingOrgsCount,
  }: ErrorMessageReceivingOrgsProps): ErrorMessages | undefined => {
    if (!error) return undefined;

    return (error?.errors || []).map((e) => {
      const { code, property } = e;

      switch (code) {
        case receivingOrgErrorCodes.ContactPersonMaxLength:
          return i18next.t(
            'APPB2C.registration.results.organisations.editRo.error.contactPersonMaxLength',
            {
              count: roMaxValidLengths.person,
            }
          );
        case receivingOrgErrorCodes.CaseNumberMaxLength:
          return i18next.t(
            'APPB2C.registration.results.organisations.editRo.error.caseNumberMaxLength',
            {
              count: roMaxValidLengths.case,
            }
          );
        case receivingOrgErrorCodes.MinScoreMissing:
          return i18next.t(
            'APPB2C.registration.results.organisations.editRo.error.minScoreMissing'
          );
        case receivingOrgErrorCodes.DeadlineReachedIol:
          return i18next.t(
            'APPB2C.registration.results.organisations.receivingOrgsLimitReachedNote'
          );
        case commonErrorCodes.LengthValidator:
          switch (property) {
            case receivingOrgErrorCodes.WrongAddressLine1:
            case receivingOrgErrorCodes.WrongAddressLine2:
            case receivingOrgErrorCodes.WrongAddressLine3:
            case receivingOrgErrorCodes.WrongAddressLine4:
              return i18next.t('APPB2C.common.basic.forms.addressMaxLength', {
                count: commonMaxLengths.address,
              });
            case receivingOrgErrorCodes.WrongOrgName:
              return i18next.t(
                'APPB2C.registration.results.organisations.editRo.error.orgNameMaxLength',
                {
                  count: roMaxValidLengths.orgName,
                }
              );
            case receivingOrgErrorCodes.WrongPostCode:
              return i18next.t('APPB2C.common.basic.forms.postCodeMaxLength', {
                count: commonMaxLengths.postCode,
              });
            case receivingOrgErrorCodes.WrongCaseNumber:
              return i18next.t(
                'APPB2C.registration.results.organisations.editRo.error.caseNumberMaxLength',
                {
                  count: roMaxValidLengths.case,
                }
              );
            case receivingOrgErrorCodes.WrongContactPerson:
              return i18next.t(
                'APPB2C.registration.results.organisations.editRo.error.contactPersonMaxLength',
                {
                  count: roMaxValidLengths.person,
                }
              );
            default:
              return null;
          }
        case commonErrorCodes.NotEmptyValidator:
          switch (property) {
            case receivingOrgErrorCodes.WrongAddressLine1:
              return i18next.t(
                'APPB2C.registration.results.organisations.editRo.error.missingAddressLine1'
              );
            case receivingOrgErrorCodes.WrongOrgName:
              return i18next.t(
                'APPB2C.registration.results.organisations.editRo.error.missingOrgName'
              );
            default:
              return null;
          }
        case receivingOrgErrorCodes.OrgLimitReached:
          return i18next.t('APPB2C.registration.results.organisations.mod.delivery.postal.note4', {
            count: maxPostalReceivingOrgsCount,
          });
        case commonErrorCodes.PredicateValidator:
          if (
            [
              receivingOrgErrorCodes.OrgLimitReachedIol,
              receivingOrgErrorCodes.OrgLimitReachedUkvi,
            ].some((c) => c === property)
          )
            return i18next.t(
              'APPB2C.registration.results.organisations.receivingOrgsLimitReachedNote'
            );
          return null;

        default:
          return null;
      }
    });
  },

  tErrorMessageDraft: ({
    error,
  }: {
    error: ApiErrorsList | undefined;
  }): ErrorMessages | undefined => {
    if (!error) return undefined;

    return (error?.errors || []).map((e) => {
      const { code, property } = e;

      switch (code) {
        case commonErrorCodes.NotEmptyValidator:
          switch (property) {
            case sharedCommonErrorProps.firstName:
              return i18next.t('APPB2C.cj.personalDetails.error.missingFirstName');
            case sharedCommonErrorProps.surname:
              return i18next.t('APPB2C.cj.personalDetails.error.missingSurname');
            case commonErrorProps.countryId:
              return i18next.t('APPB2C.registration.testTaker.editContact.error.missingCountry');
            case sharedCommonErrorProps.addressLine1:
              return i18next.t('APPB2C.registration.testTaker.editContact.error.missingAddress');
            case sharedCommonErrorProps.town:
              return i18next.t('APPB2C.cj.personalDetails.error.missingTown');
            case sharedCommonErrorProps.idNumber:
              return i18next.t('APPB2C.cj.idDetails.error.missingIdNumber');
            case sharedCommonErrorProps.issuingAuthority:
              return i18next.t('APPB2C.cj.idDetails.error.missingIssuingAuthority');
            case commonErrorProps.idTypeId:
              return i18next.t('APPB2C.cj.idDetails.error.missingIdType');

            default:
              return null;
          }
        case commonErrorCodes.NotNullValidator:
          if (property === sharedCommonErrorProps.idExpiry)
            return i18next.t('APPB2C.cj.idDetails.error.missingIdExpiry');
          return null;
        case commonErrorCodes.RegularExpressionValidator:
          if (property === commonErrorProps.mobile)
            return i18next.t('APPB2C.common.basic.forms.validMobile');
          return null;
        case commonErrorCodes.LengthValidator:
          switch (property) {
            case sharedCommonErrorProps.firstName:
              return i18next.t('APPB2C.common.basic.forms.firstNameMaxLength', {
                count: commonMaxLengths.name,
              });
            case sharedCommonErrorProps.surname:
              return i18next.t('APPB2C.common.basic.forms.surnameMaxLength', {
                count: commonMaxLengths.name,
              });
            case sharedCommonErrorProps.addressLine1:
            case sharedCommonErrorProps.addressLine2:
            case sharedCommonErrorProps.addressLine3:
            case sharedCommonErrorProps.addressLine4:
              return i18next.t('APPB2C.common.basic.forms.addressMaxLength', {
                count: commonMaxLengths.address,
              });
            case sharedCommonErrorProps.town:
              return i18next.t('APPB2C.common.basic.forms.townMaxLength', {
                count: commonMaxLengths.address,
              });
            case sharedCommonErrorProps.postCode:
              return i18next.t('APPB2C.common.basic.forms.postCodeMaxLength', {
                count: commonMaxLengths.postCode,
              });
            case sharedCommonErrorProps.state:
              return i18next.t('APPB2C.common.basic.forms.stateMaxLength', {
                count: commonMaxLengths.address,
              });

            default:
              return null;
          }

        default:
          if (property === commonErrorProps.mobile)
            return i18next.t('APPB2C.cj.personalDetails.error.missingMobile');
          if (property === draftdErrorCodes.provisionalCandidateNotFound)
            return i18next.t('APPB2C.common.draft.error.pastDeadline');
          return null;
      }
    });
  },

  tErrorMessagePassword: (error: ApiErrorsList | undefined): ErrorMessages | undefined => {
    if (!error) return undefined;

    return (error?.errors || []).map((e) => {
      switch (e.code) {
        case passwordErrorCodes.OldPasswordIsWrong:
          return i18next.t('APPB2C.auth.changePassword.error.wrongOldPassword');
        case passwordErrorCodes.DifferentPasswords:
          return i18next.t('APPB2C.auth.changePassword.error.differentPasswords');
        case passwordErrorCodes.PasswordDoesntMeetRequirements:
          return i18next.t('APPB2C.auth.resetPassword.error.wrongPassword');

        default:
          return null;
      }
    });
  },

  tErrorMessageResetPassword: (error: ApiErrorsList | undefined): ErrorMessages | undefined => {
    if (!error) return undefined;

    return (error?.errors || []).map((e) => {
      switch (e.message) {
        case 'The password you entered does not meet the requirements.':
          return i18next.t('APPB2C.auth.resetPassword.error.wrongPassword');
        case 'Link to reset your password has expired. Please use "Forgot Password" on login screen to receive new link.':
          return i18next.t('APPB2C.auth.resetPassword.error.expiredToken');
        case 'Your temporary link for password reset is invalid.':
          return i18next.t('APPB2C.auth.resetPassword.error.wrongToken');

        default:
          return null;
      }
    });
  },

  tErrorMessageEorRequest: (errors: (ApiErrorsList | undefined)[]): ErrorMessages | undefined => {
    const allErrors = reduceMultipleErrorSources(errors);

    if (!allErrors) return undefined;

    return allErrors.map((e) => {
      const { code, property } = e;

      switch (code) {
        /** EOR ors2 */
        case commonErrorCodes.NotEmptyValidator:
          switch (property) {
            case eorErrorCodes.selectedComponents:
              return i18next.t('APPB2C.registration.results.eor.preDeadline.scoresRequired');
            case sharedCommonErrorProps.email:
              return i18next.t('APPB2C.common.account.details.email.validEmail');
            case commonErrorProps.countryId:
              return i18next.t('APPB2C.registration.testTaker.editContact.error.missingCountry');
            case sharedCommonErrorProps.firstName:
              return i18next.t('APPB2C.cj.personalDetails.error.missingFirstName');
            case sharedCommonErrorProps.surname:
              return i18next.t('APPB2C.cj.personalDetails.error.missingSurname');
            case sharedCommonErrorProps.streetAddress1:
              return i18next.t('APPB2C.registration.testTaker.editContact.error.missingAddress');
            case sharedCommonErrorProps.town:
              return i18next.t('APPB2C.cj.personalDetails.error.missingTown');
            default:
              return null;
          }
        case commonErrorCodes.LengthValidator:
          switch (property) {
            case sharedCommonErrorProps.firstName:
              return i18next.t('APPB2C.common.basic.forms.firstNameMaxLength', {
                count: commonMaxLengths.name,
              });
            case sharedCommonErrorProps.surname:
              return i18next.t('APPB2C.common.basic.forms.surnameMaxLength', {
                count: commonMaxLengths.name,
              });
            case sharedCommonErrorProps.streetAddress1:
            case sharedCommonErrorProps.streetAddress2:
            case sharedCommonErrorProps.streetAddress3:
            case sharedCommonErrorProps.streetAddress4:
              return i18next.t('APPB2C.common.basic.forms.addressMaxLength', {
                count: commonMaxLengths.address,
              });
            case sharedCommonErrorProps.town:
              return i18next.t('APPB2C.common.basic.forms.townMaxLength', {
                count: commonMaxLengths.address,
              });
            case sharedCommonErrorProps.postCode:
              return i18next.t('APPB2C.common.basic.forms.postCodeMaxLength', {
                count: commonMaxLengths.postCode,
              });
            default:
              return null;
          }
        case commonErrorCodes.NotNullValidator:
          if (property === eorErrorCodes.trfNumber)
            return i18next.t('APPB2C.registration.results.eor.preDeadline.error.missingTrfNumber');
          return null;
        case commonErrorCodes.EmailValidator:
          if (property === sharedCommonErrorProps.email)
            return i18next.t('APPB2C.common.account.details.email.validEmail');
          return null;
        case commonErrorCodes.RegularExpressionValidator:
          if (property === commonErrorProps.mobile)
            return i18next.t('APPB2C.common.basic.forms.validMobile');
          if (property === eorErrorCodes.trfNumber)
            return i18next.t('APPB2C.registration.results.eor.preDeadline.error.wrongTrfNumber');
          return null;

        /** EOR mod */
        case eorErrorCodes.NoSelectedComponents:
          return i18next.t('APPB2C.registration.results.eor.preDeadline.scoresRequired');
        case eorErrorCodes.Email:
          return i18next.t('APPB2C.common.account.details.email.validEmail');
        case eorErrorCodes.CountryIdNotEmpty:
          return i18next.t('APPB2C.registration.testTaker.editContact.error.missingCountry');
        case eorErrorCodes.FirstNameNotEmpty:
          return i18next.t('APPB2C.cj.personalDetails.error.missingFirstName');
        case eorErrorCodes.SurnameNotEmpty:
          return i18next.t('APPB2C.cj.personalDetails.error.missingSurname');
        case eorErrorCodes.StreetAddress1NotEmpty:
          return i18next.t('APPB2C.registration.testTaker.editContact.error.missingAddress');
        case eorErrorCodes.TownNotEmpty:
          return i18next.t('APPB2C.cj.personalDetails.error.missingTown');
        case eorErrorCodes.EorNoteMaxLength:
          return i18next.t(
            'APPB2C.registration.results.eor.preDeadline.error.explanationMaxLength',
            {
              count: eorMaxValidLengths.explanation,
            }
          );
        case eorErrorCodes.FirstNameMaxLength:
          return i18next.t('APPB2C.common.basic.forms.firstNameMaxLength', {
            count: commonMaxLengths.name,
          });
        case eorErrorCodes.SurnameMaxLength:
          return i18next.t('APPB2C.common.basic.forms.surnameMaxLength', {
            count: commonMaxLengths.name,
          });
        case eorErrorCodes.StreetAddress1MaxLength:
        case eorErrorCodes.StreetAddress2MaxLength:
        case eorErrorCodes.StreetAddress3MaxLength:
        case eorErrorCodes.StreetAddress4MaxLength:
          return i18next.t('APPB2C.common.basic.forms.addressMaxLength', {
            count: commonMaxLengths.address,
          });
        case eorErrorCodes.TownMaxLength:
          return i18next.t('APPB2C.common.basic.forms.townMaxLength', {
            count: commonMaxLengths.address,
          });
        case eorErrorCodes.PostCodeMaxLength:
          return i18next.t('APPB2C.common.basic.forms.postCodeMaxLength', {
            count: commonMaxLengths.postCode,
          });
        case eorErrorCodes.TelephoneMaxLength:
          return i18next.t('APPB2C.common.basic.forms.validMobile');

        /** Payment */
        case regErrorCodes.WrongPaymentConfig:
          return i18next.t('APPB2C.cj.review.error.wrongPaymentConfig');

        default:
          return null;
      }
    });
  },
};
