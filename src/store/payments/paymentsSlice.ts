import { DateTime } from 'luxon';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiErrorsList, initApiData } from 'ors-ui';

import { converters } from 'common';
import { apiExtraReducer } from '../_common/apiExtraReducer';
import { getTransactions, getTransactionsDetails, getTransactionsIol } from './api';
import { PaymentsState, ExtendedTransactionPaymentDetails } from './models';
import { CentrePaymentMethodDto } from 'ors-api/mod';
import { TransactionDto } from 'ors-api/iol';

export const sliceName = 'payments';

export const initialState: PaymentsState = {
  hasOnlineMethods: false,
  hasOfflineMethods: false,
  offlineMethods: undefined,
  transactions: initApiData,
  transactionsIol: initApiData,
  unpaidTransactions: undefined,
  paidTransactions: undefined,
  transactionDetails: initApiData,
  onlinePaymentError: undefined,
};

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setTransactionLists: (
      state,
      action: PayloadAction<{
        paid: ExtendedTransactionPaymentDetails[];
        unpaid: ExtendedTransactionPaymentDetails[];
      }>
    ) => {
      state.paidTransactions = action.payload.paid.sort(
        (a, b) =>
          DateTime.fromISO(b.paymentDeadline || '').toSeconds() -
          DateTime.fromISO(a.paymentDeadline || '').toSeconds()
      );
      state.unpaidTransactions = action.payload.unpaid;
    },
    setTransactionDetails(
      state,
      action: PayloadAction<ExtendedTransactionPaymentDetails | undefined>
    ) {
      state.transactionDetails.data = action.payload;
    },
    setPaymentMethods(state, action: PayloadAction<CentrePaymentMethodDto[]>) {
      const offlineMethods = action.payload.filter((method) => !method.isOnline);
      state.offlineMethods = offlineMethods;
      state.hasOfflineMethods = offlineMethods.some((method) => !method.isOnline) || false;
      state.hasOnlineMethods = action.payload.some((method) => method.isOnline) || false;
    },
    clearPaymentDetails(state) {
      state.transactions = initialState.transactions;
      state.transactionsIol = initialState.transactionsIol;
      state.unpaidTransactions = initialState.unpaidTransactions;
      state.paidTransactions = initialState.paidTransactions;
      state.transactionDetails = initialState.transactionDetails;
      state.hasOnlineMethods = initialState.hasOnlineMethods;
      state.hasOfflineMethods = initialState.hasOfflineMethods;
      state.offlineMethods = initialState.offlineMethods;
    },
    setErrors(state, action: PayloadAction<ApiErrorsList | undefined>) {
      state.onlinePaymentError = converters.tErrorMessage(action.payload);
    },
  },
  extraReducers: (builder) => {
    /**
     * Get all transactions based on registration
     */
    apiExtraReducer(builder, getTransactions, 'transactions');
    /**
     * Get transactions IOL
     */
    apiExtraReducer<PaymentsState, TransactionDto[], unknown, ApiErrorsList>(
      builder,
      getTransactionsIol,
      'transactionsIol'
    );
    /**
     * Get transaction's details
     */
    apiExtraReducer(builder, getTransactionsDetails, 'transactionDetails');
  },
});

export default slice;
