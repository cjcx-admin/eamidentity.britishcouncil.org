import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { examTypeDescription, isLifeSkillsExam } from 'ors-utils';
import {
  ComponentType,
  SpeakingFormat,
  RegistrationDto as RegistrationDtoMod,
} from 'ors-api/mod';
import { HtmlTextRaw, TestCardProps, TestDetailsCard } from 'ors-ui';

import { useGetCountriesQuery } from 'store';
import { speaking } from 'store/speaking';
import { useDispatch, getProductFamilyId, useSelector } from 'core';
import { converters, getOsrSkillName, useLocale } from 'common';
import { SlimAlert } from '../SlimAlert';
import { selfServiceTransfer } from 'store/selfServiceTransfer';

interface Props {
  registration?: RegistrationDtoMod;
  showExtraContent?: boolean;
}

export const TestDetails: FC<Props> = ({ registration }) => {
  const { t } = useTranslation();
  const { locale } = useLocale();
  const dispatch = useDispatch();

  const { exam } = useTestDetails(locale, registration);
  const isMapViewEnabled = useSelector((s) => s.featureFlags.features.isMapViewEnabled);

  const { isLifeSkill, osrComponent } = exam;

  const { data: countries } = useGetCountriesQuery({
    locale,
    awardingBodySystem: registration?.awardingBodySystem,
    productFamilyId: getProductFamilyId(),
  });

  const showVenues = registration?.lrwExam?.displayVenues;
  const noShowVenueMessage = countries?.find(
    (c) => c.id === registration?.countryId
  )?.noShowVenueMessage;
  const location = registration?.lrwExam?.districtName;

  const isOsrLrw = [ComponentType.Listening, ComponentType.Reading, ComponentType.Writing].some(
    (c) => c === osrComponent
  );
  const showWriting = osrComponent !== ComponentType.Speaking;
  const showSpeaking = !isLifeSkill && !isOsrLrw;

  const extraProps: Partial<TestCardProps> = isLifeSkill
    ? {
        hideLrwTime: true,
        customLrwExamFormat: 'f2f',
        showArrive: false,
      }
    : {};

  useEffect(() => {
    dispatch(speaking.actions.clearSlots());
    dispatch(selfServiceTransfer.actions.clearSelfServiceTransferState());
  }, [dispatch]);

  return (
    <>
      <h2 data-testid="exam-type">{examTypeDescription(registration?.productId)}</h2>

      {!showVenues && noShowVenueMessage && (
        <div>
          {location && (
            <Location>
              {t('APPB2C.registration.dateLocation.location')}: <strong>{location}</strong>
            </Location>
          )}
          <SlimAlert type="info" size="sm" style={{ marginBottom: '30px' }}>
            <div>
              <HtmlTextRaw htmlText={noShowVenueMessage} />
            </div>
          </SlimAlert>
        </div>
      )}

      {registration && (
        <TestDetailsCard displayAsBlock>
          {showWriting && (
            <TestDetailsCard.WritingDetails
              showArrive
              arriveTime={registration?.lrwExam?.candidateArrivalTime}
              showVenues={registration?.lrwExam?.displayVenues ?? false}
              dataTestId={isLifeSkill ? 'lifeSkills-details' : 'lrw-details'}
              locale={locale}
              startTime={registration?.lrwExam?.startTime ?? ''}
              endTime={registration?.lrwExam?.endTime ?? ''}
              isOsrComponent={!!osrComponent}
              customSkillName={
                osrComponent
                  ? t(getOsrSkillName({ skillType: osrComponent, withYourTest: true }))
                  : undefined
              }
              examDate={registration?.lrwExam?.examDate ?? ''}
              isMapViewEnabled={isMapViewEnabled}
              {...registration?.lrwExam?.venue}
              {...extraProps}
              {...registration}
            />
          )}
          {!isLifeSkill && registration && showSpeaking && (
            <>
              {showWriting && <ExamsDivider />}
              <TestDetailsCard.SpeakingDetails
                showArrive
                arriveTime={registration?.speakingExam?.candidateArrivalTime}
                locale={locale}
                showVenues={registration?.lrwExam?.displayVenues ?? false}
                dataTestId="speaking-details"
                date={registration?.speakingExam?.date ?? ''}
                startTime={registration?.speakingExam?.startTime ?? ''}
                endTime={registration?.speakingExam?.endTime ?? ''}
                speakingFormat={registration?.speakingExam?.speakingFormat ?? SpeakingFormat.Remote}
                isOsrComponent={!!osrComponent}
                isMapViewEnabled={isMapViewEnabled}
                {...registration?.speakingExam?.venue}
                {...registration?.speakingExam}
              />
            </>
          )}
        </TestDetailsCard>
      )}
    </>
  );
};

const Location = styled.h3`
  margin-bottom: 10px;
  color: #23085a;
  font-weight: normal;
`;

const ExamsDivider = styled.div`
  border-top: 1px solid #c8c8c8;
  margin: 18px 0px;
`;

function useTestDetails(locale: string, reg?: RegistrationDtoMod) {
  const exam = converters.fromRegistrationDetails(locale, reg).toLrwExamData();
  const slot = converters.fromRegistrationDetails(locale, reg).toSpeakingData();

  const isLifeSkill = isLifeSkillsExam(reg?.productId);
  const osrComponent = reg?.oneSkillRetake?.component;

  return {
    exam: { ...exam, isLifeSkill, osrComponent },
    slot,
  };
}
