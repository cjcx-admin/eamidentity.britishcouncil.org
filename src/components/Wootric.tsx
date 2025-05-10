import { useEffect, useMemo, useState } from 'react';
import { RegistrationDto as RegistrationDtoIol } from 'ors-api/iol';
import { ComponentType, RegistrationDto as RegistrationDtoMod } from 'ors-api/mod';
import { appSettings } from 'ors-utils';
import { getWootricFormatDate, WootricProperties, WootricSurvey } from 'ors-ui';

import appConfig from 'appConfig';
import { initSentry } from 'initSentry';
import { useSelector } from 'core';

export const Wootric = ({
  regDetails,
  regDetailsIol,
}: {
  regDetails?: RegistrationDtoMod;
  regDetailsIol?: RegistrationDtoIol;
}) => {
  const { profile } = useSelector((state) => state.auth);
  const testTakerEmail = profile?.email;

  const osrExamDate = useMemo(
    () =>
      regDetails &&
      'oneSkillRetake' in regDetails &&
      regDetails.oneSkillRetake?.component === ComponentType.Speaking
        ? regDetails.speakingExam?.date
        : regDetails?.lrwExam?.examDate,
    [regDetails]
  );

  const osrVenueId = useMemo(
    () =>
      regDetails &&
      'oneSkillRetake' in regDetails &&
      regDetails.oneSkillRetake?.component === ComponentType.Speaking
        ? regDetails.speakingExam?.venue?.venueId
        : regDetails?.lrwExam?.venue?.venueId,
    [regDetails]
  );

  const properties: WootricProperties | undefined = useMemo(() => {
    if (regDetails)
      return {
        test_date: getWootricFormatDate(osrExamDate),
        exam_product: 'One Skill Retake',
        exam_format: regDetails.examFormat === 1 ? 'PB' : 'CD',
        reference: regDetails.reference ?? '',
        venue_id: osrVenueId,
      };

    if (regDetailsIol)
      return {
        test_date: getWootricFormatDate(regDetailsIol.lrwSession?.startDateTime),
        exam_product: 'One Skill Retake',
        exam_format: 'CD',
        reference: regDetailsIol.registrationReference ?? '',
      };

    return undefined;
  }, [regDetails, regDetailsIol, osrExamDate]);

  const [wootricAccountToken, setWootricAccountToken] = useState('');
  useEffect(() => {
    async function getWootricSettings() {
      const settings = await appSettings(appConfig, initSentry, import.meta.env.REACT_APP_ENV);

      setWootricAccountToken(settings.Wootric.account_token);
    }
    getWootricSettings();
  }, []);

  const show = wootricAccountToken && properties && testTakerEmail;

  return show ? (
    <WootricSurvey
      account_token={wootricAccountToken}
      email={testTakerEmail}
      properties={properties}
    />
  ) : null;
};
