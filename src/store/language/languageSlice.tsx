import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimpleLS } from '@britishcouncil/react-common';

import { LanguageState } from './models';

export const sliceName = 'language';

export const initialState: LanguageState = {
  currentLanguage: SimpleLS.read<string>('SELECTED_LANGUAGE', ''),
};

/** Slice for selected language of the app */
const slice = createSlice({
  name: sliceName,
  initialState: initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<string>) {
      state.currentLanguage = action.payload;
    },
  },
});

export default slice;
