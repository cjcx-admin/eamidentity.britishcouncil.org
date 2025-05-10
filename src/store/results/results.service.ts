import { api } from '../shared/api';
import {
  examResultClient as orsExamResultClient,
  getRegistrationResultScoresClient,
} from 'ors-api/ors2';
import { examResultClient as ukviExamResultClient, registrationClient } from 'ors-api/ukvi';
import { registrationClient as iolRegistrationClient } from 'ors-api/iol';
import {
  ApiResponseOfCentreConfigurationDto,
  ApiResponseOfString,
  centresClient,
  registrationClient as modRegistrationClient,
  ApiResponseOfRegistrationScoresDto,
  ExamResultScoreWithCommentary,
  AwardingBodySystem,
} from 'ors-api/mod';
import { getExamContext, useSelector } from 'core';

const stringToApiResponse = (str: string): ApiResponseOfString => {
  return {
    hasValue: !!str,
    value: str,
  };
};

const registrationResultsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRegistrationResultsTrfNumber: builder.query<
      ApiResponseOfString,
      { registrationId: number; examType: 'ukvi' | 'ors' | 'iol' | 'mod' | undefined }
    >({
      query: ({ registrationId, examType }) => {
        switch (examType) {
          case 'mod':
            return modRegistrationClient.getTrfNumber(registrationId);
          case 'iol':
            return iolRegistrationClient.getTrfNumber(registrationId);
          case 'ors':
            return orsExamResultClient.getTrfNumber(registrationId);
          case 'ukvi':
            return ukviExamResultClient.getTrfNumber(registrationId);
          default:
            return Promise.resolve(undefined as any);
        }
      },
      transformResponse: (response: ApiResponseOfString | string) =>
        typeof response === 'string' ? stringToApiResponse(response) : response,
    }),
    getRegistrationScores: builder.query<
      ApiResponseOfRegistrationScoresDto,
      { registrationId: number; locale: string; isIol?: boolean }
    >({
      query: ({ registrationId, isIol }) => {
        if (isIol) {
          return iolRegistrationClient.getScores(registrationId);
        }

        return modRegistrationClient.getScores(registrationId);
      },
      transformResponse: (response: ApiResponseOfRegistrationScoresDto) => {
        const sortedScores = [...(response.value?.scores || [])].sort(
          (a, b) => a.bandScoreType - b.bandScoreType
        );

        return {
          ...response,
          value: { ...response.value, scores: sortedScores },
        } as ApiResponseOfRegistrationScoresDto;
      },
    }),
    getRegistrationScoresIwas: builder.query<
      ExamResultScoreWithCommentary[],
      { registrationId: number; locale: string; isUkvi?: boolean }
    >({
      query: ({ registrationId, isUkvi }) => {
        if (isUkvi) {
          return registrationClient.getRegistrationResultScores(registrationId);
        }

        return getRegistrationResultScoresClient.getRegistrationResultScores(registrationId);
      },
    }),
    getCentreConfiguration: builder.query<
      ApiResponseOfCentreConfigurationDto,
      { locale: string; centreId?: number }
    >({
      query: ({ centreId }) => {
        if (!centreId) return Promise.resolve({} as any);

        return centresClient.getCentreConfiguration(centreId);
      },
    }),
  }),
});

export const {
  useGetRegistrationResultsTrfNumberQuery,
  useGetCentreConfigurationQuery,
  useGetRegistrationScoresQuery,
  useGetRegistrationScoresIwasQuery,
} = registrationResultsApi;

export const useGetRegistrationScores = (
  {
    registrationId,
    locale,
  }: {
    registrationId: number;
    locale: string;
  },
  options?: { skip: boolean }
) => {
  const ctx = getExamContext();
  const isIol = ctx === 'iol';
  const isUkvi = ctx === 'ukvi';
  const reg = useSelector((s) => s.registration.registrationInCentre);

  const isIwas = reg?.awardingBodySystem === AwardingBodySystem.IWAS;

  const rawRegScoresMod = useGetRegistrationScoresQuery(
    { registrationId, locale, isIol },
    { skip: options?.skip }
  );
  const {
    data: rawRegScoresModData,
    isFetching: isFetchingMod,
    isError: isErrorMod,
  } = rawRegScoresMod;
  const rawRegScoresIwas = useGetRegistrationScoresIwasQuery(
    { registrationId, locale, isUkvi },
    { skip: !isIwas || options?.skip }
  );
  const {
    data: rawRegScoresIwasData,
    isFetching: isFetchingIwas,
    isError: isErrorIwas,
  } = rawRegScoresIwas;

  const isFetching = isFetchingMod || isFetchingIwas;
  const isError = isErrorMod || isErrorIwas;
  const data = isIwas
    ? ({
        ...rawRegScoresModData,
        value: { ...rawRegScoresModData, scores: rawRegScoresIwasData },
      } as ApiResponseOfRegistrationScoresDto)
    : rawRegScoresModData;

  return { data, isFetching, isError };
};
