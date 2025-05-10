import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OnlinePaymentStartedDto, UnpaidTransactionDto } from 'ors-api/mod';
import { ApiErrorsList, initApiData } from 'ors-ui';

import { converters } from 'common';
import { apiExtraReducer } from '../_common/apiExtraReducer';
import {
  createEoR,
  createEoRIol,
  createEoRMod,
  getAcceptedTermsVersion,
  getEoRAcknowledgment,
  getEorDetails,
  getEorDetailsIol,
  getEorDetailsMod,
  getFileUrl,
  getNewestTermsVersion,
  getUnpaidTransactions,
  payOnlineMod,
  payOnlineIol,
  uploadSupportingEvidence,
} from './api';
import { EorState } from './models';

export const sliceName = 'eor';

export const initialState: EorState = {
  eorDetails: initApiData,
  eorRequestDetails: initApiData,
  eorSettingsDetailsLoading: false,
  payOnlineResponse: initApiData,

  termsVersion: undefined,
  acceptedTermsVersion: undefined,
  storedFiles: [],
  processingUpload: false,
  showPaymentForm: false,
  eorId: initApiData,
  transaction: initApiData,
  eorLetterQuery: undefined,
  eorLetterUrl: undefined,
  fetchingEorLetterUrl: false,
  processing: false,
  error: undefined,
};

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setShowPaymentForm: (state, action: PayloadAction<boolean>) => {
      state.showPaymentForm = action.payload;
    },
    clearError: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    /**
     * Get Registration EOR Details
     */
    apiExtraReducer(builder, getEorDetails, 'eorDetails');
    apiExtraReducer(builder, getEorDetailsMod, 'eorRequestDetails');
    apiExtraReducer(builder, getEorDetailsIol, 'eorRequestDetails');
    /**
     * Get Newest Terms Version Number
     */
    builder.addCase(getNewestTermsVersion.pending, (state) => {
      state.processing = true;
      state.error = undefined;
    });
    builder.addCase(getNewestTermsVersion.fulfilled, (state, action) => {
      state.processing = false;
      state.termsVersion = action.payload;
    });
    builder.addCase(getNewestTermsVersion.rejected, (state, action) => {
      state.processing = false;
      state.error = converters.tErrorMessage(action.payload);
    });
    /**
     * Get Accepted Terms Version
     */
    builder.addCase(getAcceptedTermsVersion.pending, (state) => {
      state.processing = true;
      state.error = undefined;
    });
    builder.addCase(getAcceptedTermsVersion.fulfilled, (state, action) => {
      state.processing = false;
      state.acceptedTermsVersion = action.payload?.version;
    });
    builder.addCase(getAcceptedTermsVersion.rejected, (state, action) => {
      state.processing = false;
      state.error = converters.tErrorMessage(action.payload);
    });
    /**
     * Upload Supporting Evidence Files
     */
    builder.addCase(uploadSupportingEvidence.pending, (state) => {
      state.processingUpload = true;
      state.error = undefined;
    });
    builder.addCase(uploadSupportingEvidence.fulfilled, (state, action) => {
      state.processingUpload = false;
      state.storedFiles = action.payload;
    });
    builder.addCase(uploadSupportingEvidence.rejected, (state, action) => {
      state.processingUpload = false;
      state.error = converters.tErrorMessage(action.payload);
    });
    /**
     * Create EOR
     */
    apiExtraReducer<EorState, number, unknown, ApiErrorsList>(builder, createEoR, 'eorId');
    apiExtraReducer<EorState, number, unknown, ApiErrorsList>(builder, createEoRMod, 'eorId');
    apiExtraReducer<EorState, number, unknown, ApiErrorsList>(builder, createEoRIol, 'eorId');
    /**
     * Get EOR Acknowledgement
     */
    apiExtraReducer(builder, getEoRAcknowledgment, 'eorRequestDetails');
    /**
     * Get Unpaid EOR Transactions
     */
    apiExtraReducer<EorState, UnpaidTransactionDto[], unknown, ApiErrorsList>(
      builder,
      getUnpaidTransactions,
      'transaction',
      {
        transform: (data) => data[0],
      }
    );
    /**
     * Pay Online
     */
    apiExtraReducer<EorState, OnlinePaymentStartedDto, unknown, ApiErrorsList>(
      builder,
      payOnlineMod,
      'payOnlineResponse'
    );
    apiExtraReducer<EorState, OnlinePaymentStartedDto, unknown, ApiErrorsList>(
      builder,
      payOnlineIol,
      'payOnlineResponse'
    );

    /**
     * Get EOR Letter Url
     */
    builder.addCase(getFileUrl.pending, (state) => {
      state.fetchingEorLetterUrl = true;
      state.error = undefined;
    });
    builder.addCase(getFileUrl.fulfilled, (state, action) => {
      state.fetchingEorLetterUrl = false;
      state.eorLetterUrl = action.payload;
    });
    builder.addCase(getFileUrl.rejected, (state, action) => {
      state.fetchingEorLetterUrl = false;
      state.error = converters.tErrorMessage(action.payload);
    });
  },
});

export default slice;
