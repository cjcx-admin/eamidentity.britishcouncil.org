import { FC } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { Card, ExamFormatIcon, SpeakingFormatIcon } from '@britishcouncil/react-solas-ors3';
import { RetakeBadge, breakpoints } from 'ors-ui';

import { getOsrSkillName } from 'common';
import { UnifiedExam } from 'common/models';
import { RegistrationFooter } from './RegFooter';
import { LinkWrapper } from './LinkWrapper';
import { getDateLocationUrl } from './helpers';
import { OsrFooter } from './components/OsrFooter';

interface Props {
  reg: UnifiedExam;
}

export const UpcomingTest: FC<Props> = ({ reg }) => {
  const { t } = useTranslation();
  const isLifeSkill = ['a1', 'a2', 'b1'].some((type) => type === reg.module);
  const isOsr = !!reg.oneSkillRetake;
  const detailsUrl = getDateLocationUrl(reg.mode, reg.registrationId);
  const iconFormat = reg.lrwFormatCode === 'online' ? 'cd' : reg.lrwFormatCode;
  const iconSpeakingFormat =
    reg.speakingFormatCode === 'online'
      ? 'remote'
      : reg.speakingFormatCode === 'life-skills'
      ? 'live'
      : reg.speakingFormatCode;
  const showOsrFooter = isOsr && reg.status !== 'cancelled';

  return (
    <StyledCard data-testid={`exam-${reg.registrationId}`}>
      <h3>
        <LinkWrapper route={detailsUrl}>
          {reg.moduleName}
          {!!reg.oneSkillRetake && (
            <ExamRetakeSubtitle>
              <br />
              {t(getOsrSkillName({ skillType: reg.oneSkillRetake.component, withRetake: true }))}
            </ExamRetakeSubtitle>
          )}
        </LinkWrapper>
      </h3>

      {isOsr ? (
        <div className="row">
          <div className="exam-detail col-sm-6" data-testid="osr-lrw-details">
            <div className="date" data-testid="osr-lrw-date">
              {reg.lrwDate}
            </div>
            <div className="time" data-testid="lrw-time">
              {reg.lrwTimeSpan}
            </div>
          </div>
        </div>
      ) : isLifeSkill ? (
        <div className="exam-detail" data-testid="life-skills-details">
          <div className="row">
            <div className="date col-md-6 col-sm-5" data-testid="life-skills-date">
              {reg.lrwDate}
            </div>
            <div className="type life-skills col-md-6 col-sm-7" data-testid="speaking-format">
              <SpeakingFormatIcon
                format={iconSpeakingFormat}
                className="svg-ltr-only"
                aria-hidden="true"
              />
              {t('APPB2C.common.startPage.upcoming.lifeSkills')}
            </div>
          </div>
          <p>{t('APPB2C.common.startPage.upcoming.noTime')}</p>
        </div>
      ) : (
        <div className="row">
          <div className="exam-detail col-sm-6" data-testid="lrw-details">
            <div className="date" data-testid="lrw-date">
              {reg.lrwDate}
            </div>
            <div className="type" data-testid="lrw-format">
              <ExamFormatIcon className="svg-ltr-only" format={iconFormat} aria-hidden="true" />
              {reg.lrwFormatCode === 'pb'
                ? t('APPB2C.common.startPage.upcoming.pb')
                : t('APPB2C.common.startPage.upcoming.cd')}
            </div>
            <div className="time" data-testid="lrw-time">
              {reg.lrwTimeSpan}
            </div>
          </div>
          {reg.speakingDate ? (
            <div className="exam-detail col-sm-6" data-testid="speaking-details">
              <div className="date" data-testid="speaking-date">
                {reg.speakingDate}
              </div>
              <div className="type" data-testid="speaking-format">
                <SpeakingFormatIcon
                  format={iconSpeakingFormat}
                  className="svg-ltr-only"
                  aria-hidden="true"
                />
                {reg.speakingFormatCode === 'remote'
                  ? t('APPB2C.common.startPage.upcoming.remote')
                  : t('APPB2C.common.startPage.upcoming.live')}
              </div>
              <div className="time" data-testid="speaking-time">
                {reg.speakingTimeSpan}
              </div>
            </div>
          ) : (
            <div className="exam-detail col-sm-6">
              {t('APPB2C.common.startPage.upcoming.noSpeaking')}
            </div>
          )}
        </div>
      )}

      <RegistrationFooter reg={reg} />
      {showOsrFooter && <OsrFooter reg={reg} upcomingExam />}
      {isOsr && <RetakeBadge />}
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  position: relative;

  h3 a {
    font-size: 1.67em;
    color: #005cb9;
    text-decoration: underline;

    &:hover {
      color: #000;
    }
  }

  & .alert {
    margin: 10px -24px -24px;
    border-bottom: none;
    border-left: none;
    border-right: none;
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
    .type {
      color: #54565a;
      font-weight: bold;

      [dir='rtl'] & {
        font-weight: 500;
      }

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
    .time {
      font-weight: bold;
      color: #000;

      [dir='rtl'] & {
        font-weight: 500;
      }
    }
  }

  > hr {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  @media (max-width: ${breakpoints['screen-xs-max']}px) {
    .exam-detail > .row > .date {
      margin-bottom: 8px;
    }
  }
`;

const ExamRetakeSubtitle = styled.span`
  font-size: 0.8em; ;
`;
