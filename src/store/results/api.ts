import { ApiErrorDetailed, extractApiError } from '@britishcouncil/react-common';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { examResultClient } from 'ors-api/ukvi';
import { registrationClient as registrationClientMod } from 'ors-api/mod';
import { registrationClient } from 'ors-api/iol';

export const sliceName = 'results';

export const getTrfNumberUkvi = createAsyncThunk<string, number, { rejectValue: ApiErrorDetailed }>(
  sliceName + '/getTrfNumber',
  async (registrationId, { rejectWithValue }) => {
    try {
      const response = await examResultClient.getTrfNumber(registrationId);
      return response.data;
    } catch (error) {
      const err = extractApiError(error);
      return rejectWithValue(err);
    }
  }
);

export const getResultsDownloadUrlMod = createAsyncThunk<
  string,
  number,
  { rejectValue: ApiErrorDetailed }
>(sliceName + '/getResultsDownloadUrlMod', async (registrationId, { rejectWithValue }) => {
  try {
    const response = await registrationClientMod.getResultsDownloadUrl(registrationId);
    return response.data;
  } catch (error) {
    const err = extractApiError(error);
    return rejectWithValue(err);
  }
});

export const getResultsDownloadUrl = createAsyncThunk<
  string,
  number,
  { rejectValue: ApiErrorDetailed }
>(sliceName + '/getResultsDownloadUrl', async (registrationId, { rejectWithValue }) => {
  try {
    const response = await registrationClient.getResultsDownloadUrl(registrationId);
    return response.data;
  } catch (error) {
    const err = extractApiError(error);
    return rejectWithValue(err);
  }
});
