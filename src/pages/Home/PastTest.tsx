import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { BsInfoCircle } from 'react-icons/bs';
import { DateTime } from 'luxon';
import styled from '@emotion/styled';
import { Card, ExamFormatIcon } from '@britishcouncil/react-solas-ors3';
import { localeFns } from 'ors-utils';
import { RetakeBadge, breakpoints } from 'ors-ui';

import { getOsrSkillName, UnifiedExam, rebookExam, useLocale } from 'common';
import { CircularProgress } from './CircularProgress';
import { CancelAlert } from './CancelAlert';
import { LinkWrapper } from './LinkWrapper';
import { getDateLocationUrl, getResultsUrl } from './helpers';
import { OsrFooter } from './components/OsrFooter';

interface Props {
  reg: UnifiedExam;
  isAdultMinor: boolean;
}

export const PastTest: FC<Props> = ({ reg, isAdultMinor }) => {
  const { t } = useTranslation();
  const { locale } = useLocale();

  const isIol = reg.mode === 'iol';
  const isUkvi = reg.mode === 'ukvi';
  const isLifeSkill = ['a1', 'a2', 'b1'].some((type) => type === reg.module);
  const isCancelled = reg.status === 'cancelled';
  const detailsUrl = getDateLocationUrl(reg.mode, reg.registrationId);
  const resultsUrl = getResultsUrl(reg.mode, reg.registrationId);
  const iconFormat = reg.lrwFormatCode === 'online' ? 'cd' : reg.lrwFormatCode;

  const resultsIn = getResultsIn(reg, locale);

  const actions = useMemo(() => {
    if (isCancelled) {
      return <CancelAlert />;
    }
    if (reg.status === 'has-results') {
      return (
        <ActionsWrapper>
          <LinkWrapper
            route={resultsUrl}
            label={t('APPB2C.common.startPage.recent.cta')}
            className="btn btn-primary"
            style={isIol ? { marginTop: '25px' } : {}}
          />
          {!isAdultMinor && !isIol && !isUkvi && !reg.oneSkillRetake && (
            <button
              onClick={() =>
                rebookExam({
                  regId: reg.registrationId,
                  countryIsoCode: reg.countryIsoCode,
                  productId: reg.productId,
                  districtId: reg.districtId,
                })
              }
              className="btn btn-link btn-rebook-exam"
            >
              {t('APPB2C.common.startPage.past.rebook')}
            </button>
          )}
        </ActionsWrapper>
      );
    }
  }, [reg, t, isAdultMinor, isIol, isUkvi, resultsUrl, isCancelled]);

  return (
    <StyledCard data-testid={`exam-${reg.registrationId}`}>
      <div className="exam-row">
        <div className="exam-detail" data-testid="prev-details">
          <h3>
            <LinkWrapper route={detailsUrl}>
              {reg.moduleName}
              {!!reg.oneSkillRetake && (
                <ExamRetakeSubtitle>
                  <br />
                  {t(
                    getOsrSkillName({ skillType: reg.oneSkillRetake.component, withRetake: true })
                  )}
                </ExamRetakeSubtitle>
              )}
            </LinkWrapper>
          </h3>
          <div className="date" data-testid="lrw-date">
            {reg.lrwDate}
          </div>{' '}
          {!isLifeSkill && (
            <div className="type" data-testid="lrw-format">
              <ExamFormatIcon className="svg-ltr-only" format={iconFormat} aria-hidden="true" />
              {reg.lrwFormatCode === 'pb'
                ? t('APPB2C.common.startPage.past.pb')
                : t('APPB2C.common.startPage.past.cd')}
            </div>
          )}
          <div className="location" data-testid="lrw-location">
            {reg.location}
          </div>
        </div>
        {reg.status === 'awaiting-results' && !isIol && (
          <div className="score incoming" data-testid="score-incoming">
            <BsInfoCircle className="svg-ltr-only" />
            {t('APPB2C.common.startPage.past.upcomingResults', { date: resultsIn })}
          </div>
        )}
        {!!reg.overallScore && (
          <div className="score" data-testid="score">
            {t(
              reg.requestedActiveOneSkillRetake
                ? 'APPB2C.common.startPage.past.osr.originalScore'
                : 'APPB2C.common.startPage.past.score'
            )}
            :<br />
            <CircularProgress value={100} label={reg.overallScore} />
          </div>
        )}
        {isLifeSkill && reg.status === 'has-results' && reg.lifeSkillsPassed !== undefined && (
          <div className="score ls" data-testid="score">
            {t('APPB2C.common.startPage.past.scoreLifeSkills')}:<br />
            <LifeSkillScore passed={reg.lifeSkillsPassed}>
              {t(
                reg.lifeSkillsPassed
                  ? 'APPB2C.registration.results.hasResults.lifeSkills.passed'
                  : 'APPB2C.registration.results.hasResults.lifeSkills.failed'
              )}
            </LifeSkillScore>
          </div>
        )}
      </div>
      {actions}

      <OsrFooter reg={reg} />
      {!!reg.oneSkillRetake && <RetakeBadge />}
    </StyledCard>
  );
};

function getResultsIn(reg: UnifiedExam, locale: string) {
  const resultsDeadline = DateTime.fromISO(reg.lrwSortDate)
    .plus({
      days: reg.lrwFormatCode === 'cd' ? 5 : 13,
    })
    .toJSDate();

  return localeFns(locale).localeDate(resultsDeadline);
}

const LifeSkillScore = styled.div<{ passed: boolean }>`
  margin-top: 0.15em;
  font-size: 2.4em;
  font-weight: bold;

  [dir='rtl'] & {
    font-weight: 500;
  }
  color: ${(props) => (props.passed ? '#00953b' : '#ab0033')};
`;

const StyledCard = styled(Card)`
  position: relative;

  & + & {
    margin-bottom: 20px;
  }

  h3 {
    font-size: 1.67em;

    a {
      font-size: inherit;
      color: #005cb9;
      text-decoration: underline;
    }
  }
  .score {
    margin-top: 12px;
    text-align: center;

    &.incoming {
      text-align: center;
      max-width: 220px;

      > svg {
        display: block;
        margin: 0 auto 10px;
        width: 32px;
        height: 32px;
        fill: #005cb9;
      }
    }

    &.ls {
      margin-top: 0.7em;
    }
  }
  .exam-detail {
    > div {
      margin-bottom: 8px;
    }
    .date {
      font-size: 1.1em;
      font-weight: bold;

      [dir='rtl'] & {
        font-weight: 500;
      }
    }
    .type,
    .location {
      color: #54565a;
      svg {
        width: 24px;
        height: 24px;
        margin: 0 12px -4px 0;
        fill: #54565a;

        [dir='rtl'] & {
          margin: 0 0 -4px 12px;
        }
      }
    }
  }

  .exam-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .alert {
    margin: 10px -24px -24px;
  }

  .alert.alert-warning {
    border-bottom: none;
    border-left: none;
    border-right: none;
  }
`;

const ActionsWrapper = styled.div`
  display: flex;
  a,
  div {
    flex-grow: 1;
  }
  a {
    min-width: unset;
    margin-right: 10px;
  }
  @media (max-width: ${breakpoints['screen-xs-max']}px) {
    flex-wrap: wrap;
    a,
    button {
      margin: 5px 0;
      width: 100%;
    }
  }
`;

const ExamRetakeSubtitle = styled.span`
  font-size: 0.8em; ;
`;
