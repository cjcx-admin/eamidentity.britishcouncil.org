import { useSelector } from 'core';
import { isLifeSkillsExam } from 'ors-utils';
import {
  useCheckIfTermsAndConditionsUpdatedQuery,
  useGetRegistrationTermsShortCodeQuery,
} from 'store/registration';

export const useTermsAndConditionsInCentreData = () => {
  const reg = useSelector((s) => s.registration.registrationInCentre);

  const { data: termsShortCode, isFetching: isFetchingShortCode } =
    useGetRegistrationTermsShortCodeQuery({
      registrationId: reg?.id,
      orgCountryId: reg?.organisationCountryId,
    });

  const isLifeSkills = isLifeSkillsExam(reg?.productId);
  const { data: termsUpdated, isFetching: isFetchingTermsUpdated } =
    useCheckIfTermsAndConditionsUpdatedQuery(
      {
        registrationId: reg?.id,
        organisationCountryId: reg?.organisationCountryId,
        shortCode: termsShortCode ?? '',
        isLifeSkills,
      },
      {
        skip: !termsShortCode,
      }
    );

  const isFetching = isFetchingShortCode ?? isFetchingTermsUpdated;

  return { termsShortCode, termsUpdated, isFetching };
};
