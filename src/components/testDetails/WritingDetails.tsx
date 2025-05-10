import { FC } from 'react';
import styled from '@emotion/styled';
import { ComponentType } from 'ors-api/mod';
import { VenueTitle } from 'ors-ui';

import { WritingDate } from './';
import { ExamData } from './types';
import { ListeningSpeakingDate } from './ListeningSpeakingDate';

export type LrwTrans = {
  arrival?: string;
  lrw?: string;
  cd?: string;
  pb?: string;
};

export interface WritingDetailsProps {
  exam: ExamData;
  showVenues: boolean;
  showArrive?: boolean;
  dataTestId?: string;
  osrComponent?: ComponentType;
  isMapViewEnabled: boolean;
}

export const WritingDetails: FC<WritingDetailsProps> = ({
  exam,
  showVenues,
  showArrive,
  dataTestId,
  isMapViewEnabled,
}) => {
  const {
    venueStreetAddress1,
    venueStreetAddress2,
    venueCity,
    venuePostCode,
    venueName,
    venueState,
    venueLatitude,
    venueLongitude,
    distance,
    isLifeSkill,
  } = exam;

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
        distance={distance}
        showDistance={false}
        sticky={false}
        showVenues={showVenues}
        isMapViewEnabled={isMapViewEnabled}
      />

      {isLifeSkill ? (
        <ListeningSpeakingDate exam={exam} />
      ) : (
        <WritingDate exam={exam} showArrive={showArrive && !exam.examInPast} />
      )}
    </StyledVenueGroup>
  );
};

const StyledVenueGroup = styled.div`
  > .venue {
    background: transparent;
    margin-bottom: 15px;
  }
`;
