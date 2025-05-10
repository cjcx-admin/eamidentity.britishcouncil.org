import slice, { initialState } from './registrationSlice';
import * as selectors from './selectors';
import * as api from './api';
import * as apiIol from './api.iol';
import * as apiUkvi from './api.ukvi';
import * as apiMod from './api.mod';
import * as thunks from './thunks';
import * as thunksIol from './thunks.iol';
import * as thunksUkvi from './thunks.ukvi';

export * from './models';
export * from './registration.service';

export const registration = {
  ...slice,
  initialState,
  selectors,
  thunks,
  api: {
    ...api,
    ...apiMod,
  },
};

export const registrationIol = {
  ...slice,
  initialState,
  selectors,
  thunksIol,
  api: {
    ...apiIol,
  },
};

export const registrationUkvi = {
  ...slice,
  initialState,
  selectors,
  thunksUkvi,
  api: {
    ...apiUkvi,
  },
};
