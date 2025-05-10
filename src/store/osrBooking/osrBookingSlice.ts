import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ComponentType, ProductWithPriceResponse } from 'ors-api/ors2';
import {
  AvailableLrwDistrictExam,
  AvailableSpeakingDistrictExam,
  AvailableSpeakingSlotDetails,
} from 'ors-api/mod';
import { ApiErrorsList } from 'ors-ui';

import { converters } from 'common';
import { DatesRange, OsrBookingState, OsrReservation } from './models';
import { DateTime } from 'luxon';

export const sliceName = 'osrBooking';

export const initialState: OsrBookingState = {
  datesRange: undefined,
  skillToRetake: undefined,
  selectedExam: undefined,
  selectedSpeakingSlot: undefined,
  promoCode: undefined,
  discount: undefined,
  osrGuid: undefined,
  reservation: undefined,
  selectedDistrict: undefined,
  onlinePaymentError: undefined,
};

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setSkillToRetake: (state, action: PayloadAction<ComponentType>) => {
      state.skillToRetake = action.payload;
    },
    setOsrDatesRange: (state, action: PayloadAction<DatesRange | undefined>) => {
      state.datesRange = action.payload;
    },
    setSelectedExam: (
      state,
      action: PayloadAction<AvailableLrwDistrictExam | AvailableSpeakingDistrictExam | undefined>
    ) => {
      state.selectedExam = action.payload;
    },
    setSelectedDistrict: (state, action: PayloadAction<number | undefined>) => {
      state.selectedDistrict = action.payload;
    },
    setSelectedSpeakingSlot: (
      state,
      action: PayloadAction<AvailableSpeakingSlotDetails | undefined>
    ) => {
      state.selectedSpeakingSlot = action.payload;
    },
    setPromoCode: (state, action: PayloadAction<string | undefined>) => {
      state.promoCode = action.payload;
    },
    setDiscount: (state, action: PayloadAction<ProductWithPriceResponse | undefined>) => {
      state.discount = action.payload;
    },
    setOsrGuid: (state, action: PayloadAction<string | undefined>) => {
      state.osrGuid = action.payload;
    },
    setOsrReservation: (state, action: PayloadAction<OsrReservation | undefined>) => {
      state.reservation = action.payload;
    },
    refreshOsrReservationState: (state, action: PayloadAction<string>) => {
      const currTime = DateTime.fromISO(action.payload);

      if (state?.reservation?.deadline) {
        state.reservation.showNearEndNotification =
          !!state.reservation.nearEndTime &&
          DateTime.fromISO(state.reservation.deadline) >= currTime &&
          DateTime.fromISO(state.reservation.nearEndTime) <= currTime;

        const minutesLeft = state.reservation.nearEndTime
          ? Math.ceil(
              DateTime.fromISO(state.reservation.deadline).diff(currTime, 'minutes').minutes
            )
          : undefined;

        state.reservation.minutesLeft = !minutesLeft || minutesLeft < 0 ? undefined : minutesLeft;

        state.reservation.showTimeUpModal = currTime > DateTime.fromISO(state.reservation.deadline);
      }
    },
    clearBooking: (state) => {
      state.datesRange = initialState.datesRange;
      state.skillToRetake = initialState.skillToRetake;
      state.selectedExam = initialState.selectedExam;
      state.selectedSpeakingSlot = initialState.selectedSpeakingSlot;
      state.promoCode = initialState.promoCode;
      state.discount = initialState.discount;
      state.osrGuid = initialState.osrGuid;
      state.reservation = initialState.reservation;
      state.selectedDistrict = initialState.selectedDistrict;
    },
    setOnlinePaymentError: (state, action: PayloadAction<ApiErrorsList>) => {
      state.onlinePaymentError = converters.tErrorMessage(action.payload);
    },
  },
});

export default slice;
