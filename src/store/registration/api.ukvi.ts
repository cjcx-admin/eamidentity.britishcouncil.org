import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  registrationDocumentClient,
  RegistrationDocumentFileModel,
  registrationNotificationClient,
  NotificationType,
} from 'ors-api/ukvi';
import { extractApiErrors, ApiErrorsList } from 'ors-ui';

export const sliceName = 'registrationUkvi';

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

/**
 *  Registration - Get ID Files
 */
export const getRegistrationIdFilesUkvi = createAsyncThunk<
  RegistrationDocumentFileModel[],
  number,
  { rejectValue: ApiErrorsList }
>(sliceName + '/getRegistrationIdFilesUkvi', async (regId, { rejectWithValue }) => {
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
export const getRegistrationMedicalFilesUkvi = createAsyncThunk<
  RegistrationDocumentFileModel[],
  number,
  { rejectValue: ApiErrorsList }
>(sliceName + '/getRegistrationMedicalFilesUkvi', async (regId, { rejectWithValue }) => {
  try {
    const response = await registrationDocumentClient.getMedicalDocumentsFiles(regId);
    return response.data;
  } catch (error) {
    const err = extractApiErrors(error);
    return rejectWithValue(err);
  }
});

/**
 *  Registration - Get Payment Proof Files
 */
export const getProofOfPaymentsDocumentsUkvi = createAsyncThunk<
  RegistrationDocumentFileModel[],
  number,
  { rejectValue: ApiErrorsList }
>(sliceName + '/getProofOfPaymentsDocumentsUkvi', async (regId, { rejectWithValue }) => {
  try {
    const response = await registrationDocumentClient.getProofOfPaymentDocumentsFiles(regId);
    return response.data;
  } catch (error) {
    const err = extractApiErrors(error);
    return rejectWithValue(err);
  }
});
