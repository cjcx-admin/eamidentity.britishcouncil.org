import { createAsyncThunk } from '@reduxjs/toolkit';
import { SubmitSpeakingTransferRequest, registrationTransferRequestClient } from 'ors-api/mod';
import {
  IwasOperationResult,
  RegistrationDocumentFileModel,
  registrationTransferClient,
  SpeakingTransfer,
  registrationDocumentClient,
  registrationNotificationClient,
  NotificationType,
} from 'ors-api/ors2';
import { ApiErrorsList, extractApiErrors } from 'ors-ui';

export const sliceName = 'registration';

/**
 *  Registration - Get ID Files
 */
export const getRegistrationIdFiles = createAsyncThunk<
  RegistrationDocumentFileModel[],
  number,
  { rejectValue: ApiErrorsList }
>(sliceName + '/getRegistrationIdFiles', async (regId, { rejectWithValue }) => {
  try {
    const response = await registrationDocumentClient.getIdentityDocumentsFiles(regId);
    return response.data;
  } catch (error) {
    const err = extractApiErrors(error);
    return rejectWithValue(err);
  }
});

/**
 *  Registration - Get Medical Evidence Files
 */
export const getRegistrationMedicalFiles = createAsyncThunk<
  RegistrationDocumentFileModel[],
  number,
  { rejectValue: ApiErrorsList }
>(sliceName + '/getRegistrationMedicalFiles', async (regId, { rejectWithValue }) => {
  try {
    const response = await registrationDocumentClient.getMedicalEvidenceDocumentsFiles(regId);
    return response.data;
  } catch (error) {
    const err = extractApiErrors(error);
    return rejectWithValue(err);
  }
});

/**
 *  Registration - Get Payment Proof Files
 */
export const getProofOfPaymentsDocuments = createAsyncThunk<
  RegistrationDocumentFileModel[],
  number,
  { rejectValue: ApiErrorsList }
>(sliceName + '/getProofOfPaymentsDocuments', async (regId, { rejectWithValue }) => {
  try {
    const response = await registrationDocumentClient.getProofOfPaymentDocumentsFiles(regId);
    return response.data;
  } catch (error) {
    const err = extractApiErrors(error);
    return rejectWithValue(err);
  }
});

/**
 *  SPEAKING - Transfer
 */

type TransferSpeakingReq<TransferType> = {
  regId: number;
  speakingTransfer: TransferType;
};

export const transferSpeaking = createAsyncThunk<
  IwasOperationResult,
  TransferSpeakingReq<SpeakingTransfer>,
  { rejectValue: ApiErrorsList }
>(sliceName + '/transferSpeaking', async (req, { rejectWithValue }) => {
  try {
    const response = await registrationTransferClient.transferSpeaking(
      req.regId,
      req.speakingTransfer
    );
    return response.data;
  } catch (error) {
    const err = extractApiErrors(error);
    return rejectWithValue(err);
  }
});
export const transferCmdsSpeaking = createAsyncThunk<
  number,
  TransferSpeakingReq<SubmitSpeakingTransferRequest>,
  { rejectValue: ApiErrorsList }
>(sliceName + '/transferSpeaking', async (req, { rejectWithValue }) => {
  try {
    const response = await registrationTransferRequestClient.submitSpeakingTransferRequest(
      req.regId,
      req.speakingTransfer
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

export const getNotifications = createAsyncThunk<
  NotificationType[],
  number,
  { rejectValue: ApiErrorsList }
>(sliceName + '/getNotifications', async (regId, { rejectWithValue }) => {
  try {
    const response = await registrationNotificationClient.getNotifications(regId);
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
export const hideNotification = createAsyncThunk<
  void,
  HideNotificationReq,
  { rejectValue: ApiErrorsList }
>(sliceName + '/hideNotification', async (req, { rejectWithValue }) => {
  try {
    const response = await registrationNotificationClient.markNotificationsAsSeen(
      req.registrationId,
      req.notificationType
    );
    return response.data;
  } catch (error) {
    const err = extractApiErrors(error);
    return rejectWithValue(err);
  }
});
