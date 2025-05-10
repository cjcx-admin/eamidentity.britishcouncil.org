import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { Quote } from '@britishcouncil/react-solas-ors3';

import { BandScoreType, ExamResultScoreWithCommentary } from 'ors-api/ors2';
import { ScoreBand } from './ScoreBand';

interface Props {
  scoreBands: ExamResultScoreWithCommentary[];
}

export const ScoreExplanations = ({ scoreBands }: Props) => {
  const { t } = useTranslation();

  const getScoreName = (scoreType: BandScoreType) => {
    switch (scoreType) {
      case BandScoreType.Listening:
        return t('APPB2C.registration.results.hasResults.scores.Listening');
      case BandScoreType.Reading:
        return t('APPB2C.registration.results.hasResults.scores.Reading');
      case BandScoreType.Writing:
        return t('APPB2C.registration.results.hasResults.scores.Writing');
      case BandScoreType.Speaking:
        return t('APPB2C.registration.results.hasResults.scores.Speaking');
      case BandScoreType.Overall:
        return t('APPB2C.registration.results.hasResults.scores.Overall');
      default:
        return undefined;
    }
  };

  return (
    <>
      {
        <Explanations data-testid="explanation-details">
          <h3>{t('APPB2C.registration.results.hasResults.explanations.heading')}</h3>
          {scoreBands?.map(
            (band, index) =>
              band.bandScoreType !== BandScoreType.Overall && (
                <ScoreDetails key={index} data-testid={getScoreName(band.bandScoreType)}>
                  <ScoreBand
                    bandScoreType={band.bandScoreType}
                    score={band.score}
                    explanationsContext
                  />
                  <BandExplanation className="small" data-testid="explanation">
                    {band.explanation}
                  </BandExplanation>
                  <Quote title={t('APPB2C.registration.results.hasResults.explanations.improve')}>
                    {band.advice}
                  </Quote>
                </ScoreDetails>
              )
          )}
        </Explanations>
      }
    </>
  );
};

const ScoreDetails = styled.div`
  margin-bottom: 36px;

  :last-child {
    margin-bottom: 0;
    .bc-quote {
      margin-bottom: 0;
    }
  }
`;

const Explanations = styled.div`
  margin-top: 30px;
`;

const BandExplanation = styled.p`
  margin-top: 20px;
`;
