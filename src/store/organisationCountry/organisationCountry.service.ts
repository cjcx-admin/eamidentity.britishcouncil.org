import { api } from '../shared/api';
import {
  organisationCountriesClient,
  ApiResponseOfOrganisationCountryConfigurationDto,
  ApiResponseOfOrganisationConfigurationDto,
  organisationsClient,
} from 'ors-api/mod';
import { organisationCountry } from '.';
import { logger } from 'ors-utils';
import { extractApiErrors } from 'ors-ui';

import { appRoutes } from 'Navigation';

const organisationCountryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getOrgCountryConfiguration: builder.query<
      ApiResponseOfOrganisationCountryConfigurationDto,
      { locale: string; organisationCountryId?: number; productFamilyId?: string }
    >({
      query: ({ organisationCountryId, productFamilyId }) => {
        if (!organisationCountryId || !productFamilyId) return Promise.resolve({} as any);

        return organisationCountriesClient.getOrganisationCountryConfiguration(
          organisationCountryId,
          productFamilyId
        );
      },
    }),
    getOrganisationConfiguration: builder.query<
      ApiResponseOfOrganisationConfigurationDto,
      { alias: string | null; locale: string; productFamilyId?: string }
    >({
      query: ({ alias, productFamilyId }) => {
        if (!alias || !productFamilyId) return Promise.resolve({} as any);

        return organisationsClient.getOrganisationConfiguration(productFamilyId, alias);
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(organisationCountry.actions.setOrganisationDetails({ isLoading: true }));
        try {
          const { data } = await queryFulfilled;

          if (data && !data.hasValue) {
            window.location.href =
              window.location.origin + '/ttp' + appRoutes.incorrectOrganisation;
          }

          data &&
            dispatch(
              organisationCountry.actions.setOrganisationDetails({
                isLoading: false,
                data: data?.value,
              })
            );
        } catch (error) {
          logger.logError(error as Error);
          dispatch(
            organisationCountry.actions.setOrganisationDetails({
              isLoading: false,
              error: extractApiErrors(error),
            })
          );
        }
      },
    }),
  }),
});

export const {
  useGetOrgCountryConfigurationQuery,
  useGetOrganisationConfigurationQuery,
  useLazyGetOrganisationConfigurationQuery,
} = organisationCountryApi;
