import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '.';
import { featureFlagsClient, FeatureFlagsDto } from 'ors-api/mod';
import { GTM } from 'core';

const sliceName = 'featureFlags';

const defaultFeatureFlags: FeatureFlagsDto = {
  isOsrEnabled: false,
  isLocaliseEnabled: false,
  isCustomerIdentityEnabled: false,
  isReadyMemberIdentityEnabled: false,
  isCustomerIdentityUsaEnabled: false,
  isReadyMemberIdentityUsaEnabled: false,
  isMapViewEnabled: false,
  isComplaintFormEnabled: false,
  isUkviCancellationRequestEnabled: false,
  isFraudDetectionEnabled: false,
  isModernisedPreRegisterEnabled: false,
  isModernisedRegisterEnabled: false,
};

const initialState: FeatureFlagsState = {
  features: defaultFeatureFlags,
};

const slice = createSlice({
  name: sliceName,
  initialState: initialState,
  reducers: {
    updatedAbTests(state, action: PayloadAction<AbTests>) {
      state.abTests = action.payload;
    },
    updatedFeatureFlags(state, action: PayloadAction<FeatureFlagsDto>) {
      state.features = action.payload;
    },
  },
});

export interface FeatureFlagsState {
  features: FeatureFlagsDto;
  abTests?: AbTests;
}

export interface AbTests {
  showCjNotes: boolean;
}

export default slice;

function isObjStructureSame(objA: object, objB: object): boolean {
  return Object.keys(objA).sort().join('_') === Object.keys(objB).sort().join('_');
}

/** Function that initializes or refreshes AbTests as necessary */
export const refreshAbTests = (): AppThunk => async (dispatch, getState) => {
  const ff = getState().featureFlags;

  const abTests: AbTests = {
    showCjNotes: variant2(),
  };

  if (ff.abTests && !isObjStructureSame(ff.abTests, abTests)) {
    const refreshedAbTests = Object.assign({}, abTests, ff.abTests);
    dispatch(slice.actions.updatedAbTests(refreshedAbTests));
  }

  if (ff.abTests) {
    GTM.updateAbTests(ff.abTests);
    return;
  }

  dispatch(slice.actions.updatedAbTests(abTests));
  GTM.updateAbTests(abTests);
};

/** Gets the latest Feature Flags from server */
export const refreshFeatureFlags = (): AppThunk => async (dispatch, getState) => {
  const ff = getState().featureFlags.features;

  try {
    const res = await featureFlagsClient.getAll();
    dispatch(slice.actions.updatedFeatureFlags(res.data));
    return res.data;
  } catch (error) {
    dispatch(slice.actions.updatedFeatureFlags(ff || defaultFeatureFlags));
    return ff || defaultFeatureFlags;
  }
};

function variant2(): boolean {
  return Math.random() >= 0.5;
}
