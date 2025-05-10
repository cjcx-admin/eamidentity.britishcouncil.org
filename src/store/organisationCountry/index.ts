import slice, { initialState, BC_ORG_ALIAS } from './organisationCountrySlice';
import * as selectors from './selectors';

export * from './models';
export * from './organisationCountry.service';

export const organisationCountry = {
  ...slice,
  initialState,
  bcAlias: BC_ORG_ALIAS,
  selectors,
};
