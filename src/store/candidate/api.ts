import { ApiErrorDetailed, extractApiError } from '@britishcouncil/react-common';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  CandidatePersonalDetails,
  candidateClient,
  CandidateB2CMissingDetails,
  CandidateMarketingPreferences,
} from 'ors-api/ors2';

import slice from './candidateSlice';

export const getCandidateDetails = createAsyncThunk<
  CandidatePersonalDetails,
  void,
  { rejectValue: ApiErrorDetailed }
>(slice.name + '/getCandidateDetails', async (_, { rejectWithValue }) => {
  try {
    const response = await candidateClient.getCandidateDetailsExtended();
    return response.data;
  } catch (error) {
    const err = extractApiError(error);
    return rejectWithValue(err);
  }
});

export const saveCandidateMissingDetails = createAsyncThunk<
  any,
  CandidateB2CMissingDetails,
  { rejectValue: ApiErrorDetailed }
>(slice.name + '/saveCandidateMissingDetails', async (req, { rejectWithValue }) => {
  try {
    const response = await candidateClient.saveCandidateMissingDetails(req);
    return response.data;
  } catch (error) {
    const err = extractApiError(error);
    return rejectWithValue(err);
  }
});

export const updateMarketingPreferences = createAsyncThunk<
  any,
  CandidateMarketingPreferences,
  { rejectValue: ApiErrorDetailed }
>(slice.name + '/updateMarketingPreferences', async (req, { rejectWithValue }) => {
  try {
    const response = await candidateClient.updateMarketingPreferences(req);
    return response.data;
  } catch (error) {
    const err = extractApiError(error);
    return rejectWithValue(err);
  }
});
