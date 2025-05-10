import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { TabWrapper } from '../../pages/TestDetails/components';
import { appRoutes } from '../appRoutes';

const CancelAcknowledgement = lazy(() => import('../../pages/ChangeBooking/CancelAcknowledgement'));
const TransferPageIol = lazy(() => import('../../pages/ChangeBooking/Transfer/index.iol'));
const TransferSSChooseDate = lazy(
  () => import('../../pages/ChangeBooking/Transfer/TransferSSChooseDate')
);
const TransferSSChooseTest = lazy(
  () => import('../../pages/ChangeBooking/Transfer/TransferSSChooseTest')
);
const TransferSSChangeSpeaking = lazy(
  () => import('../../pages/ChangeBooking/Transfer/TransferSSChangeSpeaking')
);
const TransferSSReview = lazy(() => import('../../pages/ChangeBooking/Transfer/TransferSSReview'));
const CancelPage = lazy(() => import('../../pages/ChangeBooking/Cancel'));
const ChangeSpeaking = lazy(() => import('../../pages/ChangeBooking/ChangeSpeaking'));
const NotFound = lazy(() => import('../../pages/errorPages/NotFound'));
const TransferAcknowledgement = lazy(
  () => import('../../pages/ChangeBooking/Transfer/TransferAcknowledgement')
);

export const ChangeBookingRoutes = () => (
  <Routes>
    <Route element={<TabWrapper />}>
      <Route path={appRoutes.changeBooking.transfer} element={<TransferPageIol />} />
      <Route path={appRoutes.changeBooking.selfServiceTransfer.index}>
        <Route
          index
          element={<Navigate to={appRoutes.changeBooking.selfServiceTransfer.chooseDate} replace />}
        />
        <Route
          path={appRoutes.changeBooking.selfServiceTransfer.chooseDate}
          element={<TransferSSChooseDate />}
        />
        <Route
          path={appRoutes.changeBooking.selfServiceTransfer.chooseTest}
          element={<TransferSSChooseTest />}
        />
        <Route
          path={appRoutes.changeBooking.selfServiceTransfer.changeSpeaking}
          element={<TransferSSChangeSpeaking />}
        />
        <Route
          path={appRoutes.changeBooking.selfServiceTransfer.review}
          element={<TransferSSReview />}
        />
      </Route>
      <Route path={appRoutes.changeBooking.cancel} element={<CancelPage />} />
      <Route path={appRoutes.changeBooking.speaking} element={<ChangeSpeaking />} />
      <Route
        path={appRoutes.changeBooking.cancelAcknowledgement}
        element={<CancelAcknowledgement />}
      />
      <Route
        path={appRoutes.changeBooking.transferAcknowledgement}
        element={<TransferAcknowledgement />}
      />

      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);
