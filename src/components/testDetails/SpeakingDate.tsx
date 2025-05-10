import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SpeakingFormatIcon } from '@britishcouncil/react-solas-ors3';
import styled from '@emotion/styled';
import { getArrivalTime } from 'ors-utils';

import { TestDateTimeContainer, Desc } from './WritingDate';
import { ExamData } from './types';
import { useLocale } from 'common/useLocale';

interface SpeakingDateProps {
  slot?: ExamData;
  speakingTitle: string;
  showArrive?: boolean;
  arriveTime?: number;
  dataTestid?: string;
}

export const SpeakingDate = ({
  slot,
  speakingTitle,
  showArrive = false,
  arriveTime,
}: SpeakingDateProps) => {
  const { t } = useTranslation();
  const { locale } = useLocale();

  const arrival = getArrivalTime(slot?.startTime, arriveTime, locale);
  const iconFormat =
    !slot || !slot?.speakingFormat || slot?.speakingFormat === 'online'
      ? 'remote'
      : slot.speakingFormat === 'life-skills'
      ? 'live'
      : slot?.speakingFormat;

  const speakingFormatText = useMemo(() => {
    switch (slot?.speakingFormat) {
      case 'live':
        return t('APPB2C.common.basic.bookingDetails.speaking.live');
      case 'remote':
        return t('APPB2C.common.basic.bookingDetails.speaking.remote');
      case 'online':
        return t('APPB2C.common.basic.bookingDetails.speaking.online');
      default:
        return t('APPB2C.common.basic.bookingDetails.speaking.f2f');
    }
  }, [slot?.speakingFormat, t]);

  return (
    <>
      <TestDateTimeContainer>
        <ExamDateTime data-testid="speaking-date">{speakingTitle}</ExamDateTime>
        {showArrive ? (
          <span data-testid="speaking-arrival">
            {t('APPB2C.common.basic.bookingDetails.arrival', { time: arrival })}
          </span>
        ) : null}
      </TestDateTimeContainer>
      <Desc>
        <div>
          <SpeakingFormatIcon format={iconFormat} aria-hidden="true" />
          <b>{t('APPB2C.common.basic.bookingDetails.speaking.results')}</b>
        </div>
        <span data-testid="speaking-format">{speakingFormatText}</span>
      </Desc>
    </>
  );
};

const ExamDateTime = styled.h3`
  margin: 0 0 15px;
  color: #000;
  font-weight: bold;

  [dir='rtl'] & {
    font-weight: 500;
  }
`;
