export const appRoutes = {
  root: '/',
  auth: {
    login: '/login',
    callback: '/callback',
    logout: '/logout',
    forgotPassword: '/forgot-password',
    resetPassword: '/reset-password',
    changePassword: '/change-password',
  },

  notFound: '/404',
  notAllowed: '/not-allowed',
  underConstruction: '/under-construction',
  incorrectOrganisation: '/incorrect-org',
  account: '/my-account',
  draft: '/verification-and-update/:returnUrl',
  childConsent: '/:ctx/child-consent/:regId',
  helpAndContact: {
    index: '/:ctx/test-details/:regId/help-and-contact',
    redirect: '/help-and-contact',
    form: 'form',
  },
  preparation: {
    index: '/:ctx/test-details/:regId/preparation',
    redirect: '/preparation',
    gelRedirect: '/:ctx/test-details/:regId/preparation/gel-redirect',
  },

  /* Change booking (nested routes) */
  changeBooking: {
    index: ':ctx/change/:regId',
    transfer: 'transfer',
    selfServiceTransfer: {
      index: 'self-service-transfer',
      chooseDate: 'choose-date',
      chooseTest: 'choose-test',
      changeSpeaking: 'change-speaking',
      review: 'review',
    },
    cancel: 'cancel',
    speaking: 'speaking',
    cancelAcknowledgement: 'cancelAcknowledgement',
    transferAcknowledgement: 'transferAcknowledgement',
  },

  /* Test Details Tabs (nested routes) */
  testDetails: {
    index: ':ctx/test-details/:regId',
    bookingDetails: 'booking-details',
    dateLocation: 'date-location',
    tt: 'candidate',
    results: 'results',
    payments: {
      index: 'payments',
      offlinePaymentDetails: 'payment-options/:transId',
      paymentProofUpload: 'payment-proof/:transId',
      paymentAcknowledgement: 'acknowledgement',
    },
    recognisingOrgs: { index: 'recognising-orgs' },
    help: {
      index: 'help-and-contact',
      helpForm: 'form',
    },
    check: 'check',
    eor: {
      index: 'eor',
      request: 'request-process',
      acknowledgement: 'acknowledgement',
    },
    osr: {
      index: 'osr',
      webForm: 'web-form',
      chooseSkill: 'choose-skill',
      chooseDate: 'choose-date',
      chooseTest: 'choose-test',
      review: 'review',
    },
  },
};
