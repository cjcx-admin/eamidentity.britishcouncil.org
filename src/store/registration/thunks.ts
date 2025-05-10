import { userFriendlyTime } from '@britishcouncil/react-solas-ors3';
import { NotificationType, SpeakingTransfer } from 'ors-api/ors2';
import {
  AwardingBodySystem,
  IGetAvailableSpeakingSlotsFromRegistrationTransferRequestServiceQuery,
  RegistrationTransferRequestAvailableSpeakingSlotDto,
  SubmitSpeakingTransferRequest,
} from 'ors-api/mod';

import { transferSpeaking, transferCmdsSpeaking } from './api';
import { AppThunk } from '..';
import { registration } from '.';
import { speaking } from '../speaking';
import { persistAuth } from '../authSlice';
import { OidcContext } from '@britishcouncil/react-oidc-auth';
import { useDispatch } from 'core';
import { useLocale } from 'common';

type TransferData<T extends boolean> = T extends true
  ? SubmitSpeakingTransferRequest
  : SpeakingTransfer;

const getSpeakingTransferData = <T extends boolean = false>(
  selectedSlot: RegistrationTransferRequestAvailableSpeakingSlotDto,
  isCMDS?: T
): TransferData<T> =>
  <TransferData<T>>{
    speakingFormat: selectedSlot.speakingFormat,
    speakingVenueId: selectedSlot.venueId,
    speakingStartTime: userFriendlyTime(selectedSlot.startTime),
    speakingEndTime: userFriendlyTime(selectedSlot.endTime),
    ...(isCMDS ? { speakingDate: selectedSlot.date } : { speakingExamDate: selectedSlot.date }),
  };

type SpeakingTransferReq = {
  slotReq: {
    regId: number;
    query: IGetAvailableSpeakingSlotsFromRegistrationTransferRequestServiceQuery;
  };
  selectedSlot: RegistrationTransferRequestAvailableSpeakingSlotDto;
};

export const handleSpeakingTransfer =
  ({ selectedSlot, slotReq }: SpeakingTransferReq): AppThunk =>
  async (dispatch, getState) => {
    const canTransfer = getState().registration.allowedActions?.data?.canRequestSpeakingTransfer;
    const awardingBodySystem = getState().registration.registrationInCentre?.awardingBodySystem;
    const isCMDS = awardingBodySystem === AwardingBodySystem.CMDS;

    if (canTransfer) {
      dispatch(speaking.actions.setProcessing(true));

      const transfer = isCMDS
        ? () =>
            dispatch(
              transferCmdsSpeaking({
                regId: slotReq.regId,
                speakingTransfer: getSpeakingTransferData(selectedSlot, true),
              })
            )
        : () =>
            dispatch(
              transferSpeaking({
                regId: slotReq.regId,
                speakingTransfer: getSpeakingTransferData(selectedSlot),
              })
            );

      await Promise.all([transfer(), dispatch(speaking.api.getAvailableSlots(slotReq))]);
      /** Hiding notification for speaking transfer done via self-service */
      /** BE doesn't add not needed notifications for CMDS transfers */
      !isCMDS &&
        (await dispatch(
          registration.api.hideNotification({
            registrationId: slotReq.regId,
            notificationType: NotificationType.Transfer,
          })
        ));
      dispatch(speaking.actions.setProcessing(false));
    }
  };

export const loadRegIdDocument =
  (regId: string): AppThunk =>
  async (dispatch) => {
    const registrationId = Number(regId || '');

    if (!registrationId || isNaN(registrationId)) {
      throw new Error(`Incorrect registration ID was provided`);
    }

    dispatch(registration.api.getRegistrationIdFiles(registrationId));
  };

/**
 * Manually renew IS4 token to give user 10 minutes to finish payment.
 * If user finish payment in more than 10 minutes, he will be logged out and redirected to start page.
 */
export const useRenewIS4Token = () => {
  const { signinSilent, user } = OidcContext.useAuth();
  const dispatch = useDispatch();
  const { locale } = useLocale();

  const renewToken = async () => {
    try {
      const extraQueryParams = {
        ui_locales: locale,
      };

      const userData = await signinSilent({
        extraQueryParams,
      });

      userData && user && (await dispatch(persistAuth(user)));
    } catch (e) {}
  };

  return { renewToken };
};
