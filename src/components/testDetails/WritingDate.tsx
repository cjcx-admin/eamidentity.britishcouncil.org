import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { ExamFormatIcon } from '@britishcouncil/react-solas-ors3';
import { getArrivalTime } from 'ors-utils';
import { breakpoints } from 'ors-ui';

import { getOsrSkillName, useLocale } from 'common';
import { ExamData } from './types';

interface Props {
  exam: ExamData;
  showArrive?: boolean;
}

export const WritingDate: FC<Props> = ({ exam, showArrive = false }) => {
  const { t } = useTranslation();

  const { timeZoneId, examDate, startTime, endTime, examFormat, arriveTime, osrComponent } = exam;
  const { localeTime, locale } = useLocale(timeZoneId);

  const title = `${examDate}, ${localeTime(startTime)} - ${localeTime(endTime)}`;
  const arrival = getArrivalTime(startTime, arriveTime, locale);
  const iconFormat = !exam || !examFormat || examFormat === 'online' ? 'cd' : examFormat;

  const examFormatText = useMemo(() => {
    switch (examFormat) {
      case 'cd':
        return t('APPB2C.common.basic.bookingDetails.lrw.cd');
      case 'online':
        return t('APPB2C.common.basic.bookingDetails.lrw.online');
      case 'pb':
      default:
        return t('APPB2C.common.basic.bookingDetails.lrw.pb');
    }
  }, [examFormat, t]);

  return (
    <div>
      <TestDateTimeContainer>
        <ExamDateTime data-testid="lrw-date">{title}</ExamDateTime>
        {showArrive ? (
          <span data-testid="lrw-arrival">
            {t('APPB2C.common.basic.bookingDetails.arrival', { time: arrival })}
          </span>
        ) : null}
      </TestDateTimeContainer>
      <Desc>
        <div>
          <ExamFormatIcon className="svg-ltr-only" format={iconFormat} aria-hidden="true" />
          <b>
            {osrComponent
              ? t(getOsrSkillName({ skillType: osrComponent }))
              : t('APPB2C.common.basic.bookingDetails.lrw.results')}
          </b>
        </div>
        <span data-testid="lrw-format">{examFormatText}</span>
      </Desc>
    </div>
  );
};

export const Desc = styled.div`
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
    margin: 0 14px;
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
