import { DateTime } from 'luxon';
import {
  AtrfStatus as IcROStatus,
  AwardingBodySystem,
  RegistrationStedOrganisationDisplayDetails,
} from 'ors-api/ors2';
import { RegistrationStedOrganisationDisplayDetails as RegistrationStedOrganisationDisplayDetailsUkvi } from 'ors-api/ukvi';
import {
  ProductSettingsDto,
  RegistrationDto as RegistrationDtoIol,
  RegistrationReceivingOrganisationDto,
  RegistrationReceivingOrganisationStatus as IolROStatus,
  RegistrationStatus as IolRegStatus,
} from 'ors-api/iol';
import {
  RegistrationDto as RegistrationDtoMod,
  RegistrationReceivingOrganisationDto as RegistrationReceivingOrganisationDtoMod,
  RegistrationStatus,
} from 'ors-api/mod';
import { countryIsoCode2, isLifeSkillsExam } from 'ors-utils';

import { ReceivingOrgsAllowedActions } from 'store/receivingOrgs';
import {
  RegOrigin,
  ReceivingOrgStatus,
  UnifiedReceivingOrganisation,
  UnifiedResultDetails,
  UnifiedEorDetails,
} from './../models';
import { convertIcUkviLrwFormat } from './registration';

const recOrgStatus = {
  toReceivingOrgStatus: () => ({
    fromIcROStatus: (status?: IcROStatus): ReceivingOrgStatus => {
      switch (status) {
        case IcROStatus.New:
          return 'new';
        case IcROStatus.Completed:
          return 'completed';

        default:
          return 'new';
      }
    },
    fromIolROStatus: (status: IolROStatus): ReceivingOrgStatus => {
      switch (status) {
        case IolROStatus.New:
          return 'new';
        case IolROStatus.AcceptedByCambridge:
          return 'confirmed';
        case IolROStatus.CancellationRequested:
          return 'cancel-requested';
        case IolROStatus.CancellationConfirmed:
          return 'cancel-confirmed';
        case IolROStatus.DeliveryRequested:
          return 'completed';

        default:
          return 'new';
      }
    },
  }),
};

export const results = {
  toUnifiedResults: () => ({
    fromIcUkviRegDetails: (exam: RegistrationDtoMod, eorComplete: boolean) => {
      const results: UnifiedResultDetails = {
        registrationId: exam.id,
        examFormat: convertIcUkviLrwFormat(exam.examFormat),
        hasResults: exam.hasExamResults,
        receivingOrgsSelectionDeadline: DateTime.fromISO(exam?.lrwExam?.examDate ?? '').plus({
          years: 2,
        }),
        isCancelled: exam.status === RegistrationStatus.Cancelled,
        isExported: exam.exported,
        isB2B: exam.isRegistrationB2B,
        eorComplete: eorComplete,
        centreId: exam.centre?.centreId,
        organisationCountryId: exam.organisationCountryId,
        whoPays: exam.payment?.whoPays,
        awardingBodySystem:
          'awardingBodySystem' in exam ? exam.awardingBodySystem : AwardingBodySystem.IWAS,
        isLifeSkill: isLifeSkillsExam(exam.productId),
        oneSkillRetake: 'oneSkillRetake' in exam ? exam.oneSkillRetake : undefined,
        requestedActiveOneSkillRetake:
          'requestedActiveOneSkillRetake' in exam ? exam.requestedActiveOneSkillRetake : undefined,
      };
      return results;
    },
    fromIolRegDetails: (exam: RegistrationDtoIol, settings: ProductSettingsDto) => {
      const results: UnifiedResultDetails = {
        registrationId: exam.id,
        examFormat: 'online',
        hasResults: exam.status === IolRegStatus.HasResults,
        receivingOrgsSelectionDeadline: undefined,
        maxReceivingOrgsCount: settings.maxNumberOfFreeROSelections,
        isCancelled: exam.status === IolRegStatus.Cancelled,
        awardingBodySystem: AwardingBodySystem.CMDS,
      };
      return results;
    },
  }),
};

export const eor = {
  toUnifiedEor: () => ({
    fromIcUkviRegDetails: (exam: RegistrationDtoMod) => {
      const eor: UnifiedEorDetails = {
        registrationId: exam.id,
        registrationReference: exam.reference,
        currency: exam.payment?.currencyCode,
        centreEmail: exam.centre?.centreEmail,
        centreTelephone: exam.centre?.centreTelephone,
        centreId: exam.centre?.centreId,
        organisationCountryId: exam.organisationCountryId,
        awardingBodySystem:
          'awardingBodySystem' in exam ? exam.awardingBodySystem : AwardingBodySystem.IWAS,
        osrComponent: 'oneSkillRetake' in exam ? exam.oneSkillRetake?.component : undefined,
        showInvoiceInfo:
          'countryIsoCode2' in exam && exam?.countryIsoCode2 === countryIsoCode2.TAIWAN,
      };
      return eor;
    },
    fromIolRegDetails: (exam: RegistrationDtoIol) => {
      const eor: UnifiedEorDetails = {
        registrationId: exam.id,
        registrationReference: exam.registrationReference,
        productId: exam.productId,
      };
      return eor;
    },
  }),
};

export const selectedReceivingOrgs = {
  toUnifiedReceivingOrgs: (registrationId: number, registrationCancelled: boolean) => ({
    fromIwasROs: (
      orgs: Partial<
        RegistrationStedOrganisationDisplayDetails | RegistrationStedOrganisationDisplayDetailsUkvi
      >[],
      awardingBodySystem: AwardingBodySystem,
      origin?: RegOrigin
    ) => {
      const organisations: UnifiedReceivingOrganisation[] = orgs.map(
        (org) =>
        ({
          ...org,
          registrationId: registrationId,
          registrationCancelled: registrationCancelled,
          referenceId: org.id,
          status: recOrgStatus
            .toReceivingOrgStatus()
            .fromIcROStatus('status' in org ? org.status : undefined),
          organisationName:
            ('stedOrganisationName' in org && org.stedOrganisationName) ||
            ('existingStedOrganisationName' in org && org.existingStedOrganisationName) ||
            org.otherOrganisationName,
          caseNumber: org.fileOrCaseNumber,
          contactPerson: org.nameOfPerson,
          hasConditions: false,
          origin: awardingBodySystem === AwardingBodySystem.CMDS ? 'mod' : origin ?? 'ors',
        } as UnifiedReceivingOrganisation)
      );
      return organisations;
    },
    fromCmdsROs: (
      orgs: (RegistrationReceivingOrganisationDto | RegistrationReceivingOrganisationDtoMod)[],
      origin?: RegOrigin,
      receivingOrgsAllowedActions?: ReceivingOrgsAllowedActions
    ) => {
      const organisations: UnifiedReceivingOrganisation[] = orgs.map((org) => {
        const res = {
          ...org,
          ...org.address,
          registrationId: registrationId,
          registrationCancelled: registrationCancelled,
          referenceId: org.id,
          status: recOrgStatus.toReceivingOrgStatus().fromIolROStatus(org.status),
          organisationName: org.name,
          postCode: org.address?.postalCode,
          origin: origin ?? 'iol',
          readingMinimumScore: org.registrationReceivingOrganisationMinimumScores?.readingScore,
          listeningMinimumScore: org.registrationReceivingOrganisationMinimumScores?.listeningScore,
          writingMinimumScore: org.registrationReceivingOrganisationMinimumScores?.writingScore,
          speakingMinimumScore: org.registrationReceivingOrganisationMinimumScores?.speakingScore,
          overallMinimumScore: org.registrationReceivingOrganisationMinimumScores?.overallScore,
          allowedActions: receivingOrgsAllowedActions?.[org.id],
        } as UnifiedReceivingOrganisation;

        return res;
      });
      return organisations;
    },
  }),
};
