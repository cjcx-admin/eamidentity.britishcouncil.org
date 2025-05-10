import { appRoutes } from 'Navigation';
import { ActionCode, ActionRoutes } from './models';

export const actionRouteDictionary: Record<ActionCode, ActionRoutes> = {
  regPayment: {
    tabName: 'payments',
    route: appRoutes.testDetails.payments.index,
  },
  regPaymentProof: {
    tabName: 'payments',
    route: appRoutes.testDetails.payments.index,
  },
  eorPayment: {
    tabName: 'payments',
    route: appRoutes.testDetails.payments.index,
  },
  eorPaymentProof: {
    tabName: 'payments',
    route: appRoutes.testDetails.payments.index,
  },
  idUpload: {
    tabName: 'candidate',
    route: appRoutes.testDetails.tt,
  },
  idReupload: {
    tabName: 'candidate',
    route: appRoutes.testDetails.tt,
  },
  medicalUpload: {
    tabName: 'candidate',
    route: appRoutes.testDetails.tt,
  },
  medicalReupload: {
    tabName: 'candidate',
    route: appRoutes.testDetails.tt,
  },
  cancelReupload: {},
  childConsentMissing: {
    tabName: 'candidate',
    route: appRoutes.childConsent,
  },
  check: {
    route: appRoutes.testDetails.check,
  },
  creds: {
    route: appRoutes.testDetails.check,
  },
};
