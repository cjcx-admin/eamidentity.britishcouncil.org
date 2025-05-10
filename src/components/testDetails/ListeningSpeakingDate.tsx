import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { IcoClock, Icon } from '@britishcouncil/react-solas';
import { SpeakingFormatIcon } from '@britishcouncil/react-solas-ors3';

import { ExamData } from './types';
import { breakpoints } from 'ors-ui';

interface Props {
  exam: ExamData;
}

export const ListeningSpeakingDate: FC<Props> = ({ exam }) => {
  const { t } = useTranslation();

  const title = `${exam.examDate}`;

  return (
    <div>
      <TestDateTimeContainer>
        <ExamDateTime data-testid="speaking-listening-date">{title}</ExamDateTime>
      </TestDateTimeContainer>

      <TimeNote>
        <Icon>
          <IcoClock />
        </Icon>
        <p>{t('APPB2C.common.startPage.upcoming.noTime')}</p>
      </TimeNote>
      <Desc>
        <div>
          <SpeakingFormatIcon format={'live'} aria-hidden="true" />
          <b>{t('APPB2C.common.basic.bookingDetails.lifeSkills.results')}</b>
        </div>
        <span data-testid="speaking-listening-format">
          {t('APPB2C.common.basic.bookingDetails.speaking.f2f')}
        </span>
      </Desc>
    </div>
  );
};

const TimeNote = styled.div`
  display: flex;

  > div {
    width: 24px;
    margin: 0;

    svg {
      width: 24px;
      height: 24px;
      fill: #54565a;
    }
  }

  p {
    margin: 0 0 1em 1.2em;
  }
`;

const Desc = styled.div`
  display: flex;
  align-items: center;
  > div svg {
    width: 24px;
    height: 24px;
    margin-bottom: -4px;
    fill: #54565a;
  }
  b {
    color: #333;
    margin: 0 1.2em;
  }
  span {
    font-size: 0.9em;
  }
  @media (max-width: ${breakpoints['screen-xs-max']}px) {
    justify-content: space-between;
    span {
      text-align: right;
    }
  }
`;

const ExamDateTime = styled.h3`
  margin: 0 0 15px;
  font-size: 20px;
  color: #000;
  font-weight: bold;

  [dir='rtl'] & {
    font-weight: 500;
  }
`;

export const TestDateTimeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  span {
    margin: 3px 0 0 10px;
    font-size: 0.9em;
  }
  @media (max-width: ${breakpoints['screen-xs-max']}px) {
    justify-content: space-between;
    span {
      text-align: right;
    }
  }
`;
