import slice, { initialState } from './languageSlice';

export * from './models';

export const language = {
  ...slice,
  initialState,
};
