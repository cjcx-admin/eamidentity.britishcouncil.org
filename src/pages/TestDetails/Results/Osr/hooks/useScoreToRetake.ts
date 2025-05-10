import { BandScoreType, ExamResultScoreWithCommentary } from 'ors-api/ors2';
import { OneSkillRetakeDto } from 'ors-api/mod';

import { useGetRegistrationScores } from 'store/results';
import { getBandScoreType } from './helpers';
import { getExamContext } from 'core';
import { useLocale } from 'common';

export interface OriginalScoreToRetake extends Partial<ExamResultScoreWithCommentary> {
  originalOverallScore?: number;
}

export const useScoreToRetake = (osr?: OneSkillRetakeDto, originalRegId?: number) => {
  const { locale } = useLocale();
  const isIol = getExamContext() === 'iol';

  const { data: originalResults } = useGetRegistrationScores(
    {
      registrationId: osr?.originalRegistration?.registrationId || 0,
      locale,
    },
    { skip: !osr?.originalRegistration?.registrationId || isIol }
  );

  const { data: osrResults } = useGetRegistrationScores(
    {
      registrationId: originalRegId || 0,
      locale,
    },
    { skip: !originalRegId || isIol }
  );

  const osrComponentScore = osrResults?.value?.scores?.find(
    (item) => item.bandScoreType === getBandScoreType(osr?.component)
  )?.score;
  const osrOverallScore = osrResults?.value?.scores?.find(
    (item) => item.bandScoreType === BandScoreType.Overall
  )?.score;
  const originalExamScores = originalResults?.value?.scores;
  const originalScoreToRetake: OriginalScoreToRetake | undefined = {
    ...originalExamScores?.find(
      (score) => score.bandScoreType === getBandScoreType(osr?.component)
    ),
    originalOverallScore: osr?.originalRegistration?.overallScore,
  };

  return {
    originalScoreToRetake,
    osrComponentScore,
    osrOverallScore,
    originalExamScores,
  };
};
