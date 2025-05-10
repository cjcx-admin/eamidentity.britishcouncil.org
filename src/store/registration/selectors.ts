import { getExamContext } from 'core';
import { RootState } from '..';
import { ChangeState, SlotErrorCodes } from './models';
import { countryIsoCode2 } from 'ors-utils';
import { ExamModule, RegistrationStatus } from 'ors-api/mod';

export const slotAvailabilityReq = (state: RootState) => {
  const regId = state.registration?.registrationInCentre?.id ?? 0;
  /* TODO: add when coords will be available */
  const coords = {};

  return { regId, query: coords };
};

export const isSlotTaken = (state: RootState) => {
  const { speakingTransferState, speakingTransferError: error } = state.registration;
  /** Right now this is the only way to recognize that this  4** API error is caused by exhausted slot capacity. */
  const keyWord = 'capacity has been exhausted';
  const isTaken = error?.errors?.some((e) => e.code === SlotErrorCodes.notAvailable);
  const isExhaustedCapacity = error?.errors?.some((e) => e.message?.includes(keyWord));

  return (
    (speakingTransferState === ChangeState.FAILED && (isExhaustedCapacity || isTaken)) ?? false
  );
};

export const showApplyBoard = (state: RootState) => {
  const { registrationInCentre } = state.registration;
  const ctx = getExamContext();
  const isOrs = ctx === 'ors';

  if (registrationInCentre?.status === RegistrationStatus.Cancelled) return false;
  if (isOrs === false || registrationInCentre?.countryIsoCode2 === countryIsoCode2.HONG_KONG)
    return false;

  if (registrationInCentre?.isRegistrationB2B) {
    return (
      registrationInCentre?.isAgentAffiliatedWithApplyBoard &&
      registrationInCentre?.isBcOrganisation &&
      registrationInCentre?.examModule === ExamModule.AC
    );
  }

  return (
    registrationInCentre?.isBcOrganisation && registrationInCentre?.examModule === ExamModule.AC
  );
};
