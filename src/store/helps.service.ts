import { CentreHelpContentDto, centresClient } from 'ors-api/mod';

import { api } from './shared/api';

const helpApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCommonQuestions: builder.query<CentreHelpContentDto, { locale: string; centreId?: number }>({
      query: ({ centreId }) => {
        if (!centreId) {
          return Promise.resolve({} as any);
        }

        return centresClient.getCommonQuestionsHelpContent(centreId);
      },
    }),
  }),
});

export const { useGetCommonQuestionsQuery } = helpApi;
