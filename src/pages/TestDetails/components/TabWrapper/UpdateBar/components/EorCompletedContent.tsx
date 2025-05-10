import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { BandScoreType } from 'ors-api/mod';
import { useGetRegistrationScores } from 'store/results';
import { useLocale } from 'common';

const EorCompletedContent = () => {
  const { regId } = useParams();
  const { t } = useTranslation();

  const { data } = useGetRegistrationScores({
    registrationId: Number(regId),
    locale: useLocale().locale,
  });

  const prevOverallScore = data?.value?.previousScores?.find(
    (score) => score.bandScoreType === BandScoreType.Overall
  )?.score;
  const currentOverallScore = data?.value?.scores?.find(
    (score) => score.bandScoreType === BandScoreType.Overall
  )?.score;

  const getMessage = () => {
    if (!currentOverallScore) return '';

    if (!prevOverallScore || prevOverallScore === currentOverallScore)
      return t('APPB2C.common.updateBar.eorCompleted.scoreUnchanged', {
        currentOverallScore: currentOverallScore?.toPrecision(2) || '',
      });

    if (prevOverallScore > currentOverallScore)
      return t('APPB2C.common.updateBar.eorCompleted.scoreDecreased', {
        prevOverallScore: prevOverallScore?.toPrecision(2) || '',
        currentOverallScore: currentOverallScore?.toPrecision(2) || '',
      });

    return t('APPB2C.common.updateBar.eorCompleted.scoreIncreased', {
      prevOverallScore: prevOverallScore?.toPrecision(2) || '',
      currentOverallScore: currentOverallScore?.toPrecision(2) || '',
    });
  };

  return (
    <EorCompletedWrapper>
      <strong>{getMessage()}</strong>
      <p>{t('APPB2C.common.updateBar.details')}</p>
    </EorCompletedWrapper>
  );
};

export default EorCompletedContent;

const EorCompletedWrapper = styled.div`
  strong {
    margin: 5px 0;
    display: block;
  }
`;
