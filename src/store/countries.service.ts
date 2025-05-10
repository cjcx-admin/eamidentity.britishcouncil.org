import { productsClient } from 'ors-api/iol';
import { AwardingBodySystem, awardingBodySystemsClient, CountryDto } from 'ors-api/mod';

import { api } from './shared/api';

const countriesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCountries: builder.query<
      CountryDto[],
      {
        locale: string;
        awardingBodySystem?: AwardingBodySystem;
        productId?: string;
        productFamilyId?: string;
      }
    >({
      query: ({ awardingBodySystem, productId, productFamilyId }) => {
        if (awardingBodySystem && productFamilyId) {
          return awardingBodySystemsClient.getAllCountries(awardingBodySystem, productFamilyId);
        } else if (productId) {
          return productsClient.getCountries(productId);
        }

        return Promise.resolve([] as any);
      },
    }),
  }),
});

export const { useGetCountriesQuery } = countriesApi;
