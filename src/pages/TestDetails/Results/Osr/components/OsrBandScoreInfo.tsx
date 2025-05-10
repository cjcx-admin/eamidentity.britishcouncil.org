import styled from '@emotion/styled';
import { getExamContext } from 'core';
import { RequestedActiveOneSkillRetakeDto } from 'ors-api/mod';
import { breakpoints } from 'ors-ui';
import { getDateLocationUrl, getResultsUrl } from 'pages/Home/helpers';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

interface OsrBandScoreInfoProps {
  originalScore?: number;
  osrScore: number;
  activeOsrRequest?: RequestedActiveOneSkillRetakeDto;
  noResults?: boolean;
}

export const OsrBandScoreInfo = ({
  originalScore,
  osrScore,
  activeOsrRequest,
  noResults,
}: OsrBandScoreInfoProps) => {
  const { t } = useTranslation();
  const examContext = getExamContext();

  const getRetakeMessage = () => {
    if (noResults) {
      return t('APPB2C.registration.results.noResults.osr.booked');
    }

    if (originalScore) {
      if (originalScore > osrScore)
        return `-${(originalScore - osrScore).toPrecision(2)} ${t(
          'APPB2C.registration.results.hasResults.bandScore.decrease'
        )}`;
      if (originalScore === osrScore)
        return t('APPB2C.registration.results.hasResults.bandScore.unchanged');
      if (originalScore < osrScore)
        return `+${(osrScore - originalScore).toPrecision(2)} ${t(
          'APPB2C.registration.results.hasResults.bandScore.increase'
        )}`;
    }
  };

  const getActiveRetakeMessage = () => {
    if (!!activeOsrRequest) {
      if (!!activeOsrRequest.overallScore) {
        return (
          <Trans t={t} i18nKey="APPB2C.registration.results.bandScore.osrMarked">
            Retake marked
            <Link to={getResultsUrl(examContext!, activeOsrRequest.osrRegistrationId!)}>
              View results
            </Link>
          </Trans>
        );
      }

      return (
        <Trans t={t} i18nKey="APPB2C.registration.results.bandScore.osrBooked">
          Retake booked
          <Link to={getDateLocationUrl(examContext!, activeOsrRequest.osrRegistrationId!)}>
            View booking
          </Link>
        </Trans>
      );
    }
  };

  return (
    <Wrapper data-testid="osr-band-score-info">
      {!!activeOsrRequest ? getActiveRetakeMessage() : getRetakeMessage()}
    </Wrapper>
  );
};

const Wrapper = styled.span`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  margin-right: 20px;
  font-size: 16px;
  font-weight: normal;

  [dir='rtl'] & {
    margin-right: 0px;
    margin-left: 20px;
  }

  @media (max-width: ${breakpoints['screen-sm-min']}px) {
    flex-direction: column;
    gap: unset;
  }
`;
