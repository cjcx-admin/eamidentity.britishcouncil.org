import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';

import { useGetRegistrationScores } from 'store/results';
import { BandScoreType } from 'ors-api/ors2';
import { useSelector } from 'core';
import { useLocale } from 'common';

interface EorBandScoreInfoProps {
  bandScoreType: BandScoreType;
}

const EorBandScoreInfo = ({ bandScoreType }: EorBandScoreInfoProps) => {
  const { regId } = useParams();
  const { t } = useTranslation();
  const eorRequestDetails = useSelector((s) => s.eor.eorRequestDetails.data?.details);

  const { data } = useGetRegistrationScores({
    registrationId: Number(regId),
    locale: useLocale().locale,
  });

  const previousScores = data?.value?.previousScores;
  const previousBandScore = data?.value?.previousScores?.find(
    (score) => score.bandScoreType === bandScoreType
  )?.score;
  const currentBandScore = data?.value?.scores?.find(
    (score) => score.bandScoreType === bandScoreType
  )?.score;

  const scoreDiff = (currentBandScore || 0) - (previousBandScore || 0);

  const isScoreEnquired = () => {
    switch (bandScoreType) {
      case BandScoreType.Listening:
        return !!eorRequestDetails?.listeningScoreEnquired;
      case BandScoreType.Reading:
        return !!eorRequestDetails?.readingScoreEnquired;
      case BandScoreType.Speaking:
        return !!eorRequestDetails?.speakingScoreEnquired;
      case BandScoreType.Writing:
        return !!eorRequestDetails?.writingScoreEnquired;
      case BandScoreType.Overall:
        return !!previousScores;

      default:
        return false;
    }
  };

  const scoreDiffMessage = () => {
    if (scoreDiff === 0) {
      return t('APPB2C.registration.results.hasResults.bandScore.unchanged');
    }

    if (scoreDiff < 0)
      return `${scoreDiff.toPrecision(2)} ${t(
        'APPB2C.registration.results.hasResults.bandScore.decrease'
      )}`;

    return `+${scoreDiff.toPrecision(2)} ${t(
      'APPB2C.registration.results.hasResults.bandScore.increase'
    )}`;
  };

  if (!previousScores || !isScoreEnquired() || !currentBandScore || !previousBandScore) return null;

  return <Wrapper>{scoreDiffMessage()}</Wrapper>;
};

export default EorBandScoreInfo;

const Wrapper = styled.span`
  margin: 0 20px;
  text-align: center;
`;
