import { FC } from 'react';
import { RegistrationDto } from 'ors-api/iol';
import { examTypeDescription } from 'ors-utils';

import { useGetCountriesQuery } from 'store';
import { converters, useLocale } from 'common';
import { TimeZoneDetails } from '..';
import { IolDetailsCard } from 'ors-ui';

interface Props {
  reg?: RegistrationDto;
  showExtraContent?: boolean;
}

export const TestDetailsIol: FC<Props> = ({ reg, showExtraContent = false }) => {
  const { locale, localeTime } = useLocale(reg?.timeZoneId);
  const { data: countries } = useGetCountriesQuery({
    locale,
    productId: reg?.productId,
  });

  if (!reg) return null;

  const exam = converters.fromRegistrationIol(reg, locale).toLrwExamData(countries);
  const slot = converters.fromRegistrationIol(reg, locale).toSpeakingData();

  return (
    <>
      <h2 data-testid="exam-type">{examTypeDescription(reg.productId)}</h2>
      {showExtraContent && (
        <>
          <TimeZoneDetails regZoneDetails={exam} />
          <br />
        </>
      )}

      <IolDetailsCard
        displayColumn
        speakingTestDateTime={{
          fullDate: slot.examDate ?? '',
          timeSpan: `${localeTime(slot.startTime)} - ${localeTime(slot.endTime)}`,
        }}
        lrwTestDateTime={{
          fullDate: exam.examDate ?? '',
          timeSpan: `${localeTime(exam.startTime)} - ${localeTime(exam.endTime)}`,
        }}
      />
    </>
  );
};
