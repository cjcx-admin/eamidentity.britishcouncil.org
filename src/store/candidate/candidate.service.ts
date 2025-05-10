import { api } from '../shared/api';
import { productsClient } from 'ors-api/iol';
import {
  AwardingBodySystem,
  awardingBodySystemsClient,
  familyRelationshipClient,
  FamilyRelationshipDto,
  GenderDto,
  specialArrangementClient,
  SpecialArrangementDto,
} from 'ors-api/mod';
import { candidateClient as candidateClientUkvi } from 'ors-api/ukvi';
import { CandidateBasicWithFamilyRelationsip, candidateClient } from 'ors-api/ors2';
import { includesInUrl } from 'ors-utils';

const candidateApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getGenders: builder.query<
      GenderDto[],
      {
        locale: string;
        awardingBodySystem?: AwardingBodySystem;
        productId?: string;
        productFamilyId?: string;
        countryId?: number;
      }
    >({
      query: ({ awardingBodySystem, productId, productFamilyId, countryId }) => {
        const isIol = includesInUrl('/iol/');
        if (awardingBodySystem && productFamilyId && countryId) {
          return awardingBodySystemsClient.getCountryAvailableGenders(
            awardingBodySystem,
            productFamilyId,
            countryId
          );
        } else if (productId && isIol) return productsClient.getGenders(productId);

        return Promise.resolve([] as any);
      },
    }),
    getParentBasics: builder.query<
      CandidateBasicWithFamilyRelationsip,
      { isUkvi: boolean; testTakerId: number; locale: string }
    >({
      query: ({ isUkvi, testTakerId }) => {
        return isUkvi
          ? candidateClientUkvi.getParentCandidateBasicsByMinor(testTakerId)
          : candidateClient.getParentCandidateBasicsByMinor(testTakerId);
      },
    }),
    getFamilyRelationships: builder.query<FamilyRelationshipDto[], { locale: string }>({
      query: () => {
        return familyRelationshipClient.getFamilyRelationships();
      },
    }),
    getSpecialArrangements: builder.query<SpecialArrangementDto[], { locale: string }>({
      query: () => {
        return specialArrangementClient.getSpecialArrangements();
      },
    }),
  }),
});

export const {
  useGetGendersQuery,
  useGetFamilyRelationshipsQuery,
  useGetParentBasicsQuery,
  useGetSpecialArrangementsQuery,
} = candidateApi;
