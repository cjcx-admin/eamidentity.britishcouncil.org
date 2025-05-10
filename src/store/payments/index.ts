import slice, { initialState } from './paymentsSlice';
import * as api from './api';
import * as thunks from './thunks';

export * from './models';
export * from './payment.service';

export const payments = {
  ...slice,
  initialState,
  api,
  thunks,
};
