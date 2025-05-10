import { ApiErrorDetailed, extractApiError } from '@britishcouncil/react-common';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  CancellationReasonType,
  cancellationRequestsClient,
  registrationAllowedActionsClient,
  RegistrationAllowedActionsDto,
  registrationCancellationRequestsClient,
} from 'ors-api/mod';
import { ApiErrorsList, extractApiErrors } from 'ors-ui';

export const sliceName = 'registrationMod';

/**
 *  Cancellation reason types
 */
export const getCancellationReasonTypesMod = createAsyncThunk<
  CancellationReasonType[],
  void,
  { rejectValue: ApiErrorDetailed }
>(sliceName + '/getCancellationReasonTypesMod', async (_, { rejectWithValue }) => {
  try {
    const response = await cancellationRequestsClient.getCancellationReasons();
    return response.data;
  } catch (error) {
    const err = extractApiError(error);
    return rejectWithValue(err);
  }
});

/**
 *  Registration - Cancel
 */
interface CancelRequest {
  registrationId: number;
  files?: File[];
  cancellationReasonId: number;
  additionalInformation?: string;
  bankAccountHolderName?: string;
  bankName?: string;
  bankAccountNumber?: string;
  bankBranchCountry?: string;
  bankBranchAddressLine1?: string;
  bankBranchAddressLine2?: string;
  bankBranchAddressLine3?: string;
  bankBranchPostCode?: string;
  bankBranchCity?: string;
  ibanNumber?: string;
  sortCode?: string;
  swiftCode?: string;
  bankAccountHolderEmail?: string;
  bankAccountHolderAddressLine1?: string;
  bankAccountHolderAddressLine2?: string;
  bankAccountHolderAddressLine3?: string;
  bankAccountHolderPostCode?: string;
  bankAccountHolderCity?: string;
  bankAccountHolderCountryOfResidence?: string;
}

export const cancelRegistrationMod = createAsyncThunk<
  any,
  CancelRequest,
  { rejectValue: ApiErrorsList }
>(sliceName + '/cancelRegistrationMod', async (req, { rejectWithValue }) => {
  try {
    const response = await registrationCancellationRequestsClient.createCancellationRequest(
      req.registrationId,
      req.files,
      req.cancellationReasonId,
      req.additionalInformation,
      req.bankAccountHolderName,
      req.bankName,
      req.bankAccountNumber,
      req.bankBranchCountry,
      req.bankBranchAddressLine1,
      req.bankBranchAddressLine2,
      req.bankBranchAddressLine3,
      req.bankBranchPostCode,
      req.bankBranchCity,
      req.ibanNumber,
      req.sortCode,
      req.swiftCode,
      req.bankAccountHolderEmail,
      req.bankAccountHolderAddressLine1,
      req.bankAccountHolderAddressLine2,
      req.bankAccountHolderAddressLine3,
      req.bankAccountHolderPostCode,
      req.bankAccountHolderCity,
      req.bankAccountHolderCountryOfResidence
    );
    return response.data;
  } catch (error) {
    const err = extractApiErrors(error);
    return rejectWithValue(err);
  }
});

/**
 *  Registration - Get Allowed Actions
 */
export const getAllowedActionsMod = createAsyncThunk<
  RegistrationAllowedActionsDto,
  number,
  { rejectValue: ApiErrorDetailed }
>(sliceName + '/getAllowedActionsMod', async (regId, { rejectWithValue }) => {
  try {
    const response = await registrationAllowedActionsClient.getAllowedRegistrationActions(regId);
    return response.data;
  } catch (error) {
    const err = extractApiError(error);
    return rejectWithValue(err);
  }
});
