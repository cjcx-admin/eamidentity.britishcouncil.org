import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  IGetAvailableSpeakingSlotsFromRegistrationTransferRequestServiceQuery,
  RegistrationTransferRequestAvailableSpeakingSlotDto,
  registrationTransferRequestClient,
} from 'ors-api/mod';
import { ApiErrorsList, extractApiErrors } from 'ors-ui';

const sliceName = 'speaking';

type GetRequestArgs = {
  regId: number;
  query: IGetAvailableSpeakingSlotsFromRegistrationTransferRequestServiceQuery;
};

export const getAvailableSlots = createAsyncThunk<
  RegistrationTransferRequestAvailableSpeakingSlotDto[],
  GetRequestArgs,
  { rejectValue: ApiErrorsList }
>(sliceName + '/getAvailableSlots', async (req, { rejectWithValue }) => {
  try {
    const response = await registrationTransferRequestClient.getAvailableSpeakingSlots(
      req.regId,
      req.query
    );
    return response.data;
  } catch (error) {
    const err = extractApiErrors(error);
    return rejectWithValue(err);
  }
});
