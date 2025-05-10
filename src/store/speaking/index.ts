import slice, { initialState } from './speakingSlice';
import * as api from './api';

export * from './models';

export const speaking = {
  ...slice,
  initialState,
  api,
};
