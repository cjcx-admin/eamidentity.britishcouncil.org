import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { Card, Divider } from '@britishcouncil/react-solas-ors3';

import { BandScoreType, ExamResultScoreWithCommentary } from 'ors-api/ors2';
import { ScoreBand } from './ScoreBand';
import { ScoreExplanations } from './ScoreExplanations';
import { OriginalScoreToRetake } from '../Osr/hooks/useScoreToRetake';
import { Button } from '@britishcouncil/react-solas';
import { useNavigate } from 'react-router-dom';
import { getResultsUrl } from 'pages/Home/helpers';
import { getExamContext } from 'core';
import { OneSkillRetakeDto, RequestedActiveOneSkillRetakeDto } from 'ors-api/mod';
import { getScoreName } from 'common';

export interface SelectableBand extends ExamResultScoreWithCommentary {
  checked?: boolean;
  selectable?: boolean;
  notSelectableReason?: string;
}

interface Props {
  scoreBands: SelectableBand[];
  hideCommentary?: boolean;
  remarkedBands?: BandScoreType[];
  radios?: boolean;
  toggleSelection?: (index: number, checked: boolean) => void;
  showExplanations?: boolean;
  originalScoreToRetake?: OriginalScoreToRetake;
  osr?: OneSkillRetakeDto;
  activeOsrRequest?: RequestedActiveOneSkillRetakeDto;
  noResults?: boolean;
}

export const Scores = ({
  scoreBands,
  hideCommentary,
  remarkedBands,
  toggleSelection,
  radios,
  showExplanations,
  originalScoreToRetake,
  osr,
  activeOsrRequest,
  noResults,
}: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const isVowelFirst = (rankName?: string) =>
    (rankName?.length && ['a', 'e', 'i', 'o', 'u'].indexOf(rankName[0].toLowerCase()) !== -1) ||
    false;

  return (
    <>
      {scoreBands &&
        scoreBands.length > 0 &&
        scoreBands?.map((band, index) => (
          <Score key={index} data-testid="scores">
            {!(band.bandScoreType === BandScoreType.Overall) ? (
              <ScoreBand
                bandScoreType={band.bandScoreType}
                score={band.score}
                isRemarked={remarkedBands && remarkedBands.some((r) => r === band.bandScoreType)}
                isSelectable={
                  !!toggleSelection && (band.selectable === undefined || band.selectable)
                }
                checked={band.checked}
                radios={radios}
                toggleSelection={(checked: boolean) =>
                  toggleSelection && toggleSelection(index, checked)
                }
                data-testid={getScoreName(band.bandScoreType)}
                originalScoreToRetake={originalScoreToRetake}
                activeOsrRequest={activeOsrRequest}
                noResults={noResults}
                notSelectableReason={band.notSelectableReason}
              />
            ) : (
              <div>
                <ScoreBand
                  bandScoreType={band.bandScoreType}
                  score={band.score}
                  isOverall
                  data-testid={getScoreName(band.bandScoreType)}
                  originalScoreToRetake={originalScoreToRetake}
                  activeOsrRequest={activeOsrRequest}
                  noResults={noResults}
                />
                {!hideCommentary && (
                  <>
                    <ArrowUp />
                    <Card>
                      <p data-testid="score-explanation">{`${
                        isVowelFirst(band.rank)
                          ? t('APPB2C.registration.results.hasResults.rankNameVowel')
                          : t('APPB2C.registration.results.hasResults.rankNameConsonant')
                      } “${band.rank}”`}</p>
                      <div>{band.explanation}</div>
                    </Card>
                  </>
                )}
              </div>
            )}
          </Score>
        ))}

      {!!osr && (
        <OriginalResultsButton
          onClick={() =>
            navigate(getResultsUrl(getExamContext()!, osr.originalRegistration?.registrationId!))
          }
        >
          {t('APPB2C.registration.results.hasResults.osr.previousResults')}
        </OriginalResultsButton>
      )}
      {showExplanations && (
        <>
          <Divider />
          <ScoreExplanations scoreBands={scoreBands} />
        </>
      )}
    </>
  );
};

const Score = styled.div`
  > * {
    margin-bottom: 8px;
  }
`;

const ArrowUp = styled.div`
  margin: 3px auto auto;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 25px 20px;
  border-color: transparent transparent #fff;
`;

const OriginalResultsButton = styled(Button)`
  margin-top: 20px;
`;
