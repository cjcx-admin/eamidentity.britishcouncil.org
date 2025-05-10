import { ApiErrorDetailed, extractApiError } from '@britishcouncil/react-common';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { paymentClient, TransactionPaymentDetails } from 'ors-api/ors2';
import {
  paymentClient as paymentClientUkvi,
  TransactionPaymentDetails as TransactionPaymentDetailsUkvi,
} from 'ors-api/ukvi';
import { registrationClient, TransactionDto } from 'ors-api/iol';
import { ApiErrorsList, extractApiErrors } from 'ors-ui';

const sliceName = 'payments';

export const getTransactions = createAsyncThunk<
  TransactionPaymentDetails[],
  number,
  { rejectValue: ApiErrorDetailed }
>(sliceName + '/getTransactions', async (registrationId, { rejectWithValue }) => {
  try {
    const response = await paymentClient.getTransactionsPaymentDetailsForRegistration(
      registrationId
    );
    return response.data;
  } catch (error) {
    const err = extractApiError(error);
    return rejectWithValue(err);
  }
});

interface TransDetailsReq {
  registrationId: number;
  transactionId: number;
}
export const getTransactionsDetails = createAsyncThunk<
  TransactionPaymentDetails,
  TransDetailsReq,
  { rejectValue: ApiErrorDetailed }
>(sliceName + '/getTransactionsDetails', async (req, { rejectWithValue }) => {
  try {
    const response = await paymentClient.getTransactionsPaymentDetails(
      req.registrationId,
      req.transactionId
    );
    return response.data;
  } catch (error) {
    const err = extractApiError(error);
    return rejectWithValue(err);
  }
});

/**
 *  UKVI
 */

export const getTransactionsUkvi = createAsyncThunk<
  TransactionPaymentDetailsUkvi[],
  number,
  { rejectValue: ApiErrorDetailed }
>(sliceName + '/getTransactions', async (registrationId, { rejectWithValue }) => {
  try {
    const response = await paymentClientUkvi.getTransactionsPaymentDetailsForRegistration(
      registrationId
    );
    return response.data;
  } catch (error) {
    const err = extractApiError(error);
    return rejectWithValue(err);
  }
});
export const getTransactionsDetailsUkvi = createAsyncThunk<
  TransactionPaymentDetailsUkvi,
  TransDetailsReq,
  { rejectValue: ApiErrorDetailed }
>(sliceName + '/getTransactionsDetails', async (req, { rejectWithValue }) => {
  try {
    const response = await paymentClientUkvi.getTransactionsPaymentDetails(
      req.registrationId,
      req.transactionId
    );
    return response.data;
  } catch (error) {
    const err = extractApiError(error);
    return rejectWithValue(err);
  }
});

/**
 *  IOL
 */

export const getTransactionsIol = createAsyncThunk<
  TransactionDto[],
  number,
  { rejectValue: ApiErrorsList }
>(sliceName + '/getTransactionsIol', async (registrationId, { rejectWithValue }) => {
  try {
    const response = await registrationClient.getRegistrationTransactions(registrationId);
    return response.data;
  } catch (error) {
    const err = extractApiErrors(error);
    return rejectWithValue(err);
  }
});
