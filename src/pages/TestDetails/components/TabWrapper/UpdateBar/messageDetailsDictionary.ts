import { nestedAppRoutes } from 'Navigation';
import { MessageCode, MessageDetails } from './models';

export const messageDetailsDictionary: Record<MessageCode, MessageDetails> = {
  transferPending: {
    type: 'info',
    tabName: 'date-location',
  },
  transferred: {
    type: 'success',
    tabName: 'date-location',
  },
  transferredCmds: {
    type: 'success',
    tabName: 'all',
  },
  transferCancelled: {
    type: 'danger',
    tabName: 'all',
  },
  cmdsTransferPending: {
    type: 'info',
    tabName: 'all',
  },
  cancelPending: {
    type: 'info',
    tabName: 'all',
    route: nestedAppRoutes().changeBooking.cancelAcknowledgement,
  },
  cancelRejected: {
    type: 'danger',
    tabName: 'all',
  },
  cancelled: {
    type: 'danger',
    tabName: 'all',
  },
  eorPending: {
    type: 'info',
    tabName: 'results',
    route: nestedAppRoutes().testDetails.eor.acknowledgement,
  },
  eorCompleted: {
    type: 'success',
    tabName: 'results',
  },
  eorRejected: {
    type: 'danger',
    tabName: 'results',
  },
  eorRefundPending: {
    type: 'info',
    tabName: 'results',
  },
  eorRefunded: {
    type: 'success',
    tabName: 'results',
  },
  hasResults: {
    type: 'success',
    tabName: 'results',
  },
  termsUpdated: {
    type: 'info',
    tabName: 'payments',
  },
  osrHasResults: {
    type: 'info',
    tabName: 'results',
  },
  osrOriginalExamAwaitingStatus: {
    type: 'info',
    tabName: 'results',
    route: nestedAppRoutes().testDetails.dateLocation,
  },
  osrOriginalExamHasResultsStatus: {
    type: 'info',
    tabName: 'results',
    route: nestedAppRoutes().testDetails.results,
  },
  transactionRefundRequestPending: {
    type: 'info',
    tabName: 'date-location',
  },
  transactionRefundRequestAccepted: {
    type: 'success',
    tabName: 'date-location',
  },
  transactionRefundRequestRejected: {
    type: 'danger',
    tabName: 'date-location',
  },
};
