import { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import { AxiosError, AxiosPromise } from 'axios';

export const axiosBaseQuery =
  <T>(): BaseQueryFn<AxiosPromise<T>, T, unknown> =>
  async (promise) => {
    try {
      const result = await promise;
      return { data: result.data, meta: { headers: result.headers } };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };
