import { createSlice } from '@reduxjs/toolkit';

import { apiExtraReducer } from '../_common/apiExtraReducer';
import { sliceName, getResultsDownloadUrl, getResultsDownloadUrlMod } from './api';
import { ResultsState } from './models';

export const initialState: ResultsState = {
  eTrfUrl: { isLoading: false, data: undefined },
};

const slice = createSlice({
  name: sliceName,
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    /**
     * Get eTRF URL
     */
    apiExtraReducer(builder, getResultsDownloadUrlMod, 'eTrfUrl');
    /**
     * Get eTRF URL
     */
    apiExtraReducer(builder, getResultsDownloadUrl, 'eTrfUrl');
  },
});

export default slice;
