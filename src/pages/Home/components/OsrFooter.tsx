import { Quote } from '@britishcouncil/react-solas-ors3';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { LinkButton } from 'ors-ui';
import { useNavigate } from 'react-router-dom';
import { DateTime } from 'luxon';

import { getOsrSkillName, UnifiedExam, useLocale } from 'common';
import { CircularProgress } from '../CircularProgress';
import { getDateLocationUrl, getResultsUrl } from '../helpers';

interface Props {
  reg: UnifiedExam;
  upcomingExam?: boolean;
}

export const OsrFooter = ({ reg, upcomingExam }: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { localeDate } = useLocale();

  const osrHasResults = !!reg.requestedActiveOneSkillRetake?.overallScore;
  const isOriginalExam = !!reg.requestedActiveOneSkillRetake;
  const isAwaitingResult =
    DateTime.fromISO(reg.requestedActiveOneSkillRetake?.examDate!).endOf('day') <
      DateTime.now().endOf('day') && !osrHasResults;
  const isAwaitingResultOsrExamCard =
    DateTime.fromISO(reg.lrwSortDate).endOf('day') < DateTime.now().endOf('day') && !osrHasResults;

  const getNoteMsg = (
    isOriginalExam: boolean,
    isAwaitingResult: boolean,
    osrHasResults: boolean
  ) => {
    if (isOriginalExam) {
      if (isAwaitingResult) {
        return 'APPB2C.common.startPage.past.osr.note.awaiting';
      }

      if (osrHasResults) {
        return 'APPB2C.common.startPage.past.osr.note.hasResults';
      }

      return 'APPB2C.common.startPage.past.osr.note.confirmed';
    }

    return 'APPB2C.common.startPage.upcoming.osr.note';
  };

  if (
    (!reg.requestedActiveOneSkillRetake && !reg.oneSkillRetake?.originalOverallScore) ||
    (!!reg.oneSkillRetake && !!reg.overallScore) ||
    reg.status === 'cancelled'
  )
    return null;

  return (
    <>
      <Container upcoming={upcomingExam}>
        <TopSeparator />
        <OriginalScoreWrapper>
          <Quote intent="gray" title="">
            {t(getNoteMsg(isOriginalExam, isAwaitingResult, !!osrHasResults), {
              skill: t(
                getOsrSkillName({
                  skillType:
                    reg.requestedActiveOneSkillRetake?.component! || reg.oneSkillRetake?.component!,
                })
              ),
            })}
          </Quote>
          {upcomingExam || osrHasResults || (!isOriginalExam && isAwaitingResultOsrExamCard) ? (
            <Wrapper>
              <LinkButton
                data-testid="exam-results-link"
                onClick={() =>
                  navigate(
                    getResultsUrl(
                      reg.mode,
                      osrHasResults
                        ? reg.requestedActiveOneSkillRetake?.osrRegistrationId!
                        : reg.oneSkillRetake?.originalRegistrationId!
                    )
                  )
                }
              >
                {t(
                  osrHasResults
                    ? 'APPB2C.common.startPage.past.osr.newScore'
                    : 'APPB2C.common.startPage.past.osr.originalScore'
                )}
                :
              </LinkButton>
              <CircularProgress
                value={100}
                label={
                  reg.requestedActiveOneSkillRetake?.overallScore ||
                  reg.oneSkillRetake?.originalOverallScore
                }
              />
            </Wrapper>
          ) : (
            <Wrapper>
              <div className="date" data-testid="osr-date">
                {localeDate(reg.requestedActiveOneSkillRetake?.examDate, { month: 'short' })}
              </div>
              <LinkButton
                data-testid="osr-exam-details-link"
                onClick={() =>
                  navigate(
                    getDateLocationUrl(
                      reg.mode,
                      reg.requestedActiveOneSkillRetake?.osrRegistrationId!
                    )
                  )
                }
              >
                {t('APPB2C.common.startPage.past.osr.viewRetakeLink')}
              </LinkButton>
            </Wrapper>
          )}
        </OriginalScoreWrapper>
      </Container>
    </>
  );
};

const TopSeparator = styled.div`
  margin: 0 -24px 15px -24px;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 4px 0px;
`;

const OriginalScoreWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;

  svg {
    width: 3em;
    height: 3em;
  }

  strong {
    top: 0.67em !important;
    font-size: 1.1em !important;
  }

  & div.date {
    margin: 0;
    font-size: 1.1em;
    color: #54565a;
    font-weight: bold;

    [dir='rtl'] & {
      font-weight: 500;
    }
  }
`;

const Container = styled.div<{ upcoming?: boolean }>`
  position: relative;
  margin: ${({ upcoming }) => (upcoming ? '20px' : '15px')} -24px -24px;
  background-color: #e7e9eb6b;
  padding: 0 24px 15px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;
