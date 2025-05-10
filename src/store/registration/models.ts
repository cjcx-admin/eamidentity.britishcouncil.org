import { NotificationType } from 'ors-api/ors2';
import {
  IELTSProducts,
  RegistrationDocumentsIdentityDocumentDto,
  RegistrationDto as RegistrationDtoIol,
} from 'ors-api/iol';
import {
  CancellationReasonType,
  OnlinePaymentStartedDto,
  ProductsInCentre,
  RegistrationDto as RegistrationDtoMod,
} from 'ors-api/mod';
import { UnifiedFile } from 'ors-utils';
import { ApiData, ApiErrorsList, ErrorMessages } from 'ors-ui';

import { ExamMode, ExamType } from 'common/models';
import { DatesRange } from 'store/osrBooking';

export enum ChangeState {
  'IDLE',
  'PENDING',
  'FAILED',
  'SUCCESS',
}

export interface SelfServiceTransfer {
  selectedDistrictIds?: number[];
  datesRange?: DatesRange;
  showAllDates?: boolean;
}

export interface RegistrationState {
  processing: boolean;
  processingDocs: boolean;
  error?: ErrorMessages;
  speakingTransferError?: ApiErrorsList;
  cancelState: ChangeState;
  transferState: ChangeState;
  speakingTransferState: ChangeState;
  payOnlineState: ChangeState;
  payOnlineResponse?: OnlinePaymentStartedDto;
  isOnlinePaymentInProgress: boolean;
  lastBookedExam?: BasicExam;
  registrationInCentre?: RegistrationDtoMod;
  ttRegistrationIol?: RegistrationDtoIol;
  idFiles?: UnifiedFile[];
  medicalFiles?: UnifiedFile[];
  idDocIol?: RegistrationDocumentsIdentityDocumentDto;
  paymentProofFiles?: UnifiedFile[];
  cancellationReasons: ApiData<CancellationReasonType[]>;
  notifications: ApiData<NotificationType[]>;
  regNotFound?: boolean;
  allowedActions: ApiData<AllowedActions>;
  launchLiveChat: boolean;
}

export interface AllowedActions {
  canAddEdeliveryReceivingOrgs: boolean;
  canAddPostalReceivingOrgs: boolean;
  canAddReceivingOrgs: boolean;
  canEditTestTaker: boolean;
  canEditIdDoc: boolean;
  canRequestStandardEor: boolean;
  canRequestOsr: boolean;
  canRequestSpeakingTransfer: boolean;
  canRequestOfflineTransfer: boolean;
  canRequestTransfer: boolean;
  canRequestCancellation: boolean;
  isExceptionalCancellationRequestRequired: boolean;
  canGeneratePaymentConfirmationReceipt: boolean;
  canUploadIdentityDocument: boolean;
}

export interface BasicExam {
  id: number;
  module: ExamType;
  countryCode: string;
  mode: ExamMode;
  productId: IELTSProducts | ProductsInCentre;
}

export enum SlotErrorCodes {
  notAvailable = 'IBookingProvider.FreeSpeakingSlotIsNotFound',
}
