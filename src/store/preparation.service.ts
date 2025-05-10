import {
  ApiResponseOfPreparationMaterialsDto,
  preparationMaterialsClient as preparationClientMod,
  RegistrationPreparationMaterialsDto,
} from 'ors-api/mod';
import { preparationMaterialsClient as preparationClientIol } from 'ors-api/iol';

import { api } from './shared/api';
import {
  TransformedRegistrationPreparationMaterialsDto,
  transformHelpAndPreparationExams,
} from 'common/converters/registration';
import { tags } from './shared/queryTags';

const preparationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPreparation: builder.query<
      ApiResponseOfPreparationMaterialsDto,
      { registrationId: number; locale: string }
    >({
      query: ({ registrationId }) => {
        if (!registrationId) {
          return Promise.resolve({} as any);
        }

        return preparationClientMod.getPreparationMaterials(registrationId);
      },
    }),
    getPreparationExams: builder.query<TransformedRegistrationPreparationMaterialsDto[], string>({
      async queryFn(locale, api, extraOptions, baseQuery) {
        const [iolExams, modExams] = await Promise.all([
          baseQuery(preparationClientIol.getCandidatePreparationMaterials()),
          baseQuery(preparationClientMod.getCandidatePreparationMaterials()),
        ]);

        const errors = { iolError: iolExams?.error, modError: modExams?.error };
        const result = [
          ...(iolExams.data as RegistrationPreparationMaterialsDto[]),
          ...(modExams.data as RegistrationPreparationMaterialsDto[]),
        ];

        return iolExams.data && modExams.data
          ? {
              data: transformHelpAndPreparationExams(
                result,
                locale
              ) as TransformedRegistrationPreparationMaterialsDto[],
            }
          : { error: errors };
      },

      providesTags: [tags.PREPARATION_EXAMS_QUERY_TAG],
    }),
  }),
});

export const { useGetPreparationQuery, useGetPreparationExamsQuery } = preparationApi;
