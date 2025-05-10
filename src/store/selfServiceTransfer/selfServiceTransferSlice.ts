import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DatesRange } from 'store/osrBooking';
import { SelfServiceTransferState } from './models';
import {
  AvailableDistrictExamDto,
  AvailableSpeakingSlotDto,
  OsrAvailableSpeakingSlotDetailsDto,
  OsrRegistrationTransferLrwDistrictExamDto,
  OsrRegistrationTransferSpeakingDistrictExamDto,
} from 'ors-api/mod';

export const sliceName = 'selfServiceTransfer';

export const initialState: SelfServiceTransferState = {
  selectedDistrictIds: undefined,
  datesRange: undefined,
  selectedExam: undefined,
  selectedSpeakingSlot: undefined,
  osrSelectedExam: undefined,
  osrSelectedSpeakingSlot: undefined,
};

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setSelfServiceTransferDistrictIds(state, action: PayloadAction<number[]>) {
      state.selectedDistrictIds = action.payload;
    },
    setSelfServiceTransferDatesRange(state, action: PayloadAction<DatesRange | undefined>) {
      state.datesRange = action.payload;
    },
    setSelectedExam(state, action: PayloadAction<AvailableDistrictExamDto>) {
      state.selectedExam = action.payload;
    },
    setSelectedSpeakingSlot(state, action: PayloadAction<AvailableSpeakingSlotDto | undefined>) {
      state.selectedSpeakingSlot = action.payload;
    },
    setOsrSelectedExam(
      state,
      action: PayloadAction<
        OsrRegistrationTransferLrwDistrictExamDto | OsrRegistrationTransferSpeakingDistrictExamDto
      >
    ) {
      state.osrSelectedExam = action.payload;
    },
    setOsrSelectedSpeakingSlot(
      state,
      action: PayloadAction<OsrAvailableSpeakingSlotDetailsDto | undefined>
    ) {
      state.osrSelectedSpeakingSlot = action.payload;
    },
    resetSelectedExamData(state) {
      state.selectedExam = initialState.selectedExam;
      state.selectedSpeakingSlot = initialState.selectedSpeakingSlot;
    },
    clearSelfServiceTransferState(state) {
      state.selectedDistrictIds = initialState.selectedDistrictIds;
      state.datesRange = initialState.datesRange;
      state.selectedExam = initialState.selectedExam;
      state.selectedSpeakingSlot = initialState.selectedSpeakingSlot;
    },
  },
});

export default slice;
