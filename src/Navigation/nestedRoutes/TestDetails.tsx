import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RegistrationTabs, TabWrapper } from '../../pages/TestDetails/components';
import { appRoutes } from '../appRoutes';
import { OsrPage } from 'pages/TestDetails/Results/Osr/OsrPage';

const DateLocationPage = lazy(() => import('../../pages/TestDetails/DateLocation'));
const CandidatePage = lazy(() => import('../../pages/TestDetails/TestTaker'));
const ResultsPage = lazy(() => import('../../pages/TestDetails/Results'));
const RecognisingOrgsPage = lazy(() => import('../../pages/TestDetails/RecognisingOrganisations'));
const PaymentsPage = lazy(() => import('../../pages/TestDetails/Payments'));
const OfflinePaymentDetailsPage = lazy(
  () => import('../../pages/TestDetails/Payments/OfflinePaymentDetails')
);
const PaymentProofUploadPage = lazy(
  () => import('../../pages/TestDetails/Payments/PaymentProofUpload')
);
const PaymentAcknowledgementPage = lazy(
  () => import('../../pages/TestDetails/Payments/Acknowledgement')
);
const CheckPage = lazy(() => import('../../pages/TestDetails/DateLocation/Check'));
const EorsPage = lazy(() => import('../../pages/TestDetails/Results/Eors'));
const EorAcknowledgementPage = lazy(
  () => import('../../pages/TestDetails/Results/Eors/Acknowledgement')
);
const NotFound = lazy(() => import('../../pages/errorPages/NotFound'));
const OsrChooseSkill = lazy(
  () => import('../../pages/TestDetails/Results/Osr/OsrChooseSkill/OsrChooseSkill')
);
const OsrChooseDate = lazy(
  () => import('../../pages/TestDetails/Results/Osr/OsrChooseDate/OsrChooseDate')
);
const OsrChooseTest = lazy(
  () => import('../../pages/TestDetails/Results/Osr/OsrChooseTest/OsrChooseTest')
);
const OsrReview = lazy(() => import('../../pages/TestDetails/Results/Osr/OsrReview/OsrReview'));

export const TestDetails = () => (
  <Routes>
    {/* Routes with registration details header */}
    <Route element={<TabWrapper />}>
      {/* Routes with navigation tabs */}
      <Route element={<RegistrationTabs />}>
        <Route index element={<Navigate to={appRoutes.testDetails.dateLocation} />} />
        <Route
          path={appRoutes.testDetails.bookingDetails}
          element={<DateLocationPage isBookingDetails />}
        />
        <Route path={appRoutes.testDetails.dateLocation} element={<DateLocationPage />} />
        <Route path={appRoutes.testDetails.tt} element={<CandidatePage />} />
        <Route path={appRoutes.testDetails.results} element={<ResultsPage />} />
        <Route
          path={appRoutes.testDetails.recognisingOrgs.index}
          element={<RecognisingOrgsPage />}
        />
        <Route path={`/${appRoutes.testDetails.payments.index}`}>
          <Route index element={<PaymentsPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Routes without navigation tabs */}
      <Route path={`/${appRoutes.testDetails.payments.index}`}>
        <Route
          path={appRoutes.testDetails.payments.paymentAcknowledgement}
          element={<PaymentAcknowledgementPage />}
        />
        <Route
          path={appRoutes.testDetails.payments.offlinePaymentDetails}
          element={<OfflinePaymentDetailsPage />}
        />
        <Route
          path={appRoutes.testDetails.payments.paymentProofUpload}
          element={<PaymentProofUploadPage />}
        />
      </Route>

      <Route path={appRoutes.testDetails.check} element={<CheckPage />} />

      <Route path={appRoutes.testDetails.eor.index}>
        <Route index element={<Navigate to={appRoutes.testDetails.eor.request} />} />
        <Route path={appRoutes.testDetails.eor.request} element={<EorsPage />} />
        <Route
          path={appRoutes.testDetails.eor.acknowledgement}
          element={<EorAcknowledgementPage />}
        />
      </Route>

      <Route path={appRoutes.testDetails.osr.index}>
        <Route index element={<Navigate to={appRoutes.testDetails.osr.webForm} replace />} />
        <Route path={appRoutes.testDetails.osr.webForm} element={<OsrPage />} />
        <Route path={appRoutes.testDetails.osr.chooseSkill} element={<OsrChooseSkill />} />
        <Route path={appRoutes.testDetails.osr.chooseDate} element={<OsrChooseDate />} />
        <Route path={appRoutes.testDetails.osr.chooseTest} element={<OsrChooseTest />} />
        <Route path={appRoutes.testDetails.osr.review} element={<OsrReview />} />
      </Route>
    </Route>
  </Routes>
);
