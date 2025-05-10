import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  registrationNotificationsClient,
  NotificationType,
  registrationAllowedActionsClient,
  RegistrationAllowedActionsDto,
  registrationClient,
  registrationDocumentsClient,
  RegistrationDocumentsIdentityDocumentDto,
  RegistrationDto,
  registrationCancellationRequestsClient,
} from 'ors-api/iol';
import { ApiErrorsList, extractApiErrors } from 'ors-ui';

export const sliceName = 'registrationIol';

/**
 *  Registration - Get
 */
export const getRegistrationIol = createAsyncThunk<
  RegistrationDto,
  number,
  { rejectValue: ApiErrorsList }
>(sliceName + '/getRegistration', async (regId, { rejectWithValue }) => {
  try {
    const response = await registrationClient.get(regId);
    return response.data;
  } catch (error) {
    const err = extractApiErrors(error);
    return rejectWithValue(err);
  }
});

/**
 *  Registration - Get Allowed Actions
 */
export const getAllowedActions = createAsyncThunk<
  RegistrationAllowedActionsDto,
  number,
  { rejectValue: ApiErrorsList }
>(sliceName + '/getAllowedActions', async (regId, { rejectWithValue }) => {
  try {
    const response = await registrationAllowedActionsClient.getAllowedRegistrationActions(regId);
    return response.data;
  } catch (error) {
    const err = extractApiErrors(error);
    return rejectWithValue(err);
  }
});

/**
 *  Registration - Get ID Document with files
 */
export const getRegistrationIdDocument = createAsyncThunk<
  RegistrationDocumentsIdentityDocumentDto,
  number,
  { rejectValue: ApiErrorsList }
>(sliceName + '/getRegistrationIdDocument', async (regId, { rejectWithValue }) => {
  try {
    const response = await registrationDocumentsClient.getIdentityDocument(regId);
    return response.data;
  } catch (error) {
    const err = extractApiErrors(error);
    return rejectWithValue(err);
  }
});

/**
 *  Registration - Cancel
 */
interface CancelRequest {
  registrationId: number;
  cancellationReasonId: number;
  additionalInformation?: string;
  files?: File[];
  bankAccountHolderName?: string;
  bankName?: string;
  bankAccountNumber?: string;
  bankBranchCountry?: string;
  bankBranchAddressLine1?: string;
  bankBranchAddressLine2?: string;
  bankBranchAddressLine3?: string;
  bankBranchPostCode?: string;
  bankBranchCity?: string;
  iBanNumber?: string;
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

export const cancelRegistrationIol = createAsyncThunk<
  any,
  CancelRequest,
  { rejectValue: ApiErrorsList }
>(sliceName + '/cancelRegistrationIol', async (req, { rejectWithValue }) => {
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
      req.bankBranchCountry,
      req.iBanNumber,
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
 *  Registration - Transfer
 */

interface TransferReq {
  registrationId: number;
  candidateStatement: string;
}

export const transferRegistrationIol = createAsyncThunk<
  any,
  TransferReq,
  { rejectValue: ApiErrorsList }
>(sliceName + '/transferRegistrationIol', async (req, { rejectWithValue }) => {
  try {
    const response = await registrationClient.createTransferRequest(
      req.registrationId,
      JSON.stringify(req.candidateStatement),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    return response.data;
  } catch (error) {
    const err = extractApiErrors(error);
    return rejectWithValue(err);
  }
});

/**
 * Get UpdateBar notifications
 */

export const getNotificationsIol = createAsyncThunk<
  NotificationType[],
  number,
  { rejectValue: ApiErrorsList }
>(sliceName + '/getNotificationsIol', async (regId, { rejectWithValue }) => {
  try {
    const response = await registrationNotificationsClient.getNotifications(regId);
    return response.data;
  } catch (error) {
    const err = extractApiErrors(error);
    return rejectWithValue(err);
  }
});

/**
 * Hide UpdateBar notification
 */

interface HideNotificationReq {
  registrationId: number;
  notificationType: NotificationType;
}
export const hideNotificationIol = createAsyncThunk<
  void,
  HideNotificationReq,
  { rejectValue: ApiErrorsList }
>(sliceName + '/hideNotificationIol', async (req, { rejectWithValue }) => {
  try {
    const response = await registrationNotificationsClient.markNotificationAsSeen(
      req.registrationId,
      req.notificationType
    );
    return response.data;
  } catch (error) {
    const err = extractApiErrors(error);
    return rejectWithValue(err);
  }
});
