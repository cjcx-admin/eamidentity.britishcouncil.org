import slice, { initialState } from './receivingOrgsSlice';
import * as api from './api';
import * as thunks from './thunks';
import * as selectors from './selectors';

export * from './models';

export const receivingOrgs = {
  ...slice,
  initialState,
  api,
  thunks,
  selectors,
};
