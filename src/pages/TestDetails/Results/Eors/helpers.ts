import { EnquiryOnResultsRequestDto, EorRequestStatus } from 'ors-api/mod';
import {
  BandScoreType,
  EnquiryOnResultsDetailsDataViewModel,
  EnquiryOnResultsStatus,
} from 'ors-api/ors2';

import { converters } from 'common';

export const DEFAULT_EOR_REQUEST_DEADLINE = 42;

export const isEorComplete = ({
  eorStatus,
  isIwas,
}: {
  eorStatus?: EnquiryOnResultsStatus | EorRequestStatus;
  isIwas: boolean;
}): boolean => {
  if (!eorStatus) return false;

  if (isIwas) {
    return [
      EnquiryOnResultsStatus.ResultsChanged,
      EnquiryOnResultsStatus.Completed,
    ].some((value) => value === eorStatus);
  }

  return eorStatus === EorRequestStatus.Completed;
};

export const enquiredScoreBandTypes = (
  acknowledgement?: EnquiryOnResultsRequestDto | EnquiryOnResultsDetailsDataViewModel
): BandScoreType[] =>
  !!acknowledgement
    ? [
        BandScoreType.Listening,
        BandScoreType.Reading,
        BandScoreType.Writing,
        BandScoreType.Speaking,
      ].filter((bandScoreType) =>
        converters.fromBandScoreType(bandScoreType).toBoolean(acknowledgement)
      )
    : [];
