import { ApiErrorDetailed } from '@britishcouncil/react-common';
import { ActionReducerMapBuilder, AsyncThunk } from '@reduxjs/toolkit';
import { PickByValue } from 'utility-types';
import { ApiData } from 'ors-ui';

/**
 * Generic reducer used when simply loading data from the API and storing it within global state.
 * It will tracks the loading and the error state.
 * @param builder - pass a builder here
 * @param asyncThunk - pass an asnyc thunk here created by "createAsyncThunk" function from "@reduxjs/toolkit" package
 * @param key - slice key used to store the data. Type for this entry must be "ApiData"
 * @param {Object} config - additional configuration
 * @param config.transform - function to transform received data from API before storing it in the store
 * @param config.dataWhenError - value which should be stored in the store as a data value when API call error occurs
 */

export const apiExtraReducer = <S, R, T, D = ApiErrorDetailed>(
  builder: ActionReducerMapBuilder<S>,
  asyncThunk: AsyncThunk<R, any, { rejectValue: any }>,
  /** TODO: make "R | T" more strict based on presence of config.transform option */
  key: keyof PickByValue<S, ApiData<R | T, D>>,
  config?: {
    transform?: (data: R) => T;
    dataWhenError?: R;
  }
) => {
  builder
    .addCase(asyncThunk.pending, (state) => {
      return {
        ...state,
        [key]: { isLoading: true, error: undefined },
      };
    })
    .addCase(asyncThunk.fulfilled, (state, action) => {
      return {
        ...state,
        [key]: {
          isLoading: false,
          data: config?.transform ? config?.transform(action.payload) : action.payload,
        },
      };
    })
    .addCase(asyncThunk.rejected, (state, action) => {
      /** Not only ApiErrorDetailed is used as type for error */
      // const error: ApiErrorDetailed = action.payload?.type
      //   ? action.payload
      //   : extractApiError(action.payload);

      return {
        ...state,
        [key]: {
          isLoading: false,
          error: action.payload,
          data: config?.dataWhenError ?? undefined,
        },
      };
    });
};
