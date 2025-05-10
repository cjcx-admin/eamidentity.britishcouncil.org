import { FC } from 'react';
import styled from '@emotion/styled';
import { VenueTitle } from 'ors-ui';

import { SpeakingDate } from './SpeakingDate';
import { ExamData } from './types';
import { useLocale } from 'common/useLocale';

export interface SpeakingDetailsProps {
  slot: ExamData;
  showVenues: boolean;
  showArrive?: boolean;
  arriveTime?: number;
  dataTestId?: string;
  speakingTitle?: string;
  isMapViewEnabled: boolean;
}

const StyledVenueGroup = styled.div`
  > .venue {
    background: transparent;
    margin-bottom: 15px;
  }
`;

export const SpeakingDetails: FC<SpeakingDetailsProps> = ({
  slot,
  showVenues,
  showArrive,
  arriveTime,
  dataTestId,
  speakingTitle,
  isMapViewEnabled,
}) => {
  const { localeTime } = useLocale(slot.timeZoneId);
  const speakingTitleDefault = `${slot.examDate}, ${localeTime(slot.startTime)} - ${localeTime(
    slot.endTime
  )}`;

  const {
    venueStreetAddress1,
    venueStreetAddress2,
    venueCity,
    venueState,
    venuePostCode,
    venueName,
    venueLatitude,
    venueLongitude,
  } = slot;
  return (
    <StyledVenueGroup className="venue-group" data-testid={dataTestId}>
      <VenueTitle
        addressLine1={venueStreetAddress1}
        addressLine2={venueStreetAddress2}
        city={venueCity}
        postCode={venuePostCode}
        state={venueState}
        name={venueName!}
        latitude={venueLatitude}
        longitude={venueLongitude}
        sticky={false}
        showVenues={showVenues}
        isMapViewEnabled={isMapViewEnabled}
      />
      <SpeakingDate
        slot={slot}
        speakingTitle={speakingTitle || speakingTitleDefault}
        showArrive={showArrive && !slot.examInPast}
        arriveTime={arriveTime}
      />
    </StyledVenueGroup>
  );
};
