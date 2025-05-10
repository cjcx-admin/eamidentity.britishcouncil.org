import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegistrationDocumentsIdentityDocumentDto } from 'ors-api/iol';
import { RegistrationDto as RegistrationDtoMod } from 'ors-api/mod';
import { ApiErrorsList, initApiData } from 'ors-ui';

import { converters } from 'common';
import { globalLogOut } from '../common';
import { apiExtraReducer } from '../_common/apiExtraReducer';
import { BasicExam, ChangeState, RegistrationState } from './models';

import {
  sliceName,
  transferSpeaking,
  getRegistrationIdFiles,
  getProofOfPaymentsDocuments,
  getRegistrationMedicalFiles,
  getNotifications,
} from './api';
import {
  cancelRegistrationIol,
  getAllowedActions,
  getNotificationsIol,
  getRegistrationIdDocument,
  getRegistrationIol,
  transferRegistrationIol,
} from './api.iol';
import {
  getProofOfPaymentsDocumentsUkvi,
  getRegistrationIdFilesUkvi,
  getRegistrationMedicalFilesUkvi,
  getNotifications as getNotificationsUkvi,
} from './api.ukvi';
import {
  cancelRegistrationMod,
  getAllowedActionsMod,
  getCancellationReasonTypesMod,
} from './api.mod';

export const initialState: RegistrationState = {
  notifications: initApiData,
  processing: false,
  processingDocs: false,
  error: undefined,
  speakingTransferError: undefined,
  cancelState: ChangeState.IDLE,
  transferState: ChangeState.IDLE,
  speakingTransferState: ChangeState.IDLE,
  payOnlineState: ChangeState.IDLE,
  isOnlinePaymentInProgress: false,
  payOnlineResponse: undefined,
  registrationInCentre: undefined,
  ttRegistrationIol: undefined,
  idFiles: undefined,
  idDocIol: undefined,
  medicalFiles: undefined,
  paymentProofFiles: undefined,
  cancellationReasons: initApiData,
  allowedActions: initApiData,
  launchLiveChat: false,
};

const slice = createSlice({
  name: sliceName,
  initialState: initialState,
  reducers: {
    clearCancelState(state) {
      state.cancelState = initialState.cancelState;
    },
    clearTransferState(state) {
      state.transferState = initialState.transferState;
    },
    clearSpeakingState(state) {
      state.speakingTransferState = initialState.transferState;
    },
    setPayOnlineState(state, action: PayloadAction<ChangeState>) {
      state.payOnlineState = action.payload;
    },
    clearPayOnlineState(state) {
      state.payOnlineState = initialState.transferState;
    },
    setIsOnlinePaymentInProgress(state, action: PayloadAction<boolean>) {
      state.isOnlinePaymentInProgress = action.payload;
    },
    setErrors(state, action: PayloadAction<ApiErrorsList | undefined>) {
      state.error = converters.tErrorMessage(action.payload);
    },
    clearErrors(state) {
      state.error = undefined;
      state.speakingTransferError = undefined;
    },
    setLastExam(state, action: PayloadAction<BasicExam | undefined>) {
      state.lastBookedExam = action.payload;
    },
    setRegistrationInCentre(
      state,
      action: PayloadAction<{
        reg?: RegistrationDtoMod;
        processing: boolean;
        regNotFound: boolean;
      }>
    ) {
      state.registrationInCentre = action.payload.reg;
      state.processing = action.payload.processing;
      state.regNotFound = action.payload.regNotFound;
    },
    setLunchLiveChat(state, action: PayloadAction<boolean>) {
      state.launchLiveChat = action.payload;
    },
    setRegistrationIdDocIol(
      state,
      action: PayloadAction<RegistrationDocumentsIdentityDocumentDto | undefined>
    ) {
      state.idDocIol = action.payload;
      state.idFiles = converters.toUnifiedFiles().fromIolIdDoc(action.payload);
    },
    clearRegDetails(state) {
      state.ttRegistrationIol = initialState.ttRegistrationIol;
      state.registrationInCentre = initialState.registrationInCentre;
      state.idFiles = initialState.idFiles;
      state.idDocIol = initialState.idDocIol;
      state.medicalFiles = initialState.medicalFiles;
      state.paymentProofFiles = initialState.paymentProofFiles;
      state.payOnlineResponse = initialState.payOnlineResponse;
      state.notifications = initialState.notifications;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(globalLogOut, () => initialState);

    /* Get registration IOL */
    builder.addCase(getRegistrationIol.pending, (state) => {
      state.regNotFound = false;
      state.error = undefined;
      state.processing = true;
    });
    builder.addCase(getRegistrationIol.fulfilled, (state, action) => {
      state.ttRegistrationIol = action.payload;
      state.processing = false;
    });
    builder.addCase(
      getRegistrationIol.rejected,
      (state, action: PayloadAction<ApiErrorsList | undefined>) => {
        state.error = converters.tErrorMessage(action.payload);
        state.processing = false;
        state.regNotFound = true;
      }
    );

    /* Get allowed actions IOL */
    apiExtraReducer(builder, getAllowedActions, 'allowedActions', {
      transform: (data) => ({
        canAddReceivingOrgs: data.canAddReceivingOrganisation,
        canEditTestTaker: data.canEditTestTaker,
        canEditIdDoc: !!data.identityDocument?.canEdit,
        canRequestStandardEor: !!data.canRequestStandardEnquiryOnResults,
        canRequestOfflineTransfer: data.canRequestOfflineTransfer,
        canRequestCancellation: !!data.canRequestCancellation,
        isExceptionalCancellationRequestRequired: !!data.isExceptionalCancellationRequestRequired,
      }),
      dataWhenError: {
        canAddReceivingOrganisation: false,
        canEditTestTaker: false,
        canRequestStandardEnquiryOnResults: false,
        canRequestOfflineTransfer: false,
        identityDocument: { canEdit: false },
        canRequestCancellation: false,
        isExceptionalCancellationRequestRequired: false,
      },
    });

    /* Get allowed actions MOD */
    apiExtraReducer(builder, getAllowedActionsMod, 'allowedActions', {
      transform: (data) => ({
        canEditTestTaker: data.canEditTestTaker,
        canAddEdeliveryReceivingOrgs: data.cmdsOnly?.canAddEdeliveryReceivingOrganisation,
        canAddPostalReceivingOrgs: data.cmdsOnly?.canAddPostalReceivingOrganisation,
        canRequestStandardEor: data.cmdsOnly?.canRequestStandardEnquiryOnResults,
        canRequestOsr: data.cmdsOnly?.canRequestOneSkillRetake,
        canRequestSpeakingTransfer: data.canRequestSpeakingTransfer,
        canRequestOfflineTransfer: data.canRequestOfflineTransfer,
        canRequestCancellation: !!data.canRequestCancellation,
        canRequestTransfer: data.canRequestTransfer,
        isExceptionalCancellationRequestRequired: !!data.isExceptionalCancellationRequestRequired,
        canGeneratePaymentConfirmationReceipt: !!data.canGeneratePaymentConfirmationReceipt,
        canUploadIdentityDocument: !!data.canUploadIdentityDocument,
      }),
      dataWhenError: {
        canEditTestTaker: false,
        canRequestSpeakingTransfer: false,
        canRequestOfflineTransfer: false,
        canRequestCancellation: false,
        isExceptionalCancellationRequestRequired: false,
        canRequestTransfer: false,
        canGeneratePaymentConfirmationReceipt: false,
        canUploadIdentityDocument: false,
        cmdsOnly: {
          canAddEdeliveryReceivingOrganisation: false,
          canAddPostalReceivingOrganisation: false,
          canRequestStandardEnquiryOnResults: false,
          canRequestOneSkillRetake: false,
        },
      },
    });

    /* Get identity document IOL */
    builder.addCase(getRegistrationIdDocument.pending, (state) => {
      state.error = undefined;
      state.processing = true;
      state.processingDocs = true;
    });
    builder.addCase(getRegistrationIdDocument.fulfilled, (state, action) => {
      state.processing = false;
      state.processingDocs = false;
      state.idDocIol = action.payload;
      state.idFiles = converters.toUnifiedFiles().fromIolIdDoc(action.payload);
    });
    builder.addCase(
      getRegistrationIdDocument.rejected,
      (state, action: PayloadAction<ApiErrorsList | undefined>) => {
        state.processing = false;
        state.processingDocs = false;
        state.error = converters.tErrorMessage(action.payload);
      }
    );

    /* Cancel registration */
    builder.addCase(cancelRegistrationMod.pending, (state) => {
      state.error = undefined;
      state.processing = true;
      state.cancelState = ChangeState.PENDING;
    });
    builder.addCase(cancelRegistrationMod.fulfilled, (state, action) => {
      state.processing = false;
      state.cancelState = ChangeState.SUCCESS;
    });
    builder.addCase(
      cancelRegistrationMod.rejected,
      (state, action: PayloadAction<ApiErrorsList | undefined>) => {
        state.error = converters.tErrorMessage(action.payload);
        state.processing = false;
        state.cancelState = ChangeState.FAILED;
      }
    );

    /* Cancel registration IOL */
    builder.addCase(cancelRegistrationIol.pending, (state) => {
      state.error = undefined;
      state.processing = true;
      state.cancelState = ChangeState.PENDING;
    });
    builder.addCase(cancelRegistrationIol.fulfilled, (state, action) => {
      state.processing = false;
      state.cancelState = ChangeState.SUCCESS;
    });
    builder.addCase(
      cancelRegistrationIol.rejected,
      (state, action: PayloadAction<ApiErrorsList | undefined>) => {
        state.error = converters.tErrorMessage(action.payload);
        state.processing = false;
        state.cancelState = ChangeState.FAILED;
      }
    );

    /* Transfer registration IOL */
    builder.addCase(transferRegistrationIol.pending, (state) => {
      state.error = undefined;
      state.processing = true;
      state.transferState = ChangeState.PENDING;
    });
    builder.addCase(transferRegistrationIol.fulfilled, (state, action) => {
      state.processing = false;
      state.transferState = ChangeState.SUCCESS;
    });
    builder.addCase(
      transferRegistrationIol.rejected,
      (state, action: PayloadAction<ApiErrorsList | undefined>) => {
        state.error = converters.tErrorMessage(action.payload);
        state.processing = false;
        state.transferState = ChangeState.FAILED;
      }
    );

    /* Transfer speaking slot */
    builder.addCase(transferSpeaking.pending, (state) => {
      state.error = undefined;
      state.processing = true;
      state.speakingTransferState = ChangeState.PENDING;
    });
    builder.addCase(transferSpeaking.fulfilled, (state, action) => {
      state.processing = false;
      state.speakingTransferState = ChangeState.SUCCESS;
    });
    builder.addCase(
      transferSpeaking.rejected,
      (state, action: PayloadAction<ApiErrorsList | undefined>) => {
        state.error = converters.tErrorMessage(action.payload);
        state.speakingTransferError = action.payload;
        state.processing = false;
        state.speakingTransferState = ChangeState.FAILED;
      }
    );

    /* Get registration ID files */
    builder.addCase(getRegistrationIdFiles.pending, (state) => {
      state.error = undefined;
      state.processing = true;
    });
    builder.addCase(getRegistrationIdFiles.fulfilled, (state, action) => {
      state.processing = false;
      state.idFiles = converters.toUnifiedFiles().fromIcFiles(action.payload);
    });
    builder.addCase(
      getRegistrationIdFiles.rejected,
      (state, action: PayloadAction<ApiErrorsList | undefined>) => {
        state.error = converters.tErrorMessage(action.payload);
        state.processing = false;
      }
    );

    /* Get registration ID files UKVI */
    builder.addCase(getRegistrationIdFilesUkvi.pending, (state) => {
      state.error = undefined;
      state.processing = true;
    });
    builder.addCase(getRegistrationIdFilesUkvi.fulfilled, (state, action) => {
      state.processing = false;
      state.idFiles = converters.toUnifiedFiles().fromIcFiles(action.payload);
    });
    builder.addCase(
      getRegistrationIdFilesUkvi.rejected,
      (state, action: PayloadAction<ApiErrorsList | undefined>) => {
        state.error = converters.tErrorMessage(action.payload);
        state.processing = false;
      }
    );

    /* Get registration Medical Evidence files */
    builder.addCase(getRegistrationMedicalFiles.pending, (state) => {
      state.error = undefined;
      state.processing = true;
    });
    builder.addCase(getRegistrationMedicalFiles.fulfilled, (state, action) => {
      state.processing = false;
      state.medicalFiles = converters.toUnifiedFiles().fromIcFiles(action.payload);
    });
    builder.addCase(
      getRegistrationMedicalFiles.rejected,
      (state, action: PayloadAction<ApiErrorsList | undefined>) => {
        state.error = converters.tErrorMessage(action.payload);
        state.processing = false;
      }
    );

    /* Get registration Medical Evidence files UKVI */
    builder.addCase(getRegistrationMedicalFilesUkvi.pending, (state) => {
      state.error = undefined;
      state.processing = true;
    });
    builder.addCase(getRegistrationMedicalFilesUkvi.fulfilled, (state, action) => {
      state.processing = false;
      state.medicalFiles = converters.toUnifiedFiles().fromIcFiles(action.payload);
    });
    builder.addCase(
      getRegistrationMedicalFilesUkvi.rejected,
      (state, action: PayloadAction<ApiErrorsList | undefined>) => {
        state.error = converters.tErrorMessage(action.payload);
        state.processing = false;
      }
    );

    /* Get registration payment proof files */
    builder.addCase(getProofOfPaymentsDocuments.pending, (state) => {
      state.error = undefined;
      state.processing = true;
    });
    builder.addCase(getProofOfPaymentsDocuments.fulfilled, (state, action) => {
      state.processing = false;
      state.paymentProofFiles = converters.toUnifiedFiles().fromIcFiles(action.payload);
    });
    builder.addCase(
      getProofOfPaymentsDocuments.rejected,
      (state, action: PayloadAction<ApiErrorsList | undefined>) => {
        state.error = converters.tErrorMessage(action.payload);
        state.processing = false;
      }
    );

    /* Get registration payment proof files UKVI */
    builder.addCase(getProofOfPaymentsDocumentsUkvi.pending, (state) => {
      state.error = undefined;
      state.processing = true;
    });
    builder.addCase(getProofOfPaymentsDocumentsUkvi.fulfilled, (state, action) => {
      state.processing = false;
      state.paymentProofFiles = converters.toUnifiedFiles().fromIcFiles(action.payload);
    });
    builder.addCase(
      getProofOfPaymentsDocumentsUkvi.rejected,
      (state, action: PayloadAction<ApiErrorsList | undefined>) => {
        state.error = converters.tErrorMessage(action.payload);
        state.processing = false;
      }
    );

    apiExtraReducer(builder, getNotifications, 'notifications');
    apiExtraReducer(builder, getNotificationsIol, 'notifications');
    apiExtraReducer(builder, getNotificationsUkvi, 'notifications');
    apiExtraReducer(builder, getCancellationReasonTypesMod, 'cancellationReasons');
  },
});

export default slice;
