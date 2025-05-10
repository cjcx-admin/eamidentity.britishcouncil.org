import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { WideReadOnlyField } from 'ors-ui';

import { ExamData } from './testDetails/types';

interface Props {
  regZoneDetails: ExamData;
}

export const TimeZoneDetails: FC<Props> = ({ regZoneDetails }) => {
  const { t } = useTranslation();

  return (
    <>
      <h3>{t('APPB2C.registration.date.zone.header')}</h3>

      <StyledWideReadOnlyField label={t('APPB2C.registration.date.zone.country')}>
        {regZoneDetails.countryName}
      </StyledWideReadOnlyField>
      <StyledWideReadOnlyField label={t('APPB2C.registration.date.zone.time')}>
        {regZoneDetails.localTime}
      </StyledWideReadOnlyField>
      <StyledWideReadOnlyField label={t('APPB2C.registration.date.zone.name')}>
        {regZoneDetails.timeZoneName}
      </StyledWideReadOnlyField>
    </>
  );
};

const StyledWideReadOnlyField = styled(WideReadOnlyField)`
  margin: 0 !important;

  @media (min-width: 850px) {
    & dt {
      width: 220px;
    }
    & dd {
      margin-left: 270px !important;
    }
  }
`;
