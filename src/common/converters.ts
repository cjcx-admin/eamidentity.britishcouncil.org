import {
  BandScoreType,
  EnquiryOnResultsDetailsDataViewModel,
  ExamFormat,
  IeltsModule,
} from 'ors-api/ors2';
import { ComponentType, EnquiryOnResultsRequestDto } from 'ors-api/mod';

import { transactions } from './converters/transactions';
import { uploadedFiles, fileStatus, testTakerDetails } from './converters/testTaker';
import { eor, results, selectedReceivingOrgs } from './converters/results';
import {
  alertBar,
  examCardData,
  regHeader,
  speakingFormat,
  unifiedExams,
} from './converters/registration';
import { errors } from './apiErrors/apiErrorConverters';

const ieltsModule = {
  fromIeltsModule: (val: IeltsModule | null | undefined) => ({
    toCode: () => {
      if (val === IeltsModule.AC) return 'ac';
      if (val === IeltsModule.GT) return 'gt';
      return null;
    },
    toName: () => {
      if (val === IeltsModule.AC) return 'Academic';
      if (val === IeltsModule.GT) return 'General Training';
      return null;
    },
  }),

  /** Parses exam type codes. Handles different casing. @examples 'ac', 'gt' */
  fromExamTypeCode: (val: string | null | undefined) => ({
    toEnum: () => {
      if (val === null || val === undefined) {
        return null;
      }
      const lowerVal = val.toLowerCase();

      if (lowerVal === 'ac') return IeltsModule.AC;
      if (lowerVal === 'gt') return IeltsModule.GT;
      return null;
    },
    toName: () => {
      if (val === null || val === undefined) {
        return null;
      }
      const lowerVal = val.toLowerCase();

      if (lowerVal === 'ac') return 'Academic';
      if (lowerVal === 'gt') return 'General Training';
      return null;
    },
  }),

  fromModuleName: (val: string | null | undefined) => ({
    toCode: () => {
      if (val === null || val === undefined) {
        return null;
      }
      const lowerVal = val.toLowerCase();
      if (lowerVal === 'ielts academic') return 'ac';
      if (lowerVal === 'ielts general training') return 'gt';
      return null;
    },
  }),
};

const examFormat = {
  fromExamFormat: (val: ExamFormat | null | undefined) => ({
    toCode: () => {
      if (val === ExamFormat.CD) return 'cd';
      if (val === ExamFormat.PB) return 'pb';
      return null;
    },
  }),
};

const score = {
  fromBandScoreType: (bandScoreType: BandScoreType) => ({
    toBoolean: (
      ack?: EnquiryOnResultsDetailsDataViewModel | EnquiryOnResultsRequestDto
    ): boolean => {
      if (!ack) return false;

      switch (bandScoreType) {
        case BandScoreType.Listening:
          return ack.listeningScoreEnquired;
        case BandScoreType.Reading:
          return ack.readingScoreEnquired;
        case BandScoreType.Writing:
          return ack.writingScoreEnquired;
        case BandScoreType.Speaking:
          return ack.speakingScoreEnquired;

        default:
          return false;
      }
    },
    toScore: (ack?: EnquiryOnResultsDetailsDataViewModel | EnquiryOnResultsRequestDto): number => {
      if (!ack) return 0;

      switch (bandScoreType) {
        case BandScoreType.Listening:
          return ack.listeningScore;
        case BandScoreType.Reading:
          return ack.readingScore;
        case BandScoreType.Writing:
          return ack.writingScore;
        case BandScoreType.Speaking:
          return ack.speakingScore;

        default:
          return ack.listeningScore;
      }
    },
    toComponentType: () => {
      switch (bandScoreType) {
        case BandScoreType.Listening:
          return ComponentType.Listening;
        case BandScoreType.Reading:
          return ComponentType.Reading;
        case BandScoreType.Writing:
          return ComponentType.Writing;
        case BandScoreType.Speaking:
          return ComponentType.Speaking;
        default:
          return undefined;
      }
    },
  }),
};

const componentType = {
  fromComponentType: (componentType: ComponentType) => ({
    toBandScoreType: () => {
      switch (componentType) {
        case ComponentType.Listening:
          return BandScoreType.Listening;
        case ComponentType.Reading:
          return BandScoreType.Reading;
        case ComponentType.Writing:
          return BandScoreType.Writing;
        case ComponentType.Speaking:
          return BandScoreType.Speaking;
        default:
          throw Error('Unknown component type');
      }
    },
  }),
};

export const converters = {
  ...speakingFormat,
  ...ieltsModule,
  ...examFormat,
  ...score,
  ...fileStatus,
  ...examCardData,
  ...unifiedExams,
  ...regHeader,
  ...testTakerDetails,
  ...uploadedFiles,
  ...results,
  ...eor,
  ...selectedReceivingOrgs,
  ...transactions,
  ...alertBar,
  ...errors,
  ...componentType,
};
