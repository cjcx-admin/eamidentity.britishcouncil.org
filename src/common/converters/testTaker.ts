import { DateTime } from 'luxon';
import {
  AwardingBodySystem,
  RegistrationDocumentFileModel,
  RegistrationDocumentFileStatus,
  RegistrationStatus as IcRegStatus,
} from 'ors-api/ors2';
import {
  IdentityDocumentStatus,
  RegistrationDocumentsIdentityDocumentDto,
  RegistrationDto as RegistrationDtoIol,
  RegistrationStatus as IolRegStatus,
} from 'ors-api/iol';
import {
  CountryDto,
  GenderDto,
  RegistrationDto as RegistrationDtoMod,
  RegistrationTestTakerDto,
} from 'ors-api/mod';
import { UnifiedFile } from 'ors-utils';

import { IdFileStatus, RegDocStatus, UnifiedTestTakerDetails } from './../models';
import i18next from '../i18n';
import { getIdName } from 'pages/TestDetails/TestTaker/utils';

export const fileStatus = {
  toIdFileStaus: () => ({
    fromIcFileStatus: (status: RegistrationDocumentFileStatus): IdFileStatus => {
      switch (status) {
        case RegistrationDocumentFileStatus.Pending:
          return 'pending';
        case RegistrationDocumentFileStatus.Reviewed:
          return 'reviewed';
        case RegistrationDocumentFileStatus.Approved:
          return 'approved';
        case RegistrationDocumentFileStatus.Rejected:
          return 'rejected';
        case RegistrationDocumentFileStatus.Deleted:
          return 'deleted';

        default:
          return 'pending';
      }
    },
    fromIolIdDocStatus: (status: IdentityDocumentStatus): IdFileStatus => {
      switch (status) {
        case IdentityDocumentStatus.NotVerified:
          return 'pending';
        case IdentityDocumentStatus.Accepted:
          return 'approved';
        case IdentityDocumentStatus.Rejected:
          return 'rejected';

        default:
          return 'pending';
      }
    },
  }),
  toFileStausName: () => ({
    fromFileStatus: (status?: IdFileStatus): string => {
      switch (status) {
        case 'pending':
          return i18next.t('APPB2C.common.filePreview.statusName.pending');
        case 'reviewed':
          return i18next.t('APPB2C.common.filePreview.statusName.reviewed');
        case 'approved':
          return i18next.t('APPB2C.common.filePreview.statusName.approved');
        case 'rejected':
          return i18next.t('APPB2C.common.filePreview.statusName.rejected');
        case 'deleted':
          return i18next.t('APPB2C.common.filePreview.statusName.deleted');

        default:
          return i18next.t('APPB2C.common.filePreview.statusName.pending');
      }
    },
  }),
};

export const testTakerDetails = {
  toUnifiedTestTakerDetails: () => ({
    fromIcUkviDetails: ({
      testTaker,
      reg,
      idFileSettings,
      genders,
      countries,
      awardingBodySystem,
      missingChildConsent,
    }: {
      testTaker: RegistrationTestTakerDto;
      reg: RegistrationDtoMod;
      idFileSettings: RegDocStatus;
      genders: GenderDto[];
      countries: CountryDto[];
      awardingBodySystem?: AwardingBodySystem;
      missingChildConsent?: boolean;
    }) => {
      const regCancelled = reg.status === IcRegStatus.Cancelled;
      const { docStatusloading, canEditMedicalEvidence } = idFileSettings;
      const ttDetails: UnifiedTestTakerDetails = {
        testTakerId: reg.registrationTestTaker?.id,
        isMinor: reg.registrationTestTaker?.id !== reg.registrationOwner?.id,
        firstName: reg.registrationTestTaker?.firstName,
        surname: reg.registrationTestTaker?.surname,
        dob: reg.registrationTestTaker?.dateOfBirth,
        titleId: reg.registrationTestTaker?.titleId,
        genderName: genders.find((g) => g.shortCode === reg.registrationTestTaker?.genderShortCode)
          ?.name,
        genderShortcode: reg.registrationTestTaker?.genderShortCode,
        email: reg.registrationTestTaker?.email,
        addressLine1: reg.registrationTestTaker?.address?.streetAddress1,
        addressLine2: reg.registrationTestTaker?.address?.streetAddress2,
        addressLine3: reg.registrationTestTaker?.address?.streetAddress3,
        town: reg.registrationTestTaker?.address?.town,
        postCode: reg.registrationTestTaker?.address?.postCode,
        state: reg.registrationTestTaker?.address?.state,
        country: countries.find((c) => c.id === reg.registrationTestTaker?.address?.countryId)
          ?.name,
        countryId: reg.registrationTestTaker?.address?.countryId,
        mobile: reg.registrationTestTaker?.mobile,
        idTypeId: reg.registrationTestTaker?.idDocument?.documentTypeId,
        idTypeName: getIdName(reg.registrationTestTaker?.idDocument?.documentTypeId),
        idNumber: reg.registrationTestTaker?.idDocument?.number,
        idExpiry: reg.registrationTestTaker?.idDocument?.expiryDate,
        issuingAuthority: reg.registrationTestTaker?.idDocument?.issuingAuthority,
        parentFirstName: reg.registrationOwner?.firstName,
        parentSurname: reg.registrationOwner?.surname,
        parentDob: reg.registrationOwner?.dateOfBirth,
        parentEmail: reg.registrationOwner?.email,
        registrationId: reg.id,
        registrationCancelled: regCancelled,
        registrationCompleted:
          DateTime.fromISO(reg?.lrwExam?.examDate ?? '') < DateTime.now() && !regCancelled,
        organisationCountryId: reg.organisationCountryId,
        centreId: reg?.centre?.centreId,
        docStatusloading,
        hasSpecialArrangements: testTaker.hasSpecialArrangements,
        specialArrangementIds: testTaker.specialArrangements,
        canEditMedicalEvidence,
        missingChildConsent: missingChildConsent,
        awardingBodySystem: awardingBodySystem,
      };
      return ttDetails;
    },
    fromIolDetails: ({
      reg,
      idDoc,
      genders,
      countries,
    }: {
      reg: RegistrationDtoIol;
      idDoc: RegistrationDocumentsIdentityDocumentDto;
      genders: GenderDto[];
      countries: CountryDto[];
    }) => {
      const regCancelled = reg.status === IolRegStatus.Cancelled;
      const ttDetails: UnifiedTestTakerDetails = {
        isMinor: false,
        firstName: reg.testTaker?.firstName,
        surname: reg.testTaker?.surname,
        dob: reg.testTaker?.dateOfBirth,
        genderId: reg.testTaker?.genderId,
        genderName: genders.find((g) => g.id === reg.testTaker?.genderId)?.name,
        email: reg.testTaker?.email,
        addressLine1: reg.testTaker?.address?.streetAddress1,
        addressLine2: reg.testTaker?.address?.streetAddress2,
        addressLine3: reg.testTaker?.address?.streetAddress3,
        town: reg.testTaker?.address?.town,
        postCode: reg.testTaker?.address?.postCode,
        country: countries.find((c) => c.id === reg.testTaker?.address?.countryId)?.name,
        countryId: reg.testTaker?.address?.countryId,
        mobile: reg.testTaker?.mobile,
        idTypeId: idDoc.idTypeId,
        idNumber: idDoc.idNumber,
        idExpiry: idDoc.expiryDate,
        idStatus: fileStatus.toIdFileStaus().fromIolIdDocStatus(idDoc.status),
        idNote: idDoc.informationForTestTaker,
        issuingAuthority: idDoc.idIssuingAuthority,
        registrationId: reg.id,
        registrationCancelled: regCancelled,
        registrationCompleted:
          DateTime.fromISO(reg.lrwSession?.startDateTime ?? '') < DateTime.utc() && !regCancelled,
        productId: reg.productId,
      };
      return ttDetails;
    },
  }),
};

export const uploadedFiles = {
  toUnifiedFiles: () => ({
    fromIcFiles: (idFiles?: RegistrationDocumentFileModel[]) => {
      const files: UnifiedFile[] | undefined = idFiles?.map((file) => ({
        id: file.id,
        status: fileStatus.toIdFileStaus().fromIcFileStatus(file.statusId),
        url: file.url,
        note: file.note,
      }));
      return files;
    },
    fromIolIdDoc: (idDoc?: RegistrationDocumentsIdentityDocumentDto) => {
      const files: UnifiedFile[] | undefined = idDoc?.files?.map((file) => ({
        id: file.id,
        status: fileStatus.toIdFileStaus().fromIolIdDocStatus(idDoc.status),
        url: file.url,
      }));
      return files;
    },
  }),
};
