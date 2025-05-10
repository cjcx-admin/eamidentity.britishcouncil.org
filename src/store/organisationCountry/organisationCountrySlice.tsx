import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrganisationConfigurationDto } from 'ors-api/mod';
import { ApiData, ApiErrorsList } from 'ors-ui';
import { OrganisationCountryState } from './models';

export const sliceName = 'organisationCountry';
/** Alias used to indicate, that we should use general branding within the app. */
export const BC_ORG_ALIAS = 'bc';

export const initialState: OrganisationCountryState = {
  organisationDetails: { isLoading: false },
};

/** Slice for organisation and organisation country data */
const slice = createSlice({
  name: sliceName,
  initialState: initialState,
  reducers: {
    setOrganisationAlias(state, action: PayloadAction<string>) {
      state.organisationAlias = action.payload;
    },
    setOrganisationDetails(
      state,
      action: PayloadAction<ApiData<OrganisationConfigurationDto, ApiErrorsList>>
    ) {
      state.organisationDetails = action.payload;
    },
  },
});

export default slice;
