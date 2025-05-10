import { ApiErrorDetailed, extractApiError } from '@britishcouncil/react-common';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ProductSettingsDto,
  registrationClient,
  registrationAllowedActionsClient,
} from 'ors-api/iol';
import { registrationAllowedActionsClient as registrationAllowedActionsClientMod } from 'ors-api/mod';

import { ReceivingOrgsAllowedActions } from './models';

const sliceName = 'receivingOrgs';

/**
 *  IOL Settings
 */

export const getResultSettingsIol = createAsyncThunk<
  ProductSettingsDto,
  number,
  { rejectValue: ApiErrorDetailed }
>(sliceName + '/getResultSettingsIol', async (registrationId, { rejectWithValue }) => {
  try {
    const response = await registrationClient.getProductSettings(registrationId);
    return response.data;
  } catch (error) {
    const err = extractApiError(error);
    return rejectWithValue(err);
  }
});

/**
 *  IOL Allowed Actions
 */

export const getReceivingOrgsAllowedActionsIol = createAsyncThunk<
  ReceivingOrgsAllowedActions,
  number,
  { rejectValue: ApiErrorDetailed }
>(sliceName + '/getReceivingOrgsAllowedActionsIol', async (registrationId, { rejectWithValue }) => {
  try {
    const response =
      await registrationAllowedActionsClient.getAllowedRegistrationReceivingOrganisationsActions(
        registrationId
      );
    return response.data;
  } catch (error) {
    const err = extractApiError(error);
    return rejectWithValue(err);
  }
});

/**
 *  MOD Allowed Actions
 */

export const getReceivingOrgsAllowedActionsMod = createAsyncThunk<
  ReceivingOrgsAllowedActions,
  number,
  { rejectValue: ApiErrorDetailed }
>(sliceName + '/getReceivingOrgsAllowedActionsMod', async (registrationId, { rejectWithValue }) => {
  try {
    const response =
      await registrationAllowedActionsClientMod.getAllowedRegistrationReceivingOrganisationsActions(
        registrationId
      );
    return response.data;
  } catch (error) {
    const err = extractApiError(error);
    return rejectWithValue(err);
  }
});
