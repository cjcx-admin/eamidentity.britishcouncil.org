import { FC, lazy } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ScrollToTop } from '@britishcouncil/react-common';

import { appRoutes } from './appRoutes';

/** Initial bundle with all the initial things */
import HomePage from '../pages/Home';
import { useSelector } from 'core';
import { isUserLoggedInLS } from 'store/authSlice';
import { appInitialized } from 'store/initApp';
import { OidcCallback, OidcLogout, OidcLogin } from '../auth';
import { TestDetails } from './nestedRoutes/TestDetails';
import { ChangeBookingRoutes } from './nestedRoutes/ChangeBooking';
import { TabWrapper } from '../pages/TestDetails/components';
import { TestDetailsComp } from './Compatibility';

/** Please refer to the Page components as follows. Webpack will bundle app in a more modular way. */
const NotFound = lazy(() => import('../pages/errorPages/NotFound'));
const NotAllowed = lazy(() => import('../pages/errorPages/NotAllowed'));
const AccountPage = lazy(() => import('../pages/Account/Account'));
const DraftPage = lazy(() => import('../pages/Draft/Draft'));
const UnderConstructionPage = lazy(() => import('../pages/UnderConstruction'));
const IncorrectOrganisationPage = lazy(() => import('../pages/IncorrectOrganisationPage'));
const ForgotPassword = lazy(() => import('../pages/auth/ForgotPassword'));
const ResetPassword = lazy(() => import('../pages/auth/ResetPassword'));
const ChangePassword = lazy(() => import('../pages/auth/ChangePassword'));
const ConsentPage = lazy(() => import('../pages/TestDetails/TestTaker/Consent'));
const HelpAndContact = lazy(() => import('../pages/HelpAndContact/HelpAndContact'));
const HelpFormPage = lazy(() => import('../pages/HelpAndContact/HelpForm'));
const PreparationPage = lazy(() => import('../pages/Preparation'));
const GelRedirect = lazy(() => import('../pages/Preparation/GelRedirect'));

export const AppRoutes: FC = () => {
  let isLoggedIn = useSelector((s) => s.auth.isLoggedIn);
  const { pathname } = useLocation();

  if (!appInitialized && !isLoggedIn) {
    isLoggedIn = isUserLoggedInLS();
  }

  return (
    <ScrollToTop>
      <Routes>
        <Route
          path={appRoutes.auth.callback}
          element={<OidcCallback />}
          key={appRoutes.auth.callback}
        />
        <Route path={appRoutes.auth.logout} element={<OidcLogout />} key={appRoutes.auth.logout} />

        {isLoggedIn ? PrivateRoutes() : PublicRoutes(pathname)}
      </Routes>
    </ScrollToTop>
  );
};

const PrivateRoutes = () => [
  <Route
    path={appRoutes.auth.login}
    key={appRoutes.auth.login}
    element={<Navigate to={appRoutes.root} />}
  />,
  <Route
    path={appRoutes.auth.forgotPassword}
    key={appRoutes.auth.forgotPassword}
    element={<Navigate to={appRoutes.root} />}
  />,
  <Route
    path={appRoutes.auth.resetPassword}
    key={appRoutes.auth.resetPassword}
    element={<Navigate to={appRoutes.root} />}
  />,

  <Route path={appRoutes.draft} key={appRoutes.draft} element={<DraftPage />} />,
  <Route path={appRoutes.account} key={appRoutes.account} element={<AccountPage />} />,

  /* Help & contact */
  <Route path={appRoutes.helpAndContact.index} key={appRoutes.helpAndContact.index}>
    <Route index element={<HelpAndContact />} />
    <Route path={appRoutes.helpAndContact.form} element={<HelpFormPage />} />
  </Route>,

  <Route
    path={appRoutes.helpAndContact.redirect}
    key={appRoutes.helpAndContact.redirect}
    element={<HelpAndContact />}
  />,

  /*Preparation */
  <Route
    path={appRoutes.preparation.index}
    key={appRoutes.preparation.index}
    element={<PreparationPage />}
  />,
  <Route
    path={appRoutes.preparation.redirect}
    key={appRoutes.preparation.redirect}
    element={<PreparationPage />}
  />,

  // TODO: Route contains test-details to make sure that user will be correctly redirected from email link.
  // If the email link will be changed, this has to be changed also
  <Route
    path={appRoutes.preparation.gelRedirect}
    element={<GelRedirect />}
    key={appRoutes.preparation.gelRedirect}
  />,

  /* Test Details Tabs */
  <Route
    path={`/${appRoutes.testDetails.index}/*`}
    element={<TestDetails />}
    key={appRoutes.testDetails.dateLocation}
  />,

  /* Change Booking */
  <Route
    path={`/${appRoutes.changeBooking.index}/*`}
    element={<ChangeBookingRoutes />}
    key={appRoutes.changeBooking.index}
  />,

  <Route element={<TabWrapper />} key={appRoutes.childConsent}>
    <Route path={appRoutes.childConsent} element={<ConsentPage />} />
  </Route>,

  <Route path={appRoutes.root} element={<HomePage />} key={appRoutes.root} />,
  <Route
    path={appRoutes.auth.changePassword}
    key={appRoutes.auth.changePassword}
    element={<ChangePassword />}
  />,

  <Route path={appRoutes.notAllowed} element={<NotAllowed />} key={appRoutes.notAllowed} />,
  <Route
    path={appRoutes.underConstruction}
    key={appRoutes.underConstruction}
    element={<UnderConstructionPage />}
  />,
  <Route
    path={appRoutes.incorrectOrganisation}
    key={appRoutes.incorrectOrganisation}
    element={<IncorrectOrganisationPage />}
  />,

  /* Routes to keep backward compatibility with links without registration context. */
  <Route
    path={`${appRoutes.testDetails.index.replace(':ctx', '')}/*`}
    element={<TestDetailsComp />}
    key={'compatibility-details'}
  />,
  <Route
    path={`test-details/iol/:regId/*`}
    element={<TestDetailsComp />}
    key={'compatibility-iol-details'}
  />,

  <Route path="*" element={<NotFound />} key="not-found" />,
];

function PublicRoutes(returnUrl?: string) {
  return [
    <Route path={appRoutes.auth.login} element={<OidcLogin />} key={appRoutes.auth.login} />,
    <Route
      path={appRoutes.auth.forgotPassword}
      element={<ForgotPassword />}
      key={appRoutes.auth.forgotPassword}
    />,
    <Route
      path={appRoutes.auth.resetPassword}
      element={<ResetPassword />}
      key={appRoutes.auth.resetPassword}
    />,

    <Route
      path="*"
      key="redirect-to-login"
      element={<Navigate to={`${appRoutes.auth.login}?returnUrl=${returnUrl}`} />}
    />,
    <Route
      path={appRoutes.incorrectOrganisation}
      key={appRoutes.incorrectOrganisation}
      element={<IncorrectOrganisationPage />}
    />,
  ];
}
