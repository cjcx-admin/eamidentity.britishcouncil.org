import { DateTime } from 'luxon';
import { Exam, ExamFormat, RegistrationStatus as IcRegStatus, SpeakingFormat } from 'ors-api/ors2';
import { Exam as ExamUkvi } from 'ors-api/ukvi';
import {
  IELTSProducts as IELTSOnlineProducts,
  RegistrationDto as RegistrationDtoIol,
  RegistrationStatus as IolRegStatus,
  TestTakerRegistrationDto,
} from 'ors-api/iol';
import {
  CandidateRegistrationBasicInformationDto,
  CountryDto,
  ProductsInCentre,
  RegistrationDto as RegistrationDtoMod,
  RegistrationPreparationMaterialsDto,
  RegistrationTransferRequestAvailableSpeakingSlotDto,
} from 'ors-api/mod';
import { examTypeDescription, getCtxFromProductId, localeFns } from 'ors-utils';

import { ExamData } from 'components/testDetails/types';
import {
  AlertBar,
  ExamMode,
  ExamStatus,
  ExamType,
  LrwFormatCode,
  RegistrationHeader,
  SpeakingFormatCode,
  UnifiedExam,
} from './../models';

export const F2F_NAME = 'Face to face';
export const VCS_NAME = 'Video call at the test centre';

export const speakingFormat = {
  fromSpeakingFormat: (
    val: SpeakingFormat | null | undefined,
    productId: string | null | undefined = undefined
  ) => ({
    toCode: () => {
      switch (productId) {
        case ProductsInCentre.UKVILifeSkillsA1:
        case ProductsInCentre.UKVILifeSkillsA2:
        case ProductsInCentre.UKVILifeSkillsB1:
          return 'life-skills';
        default:
          if (val === SpeakingFormat.Remote) return 'vcs';
          if (val === SpeakingFormat.Live) return 'f2f';
      }
      return null;
    },
    toCode2: (): SpeakingFormatCode => {
      switch (val) {
        case SpeakingFormat.Live:
          return 'live';
        case SpeakingFormat.Remote:
          return 'remote';
        default:
          return 'remote';
      }
    },
    toGtmCode: () => {
      if (val === SpeakingFormat.Remote) return 'vcs';
      if (val === SpeakingFormat.Live) return 'face2face';
      return undefined;
    },
    toName: () => {
      if (val === SpeakingFormat.Remote) return VCS_NAME;
      if (val === SpeakingFormat.Live) return F2F_NAME;
      return null;
    },
  }),

  /** Parses speaking format codes. Handles different casing. @examples 'vcs', 'face2face', 'f2f' */
  fromSpeakingFormatCode: (val: string | null | undefined) => ({
    toEnum: () => {
      if (val === null || val === undefined) {
        return null;
      }
      const lowerVal = val.toLowerCase();
      if (lowerVal === 'vcs') return SpeakingFormat.Remote;
      if (lowerVal === 'f2f' || lowerVal === 'face2face') return SpeakingFormat.Live;
      return null;
    },
  }),
};

export const isExamInPast = (dates: string[], timeZoneId?: string): boolean => {
  if (dates.length === 0) return false;

  return timeZoneId
    ? dates.every(
        (date) =>
          DateTime.fromISO(date, {
            zone: timeZoneId,
          }).endOf('day') < DateTime.utc().endOf('day')
      )
    : dates.every((date) => DateTime.fromISO(date).endOf('day') < DateTime.now().endOf('day'));
};

export const examCardData = {
  fromAvailableSpeakingSlot: (
    slot: RegistrationTransferRequestAvailableSpeakingSlotDto,
    locale: string
  ) => ({
    toSpeakingData: () => {
      const examData: ExamData = {
        venueName: slot?.venueName,
        examDate: getFullDate(locale, 'long', slot?.date),
        startTime: slot?.startTime,
        endTime: slot?.endTime,
        speakingFormat: speakingFormat.fromSpeakingFormat(slot?.speakingFormat).toCode2(),
        venueStreetAddress1: slot?.venueStreetAddress1,
        venueStreetAddress2: slot?.venueStreetAddress2,
        venueCity: slot?.venueCity,
        venuePostCode: slot?.venuePostCode,
        venueState: slot?.venueState,
        venueLatitude: slot?.venueLatitude,
        venueLongitude: slot?.venueLongitude,
      };
      return examData;
    },
  }),
  fromRegistrationDetails: (locale: string, reg?: RegistrationDtoMod) => ({
    toLrwExamData: () => {
      const examData: ExamData = {
        venueName: reg?.lrwExam?.venue?.venueName,
        examDate: getFullDate(locale, 'long', reg?.lrwExam?.examDate),
        startTime: reg?.lrwExam?.startTime,
        endTime: reg?.lrwExam?.endTime,
        examFormat: convertIcUkviLrwFormat(reg?.examFormat),
        examInPast: isExamInPast([reg?.lrwExam?.examDate ?? '']),
        venueStreetAddress1: reg?.lrwExam?.venue?.venueStreetAddress1,
        venueStreetAddress2: reg?.lrwExam?.venue?.venueStreetAddress2,
        venueCity: reg?.lrwExam?.venue?.venueCity,
        venuePostCode: reg?.lrwExam?.venue?.venuePostCode,
        venueState: reg?.lrwExam?.venue?.venueState,
        venueLatitude: reg?.lrwExam?.venue?.venueLatitude,
        venueLongitude: reg?.lrwExam?.venue?.venueLongitude,
        arriveTime: reg?.lrwExam?.candidateArrivalTime,
      };
      return examData;
    },
    toSpeakingData: () => {
      const examData: ExamData = {
        venueName: reg?.speakingExam?.venue?.venueName,
        examDate: getFullDate(locale, 'long', reg?.speakingExam?.date),
        startTime: reg?.speakingExam?.startTime,
        endTime: reg?.speakingExam?.endTime,
        speakingFormat: speakingFormat
          .fromSpeakingFormat(reg?.speakingExam?.speakingFormat)
          .toCode2(),
        examInPast: isExamInPast([reg?.speakingExam?.date ?? '']),
        venueStreetAddress1: reg?.speakingExam?.venue?.venueStreetAddress1,
        venueStreetAddress2: reg?.speakingExam?.venue?.venueStreetAddress2,
        venueCity: reg?.speakingExam?.venue?.venueCity,
        venueState: reg?.speakingExam?.venue?.venueState,
        venuePostCode: reg?.speakingExam?.venue?.venuePostCode,
        venueLatitude: reg?.speakingExam?.venue?.venueLatitude,
        venueLongitude: reg?.speakingExam?.venue?.venueLongitude,
      };
      return examData;
    },
  }),
  fromRegistrationIol: (reg: RegistrationDtoIol, locale: string) => ({
    toLrwExamData: (countries?: CountryDto[]) => {
      const { lrwSession } = reg;
      const now = DateTime.local({ locale, zone: reg.timeZoneId });
      const examData: ExamData = {
        countryName: countries?.find((c) => c.id === reg.countryId)?.name,
        timeZoneId: reg.timeZoneId,
        timeZoneName: `${now.offsetNameLong} (${now.offsetNameShort})`,
        localTime: getTime(locale, DateTime.now().toISO(), reg.timeZoneId),
        examDate: getFullDate(locale, 'long', lrwSession?.startDateTime, reg.timeZoneId, true),
        startTime: lrwSession?.startDateTime,
        endTime: lrwSession?.endDateTime,
        examFormat: 'online',
      };
      return examData;
    },
    toSpeakingData: () => {
      const { speakingDay } = reg;
      const examData: ExamData = {
        timeZoneId: reg.timeZoneId,
        examDate: getFullDate(locale, 'long', speakingDay?.startDateTime, reg.timeZoneId, true),
        startTime: speakingDay?.startDateTime,
        endTime: speakingDay?.endDateTime,
        speakingFormat: 'online',
      };
      return examData;
    },
  }),
};

export const unifiedExams = {
  toUnifiedExams: (monthOption: 'short' | 'long', locale: string) => ({
    fromIcExams: (exams: Exam[]) => {
      const unifiedExams = exams.map(
        (exam) =>
          ({
            mode: 'ors',
            createdOn: exam.createdOn,
            countryIsoCode: exam.countryIsoCode,
            registrationId: exam.registrationId,
            lrwSortDate: exam.lrwExamDate,
            lrwDate: getFullDate(locale, monthOption, exam.lrwExamDate),
            lrwTimeSpan: getTimeSpan(locale, exam.lrwStartTime, exam.lrwEndTime),
            module: convertProductIdToExamType(exam.productId),
            moduleName: examTypeDescription(exam.productId),
            status: convertIcUkviExamStatus(exam.status, !!exam.overallScore),
            paid: exam.paid,
            speakingDate: getFullDate(locale, monthOption, exam.speakingExamDate),
            speakingTimeSpan: getTimeSpan(locale, exam.speakingStartTime, exam.speakingEndTime),
            lrwFormatCode: convertIcUkviLrwFormat(exam.lrwExamFormat),
            speakingFormatCode: speakingFormat
              .fromSpeakingFormat(exam.speakingFormat, exam.productId)
              .toCode2(),
            overallScore: exam.overallScore,
            districtId: exam.districtId,
            location: exam.location,
            selfServiceRequests: exam.selfServiceRequests,
            missingDocuments: exam.missingDocuments,
            missingChildConsent: exam.isChildConsentMissing,
            whoPays: exam.whoPays,
            needTermsConsentUpdate: !exam.isTermsAndConditionsConsentUpdated,
            organisationCountryId: exam.organisationCountryId,
            isPendingCancellationRequest: exam.isPendingCancellationRequest,
            isAgentAffiliatedWithApplyBoard: exam.isAgentAffiliatedWithApplyBoard,
            isBcOrganisation: exam.isBcOrganisation,
            isFromB2B: exam.isFromB2B,
            productId: exam.productId,
            oneSkillRetake: exam.oneSkillRetake,
            requestedActiveOneSkillRetake: exam.requestedActiveOneSkillRetake,
            paymentDeadline: exam.paymentDeadline,
            pendingPaymentProofUploadDate: exam.pendingPaymentProofUploadDate,
          } as UnifiedExam)
      );
      return unifiedExams;
    },
    fromUkviExams: (exams: ExamUkvi[]) => {
      const unifiedExams = exams.map(
        (exam) =>
          ({
            mode: 'ukvi',
            createdOn: exam.createdOn,
            countryIsoCode: exam.countryIsoCode,
            registrationId: exam.registrationId,
            lrwSortDate: exam.lrwExamDate,
            lrwDate: getFullDate(locale, monthOption, exam.lrwExamDate),
            lrwTimeSpan: getTimeSpan(locale, exam.lrwStartTime, exam.lrwEndTime),
            module: convertProductIdToExamType(exam.productId),
            moduleName: examTypeDescription(exam.productId),
            status: convertIcUkviExamStatus(
              exam.status,
              !!exam.overallScore || exam.lifeSkillsSpeakingPassed !== null
            ),
            paid: exam.paid,
            speakingDate: getFullDate(locale, monthOption, exam.speakingExamDate),
            speakingTimeSpan: getTimeSpan(locale, exam.speakingStartTime, exam.speakingEndTime),
            lrwFormatCode: convertIcUkviLrwFormat(exam.lrwExamFormat),
            speakingFormatCode: speakingFormat
              .fromSpeakingFormat(exam.speakingFormat, exam.productId)
              .toCode2(),
            overallScore: exam.overallScore,
            lifeSkillsPassed: exam.lifeSkillsSpeakingPassed,
            location: exam.location,
            selfServiceRequests: [],
            missingDocuments: exam.missingDocuments,
            missingChildConsent: exam.isChildConsentMissing,
            whoPays: exam.whoPays,
            needTermsConsentUpdate: !exam.isTermsAndConditionsConsentUpdated,
            isPendingCancellationRequest: false,
            isAgentAffiliatedWithApplyBoard: false,
            isBcOrganisation: false,
            isFromB2B: false,
            productId: exam.productId,
            organisationCountryId: exam.organisationCountryId,
            oneSkillRetake: exam.oneSkillRetake,
            requestedActiveOneSkillRetake: exam.requestedActiveOneSkillRetake,
            paymentDeadline: exam.paymentDeadline,
            pendingPaymentProofUploadDate: exam.pendingPaymentProofUploadDate,
          } as UnifiedExam)
      );

      return unifiedExams;
    },
    fromIolExams: (exams: TestTakerRegistrationDto[]) => {
      const unifiedExams = exams.map(
        (exam) =>
          ({
            mode: 'iol',
            createdOn: exam.createdOn,
            countryIsoCode: exam.countryIsoCode,
            registrationId: exam.registrationId,
            lrwSortDate: DateTime.fromISO(exam.lrwStartDateTimeUtc, {
              zone: exam.timeZoneId,
            }).toISODate({}),
            lrwDate: getFullDate(locale, monthOption, exam.lrwStartDateTimeUtc, exam.timeZoneId),
            lrwTimeSpan: getTimeSpan(
              locale,
              exam.lrwStartDateTimeUtc,
              exam.lrwEndDateTimeUtc,
              exam.timeZoneId
            ),
            module: convertProductIdToExamType(exam.productId),
            moduleName: examTypeDescription(exam.productId),
            status: convertIolExamStatus(exam.status, !!exam.overallScore),
            paid: exam.paid,
            speakingDate: getFullDate(
              locale,
              monthOption,
              exam.speakingStartDateTimeUtc,
              exam.timeZoneId
            ),
            speakingTimeSpan: getTimeSpan(
              locale,
              exam.speakingStartDateTimeUtc,
              exam.speakingEndDateTimeUtc,
              exam.timeZoneId
            ),
            lrwFormatCode: 'cd',
            speakingFormatCode: 'remote',
            overallScore: exam.overallScore,
            selfServiceRequests: exam.selfServiceRequests,
            missingDocuments: exam.missingDocuments,
            hasCredentials: exam.hasTestPlatformCredentialsEnabled,
            needTermsConsentUpdate: false,
            isPendingCancellationRequest: exam.isPendingCancellationRequest,
            productId: exam.productId,
          } as UnifiedExam)
      );
      return unifiedExams;
    },
  }),
};

export const regHeader = {
  toUnifiedRegHeader: (locale: string) => ({
    fromIcRegDetails: (examMod: RegistrationDtoMod) => {
      const regHeader: RegistrationHeader = {
        reference: examMod?.reference,
        moduleTitle: examTypeDescription(examMod?.productId),
        date: getFullDate(locale, 'long', examMod?.lrwExam?.examDate),
        hasResults: examMod?.hasExamResults ?? false,
        examInPast: isExamInPast([
          examMod?.lrwExam?.examDate ?? '',
          examMod?.speakingExam?.date ?? '',
        ]),
        firstName: examMod?.registrationTestTaker?.firstName,
        surname: examMod?.registrationTestTaker?.surname,
        centre: examMod?.centre?.centreName,
        osrComponent: examMod?.oneSkillRetake?.component,
      };
      return regHeader;
    },
    fromIolRegDetails: (exam: RegistrationDtoIol) => {
      const regHeader: RegistrationHeader = {
        reference: exam.registrationReference,
        moduleTitle: examTypeDescription(exam.productId),
        date: getFullDate(locale, 'long', exam.lrwSession?.startDateTime, exam.timeZoneId),
        hasResults: exam.status === IolRegStatus.HasResults,
        examInPast: isExamInPast(
          [exam.lrwSession?.endDateTime ?? '', exam.speakingDay?.endDateTime ?? ''],
          exam.timeZoneId
        ),
        firstName: exam.testTaker?.firstName,
        surname: exam.testTaker?.surname,
      };
      return regHeader;
    },
  }),
};

export const alertBar = {
  toUnifiedAlertBar: () => ({
    fromIcRegDetailsMod: (examMod: RegistrationDtoMod) => {
      const alertBar: AlertBar = {
        registrationId: examMod?.id,
        organisationCountryId: examMod?.organisationCountryId,
        status: convertIcUkviExamStatus(examMod?.status, examMod?.hasExamResults),
        regPaid: examMod.payment?.isPaid ?? false,
        examInPast: isExamInPast([
          examMod?.lrwExam?.examDate ?? '',
          examMod.speakingExam?.date ?? '',
        ]),
        missingChildConsent: examMod?.isChildConsentMissing,
        whoPays: examMod.payment?.whoPays,
        lrwFormatCode: convertIcUkviLrwFormat(examMod.examFormat),
        oneSkillRetake: examMod?.oneSkillRetake,
        requestedActiveOneSkillRetake: examMod?.requestedActiveOneSkillRetake,
        paymentDeadline: examMod.payment?.paymentDeadline,
        pendingPaymentProofUploadDate: examMod.payment?.pendingPaymentProofUploadDate,
        productId: examMod.productId,
      };
      return alertBar;
    },
    fromIolRegDetails: (reg: RegistrationDtoIol) => {
      const alertBar: AlertBar = {
        registrationId: reg.id,
        status: convertIolExamStatus(reg.status),
        regPaid: reg.isPaid,
        examInPast: isExamInPast(
          [reg.lrwSession?.endDateTime ?? '', reg.speakingDay?.endDateTime ?? ''],
          reg.timeZoneId
        ),
        hasCredentials: reg.testPlatformCredentials?.hasTestPlatformCredentialsEnabled,
        lrwFormatCode: 'online',
        productId: reg.productId,
      };
      return alertBar;
    },
  }),
};

function convertIcUkviExamStatus(status: IcRegStatus, hasExamResults: boolean): ExamStatus {
  switch (status) {
    case IcRegStatus.Incomplete:
      return 'incomplete';
    case IcRegStatus.Confirmed:
      return 'confirmed';
    case IcRegStatus.Cancelled:
      return 'cancelled';
    case IcRegStatus.AwaitingResults:
      return 'awaiting-results';
    case IcRegStatus.HasResults:
      return hasExamResults ? 'has-results' : 'awaiting-results';

    default:
      return 'incomplete';
  }
}

export function convertIcUkviLrwFormat(format?: ExamFormat): LrwFormatCode {
  switch (format) {
    case ExamFormat.PB:
      return 'pb';
    case ExamFormat.CD:
      return 'cd';

    default:
      return 'cd';
  }
}

function convertIolExamStatus(status: IolRegStatus, hasExamResults = true): ExamStatus {
  switch (status) {
    case IolRegStatus.Incomplete:
      return 'incomplete';
    case IolRegStatus.Confirmed:
      return 'confirmed';
    case IolRegStatus.Cancelled:
      return 'cancelled';
    case IolRegStatus.HasResults:
      return hasExamResults ? 'has-results' : 'awaiting-results';

    default:
      return 'incomplete';
  }
}

export function convertProductIdToExamType(productId: string | undefined): ExamType {
  switch (productId) {
    case IELTSOnlineProducts.OnlineAC:
    case IELTSOnlineProducts.UkviOnlineAC:
    case ProductsInCentre.IELTSAcademicPaperBase:
    case ProductsInCentre.IELTSAcademicComputerDelivered:
    case ProductsInCentre.UKVIAcademicPaperBase:
    case ProductsInCentre.UKVIAcademicComputerDelivered:
    case ProductsInCentre.IELTSOsrAcademicComputerDelivered:
      return 'ac';
    case IELTSOnlineProducts.OnlineGT:
    case IELTSOnlineProducts.UkviOnlineGT:
    case ProductsInCentre.IELTSGeneralTrainingPaperBase:
    case ProductsInCentre.IELTSGeneralTrainingComputerDelivered:
    case ProductsInCentre.UKVIGeneralTrainingPaperBase:
    case ProductsInCentre.UKVIGeneralTrainingComputerDelivered:
    case ProductsInCentre.IELTSOsrGeneralTrainingComputerDelivered:
      return 'gt';
    case ProductsInCentre.UKVILifeSkillsA1:
      return 'a1';
    case ProductsInCentre.UKVILifeSkillsA2:
      return 'a2';
    case ProductsInCentre.UKVILifeSkillsB1:
      return 'b1';
  }

  return 'ac';
}

interface HelpAndPreparationAdditionalData {
  lrwSortDate?: string;
  mode: ExamMode | '';
}

export interface TransformedRegistrationPreparationMaterialsDto
  extends RegistrationPreparationMaterialsDto,
    HelpAndPreparationAdditionalData {}

export interface TransformedCandidateRegistrationBasicInformationDto
  extends CandidateRegistrationBasicInformationDto,
    HelpAndPreparationAdditionalData {}

export const transformHelpAndPreparationExams = (
  exams: CandidateRegistrationBasicInformationDto[] | RegistrationPreparationMaterialsDto[],
  locale: string
) => {
  return exams.map((exam) => {
    let examDates;
    if ('lrwExamDate' in exam) {
      examDates = {
        lrwSortDate: exam.lrwExamDate,
        lrwExamDate: getFullDate(locale, 'short', exam.lrwExamDate),
      };
    }
    if ('lrwDate' in exam) {
      examDates = {
        lrwSortDate: exam.lrwDate,
        lrwDate: getFullDate(locale, 'short', exam.lrwDate),
      };
    }

    return { ...exam, ...examDates, mode: getCtxFromProductId(exam.productId) };
  });
};

const getFullDate = (
  locale: string,
  monthOption: 'short' | 'long',
  date?: string,
  timeZoneId?: string,
  showWeekday?: boolean
) =>
  localeFns(locale, timeZoneId).localeDate(date, {
    month: monthOption,
    weekday: showWeekday ? 'long' : undefined,
  });

const getTimeSpan = (locale: string, start?: string, end?: string, timeZoneId?: string) =>
  `${getTime(locale, start, timeZoneId)} - ${getTime(locale, end, timeZoneId)}`;

const getTime = (locale: string, date?: string, timeZoneId?: string) =>
  localeFns(locale, timeZoneId).localeTimeFromDate(date);
