import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { converters } from 'common';
import { getAvailableSlots } from './api';
import { SpeakingState } from './models';

export const sliceName = 'speaking';

export const initialState: SpeakingState = {
  availableSlots: undefined,
  processing: false,
  error: undefined,
};

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setProcessing: (state, action: PayloadAction<boolean>) => {
      state.processing = action.payload;
    },
    clearSlots: (state) => {
      state.availableSlots = undefined;
    },
  },
  extraReducers: (builder) => {
    /**
     * Get Available speaking slots
     */
    builder.addCase(getAvailableSlots.pending, (state) => {
      state.error = undefined;
    });
    builder.addCase(getAvailableSlots.fulfilled, (state, action) => {
      state.availableSlots = action.payload;
    });
    builder.addCase(getAvailableSlots.rejected, (state, action) => {
      state.error = converters.tErrorMessage(action.payload);
    });
  },
});

export default slice;
