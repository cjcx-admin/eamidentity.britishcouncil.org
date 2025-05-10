import { generatePath } from 'react-router-dom';
import { getSearchParamSuffix, includesInUrl } from 'ors-utils';

import { appRoutes } from 'Navigation/appRoutes';
import { getExamContext } from 'core/getExamContext';
import { useSelector } from 'core/hooks/useSelector';
import { BasicExam } from 'store/registration';

export const useNavigationTabs = (lastExam?: BasicExam) => {
  const { registrationInCentre, ttRegistrationIol } = useSelector((s) => s.registration);
  const regId = (registrationInCentre?.id ?? ttRegistrationIol?.id)?.toString();
  const ctx = getExamContext();

  const helpPath =
    regId && ctx
      ? generatePath(appRoutes.helpAndContact.index, { ctx, regId })
      : appRoutes.helpAndContact.redirect;

  const preparationPath =
    regId && ctx
      ? generatePath(appRoutes.preparation.index, { ctx, regId })
      : appRoutes.preparation.redirect;

  const navigationTabs = [
    {
      key: 'results&tests',
      testDataId: 'results-and-test-nav-button',
      translationKey: 'APPB2C.common.nav.resultsTests',
      target: '/',
      loginAccess: true,
      externalLink: false,
      isActive:
        window.location.pathname === '/ttp/' ||
        (includesInUrl('/test-details') &&
          !includesInUrl('/preparation') &&
          !includesInUrl('/help-and-contact')),
    },
    {
      key: 'bookNewTest',
      testDataId: 'book-new-test-nav-button',
      translationKey: 'APPB2C.common.nav.bookNewTest',
      target: getUrl(lastExam),
      loginAccess: true,
      externalLink: true,
      isActive: false,
    },
    {
      key: 'preparation',
      testDataId: 'preparation-nav-button',
      translationKey: 'APPB2C.common.nav.preparation',
      target: preparationPath,
      loginAccess: true,
      isActive: includesInUrl('/preparation'),
    },
    {
      key: 'helpAndContact',
      testDataId: 'help-and-contact-nav-button',
      translationKey: 'APPB2C.common.nav.helpAndContact',
      target: helpPath,
      loginAccess: true,
      externalLink: false,
      isActive: includesInUrl('/help-and-contact'),
    },
    {
      key: 'myAccount',
      testDataId: 'my-account-nav-button',
      translationKey: 'APPB2C.common.nav.myAccount',
      target: '/my-account',
      loginAccess: true,
      externalLink: false,
      isActive: includesInUrl('/my-account'),
    },
  ];

  return { navigationTabs };
};

function getUrl(lastExam?: BasicExam): string {
  const baseUrl = window.location.origin;

  const searchParams = new URLSearchParams();
  if (lastExam) {
    searchParams.append('country', lastExam.countryCode);
    searchParams.append('examType', lastExam.module);
    searchParams.append('examFlow', lastExam.mode);
    searchParams.append('productId', lastExam.productId);
  }

  return baseUrl + getSearchParamSuffix(searchParams);
}
