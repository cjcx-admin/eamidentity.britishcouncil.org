import {
  RegistrationDocumentType,
  termsAndConditionsTypeClient,
  registrationDocumentClient,
  TermsAndConditionsConsentCheckRequest,
} from 'ors-api/ors2';
import {
  registrationDocumentClient as registrationDocumentClientUkvi,
  termsAndConditionsClient,
} from 'ors-api/ukvi';
import { AxiosPromise } from 'axios';
import { ExamContext, getExamContext } from 'core';
import { api } from '../shared/api';
import { checkIfProductIdMatchRegContext, includesInUrl, logger } from 'ors-utils';
import {
  RegistrationAlertsDto as RegistrationAlertsDtoMod,
  RegistrationDto,
  registrationAlertsClient,
  registrationClient,
} from 'ors-api/mod';
import {
  RegistrationAlertsDto as RegistrationAlertsDtoIol,
  registrationNotificationsClient as registrationNotificationsClientIol,
} from 'ors-api/iol';
import { registration } from '.';
import { tags } from 'store/shared/queryTags';
import { extractApiErrors } from 'ors-ui';

const registratonApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRegistrationDetailsMod: builder.query<RegistrationDto, number>({
      query: async (regId) => {
        return await registrationClient.get(regId);
      },
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          dispatch(registration.actions.clearRegDetails());
          dispatch(registration.actions.setErrors(undefined));
          dispatch(
            registration.actions.setRegistrationInCentre({ processing: true, regNotFound: false })
          );

          const { data } = await queryFulfilled;
          const context = getExamContext();
          const isRegMatch = checkIfProductIdMatchRegContext({
            productId: data.productId,
            context,
          });

          dispatch(
            registration.actions.setRegistrationInCentre({
              reg: isRegMatch ? data : undefined,
              processing: false,
              regNotFound: !isRegMatch,
            })
          );
        } catch (error) {
          const err = extractApiErrors(error);
          dispatch(registration.actions.setErrors(err));
          dispatch(
            registration.actions.setRegistrationInCentre({ processing: false, regNotFound: true })
          );
          logger.logError(error as Error);
        }
      },
      providesTags: [tags.REGISTRATION_DETAILS_QUERY_TAG],
    }),
    getTermsAndConditionsNewestVersionNumber: builder.query<
      number,
      {
        shortCode: string;
        locale: string;
        productGroupShortCode?: string;
        subSystemName?: string;
        organisationCountryId?: number;
      }
    >({
      query: async ({
        shortCode,
        organisationCountryId,
        productGroupShortCode = 'IELTS',
        subSystemName = 'B2C',
      }) => {
        const isUkvi = includesInUrl('/ukvi/');
        const client = isUkvi ? termsAndConditionsClient : termsAndConditionsTypeClient;

        return await client.getTermsAndConditionsNewestVersionNumber(
          shortCode,
          productGroupShortCode,
          subSystemName,
          organisationCountryId
        );
      },
    }),
    getRegistrationTermsShortCode: builder.query<
      string,
      { registrationId?: number; orgCountryId?: number; context?: ExamContext }
    >({
      query: ({ registrationId, orgCountryId, context }) => {
        const ctx = context ?? getExamContext();
        const isUkvi = ctx === 'ukvi';
        const isIol = ctx === 'iol';
        if (isIol || !registrationId) {
          return Promise.resolve('' as any);
        }

        const client = isUkvi ? termsAndConditionsClient : termsAndConditionsTypeClient;

        return client.getRegistrationTermsAndConditionsShortCode(registrationId, orgCountryId);
      },
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {
          logger.logError(error as Error);
        }
      },
    }),
    getAlertsMod: builder.query<RegistrationAlertsDtoMod, number | undefined>({
      query: (regId) => {
        if (!regId) {
          return Promise.resolve({
            isTransferPending: false,
          }) as unknown as AxiosPromise<RegistrationAlertsDtoMod>;
        }

        return registrationAlertsClient.getAlerts(regId);
      },
      providesTags: [tags.REGISTRATION_ALERTS_QUERY_TAG],
    }),
    getAlertsIol: builder.query<RegistrationAlertsDtoIol, number | undefined>({
      query: (regId) => {
        if (!regId) {
          return Promise.resolve({
            isTransferPending: false,
          }) as unknown as AxiosPromise<RegistrationAlertsDtoIol>;
        }

        return registrationNotificationsClientIol.getAlerts(regId);
      },
      providesTags: [tags.REGISTRATION_ALERTS_QUERY_TAG],
    }),
    getRegistrationMissingDocuments: builder.query<RegistrationDocumentType[], number>({
      query: (regId) => {
        const isUkvi = includesInUrl('/ukvi/');
        return isUkvi
          ? registrationDocumentClientUkvi.getRegistrationMissingDocuments(regId)
          : registrationDocumentClient.getRegistrationMissingDocuments(regId);
      },
      providesTags: [tags.REGISTRATION_MISSING_DOCUMENTS_QUERY_TAG],
    }),
    checkIfTermsAndConditionsUpdated: builder.query<
      boolean,
      { isLifeSkills: boolean } & TermsAndConditionsConsentCheckRequest
    >({
      query: ({ registrationId, organisationCountryId, shortCode, isLifeSkills }) => {
        const isUkvi = includesInUrl('/ukvi/');
        const client = isUkvi ? termsAndConditionsClient : termsAndConditionsTypeClient;
        const ukviProductGroupShortCode = isLifeSkills ? 'LIFESKILLS' : 'IELTSUKVI';
        const request = {
          registrationId,
          organisationCountryId,
          shortCode,
          productGroupShortCode: isUkvi ? ukviProductGroupShortCode : 'IELTS',
          subSystemName: 'B2C',
        };

        return client.checkIfTermsAndConditionsUpdated(request);
      },
    }),
  }),
});

export const {
  useGetTermsAndConditionsNewestVersionNumberQuery,
  useGetRegistrationTermsShortCodeQuery,
  useLazyGetRegistrationTermsShortCodeQuery,
  useGetAlertsModQuery,
  useGetAlertsIolQuery,
  useGetRegistrationDetailsModQuery,
  useGetRegistrationMissingDocumentsQuery,
  useCheckIfTermsAndConditionsUpdatedQuery,
  useLazyCheckIfTermsAndConditionsUpdatedQuery,
} = registratonApi;
