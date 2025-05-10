import slice from './candidateSlice';
import * as api from './api';
import * as thunks from './thunks';

export * from './candidate.service';

export const candidate = {
  slice,
  api,
  thunks,
};
