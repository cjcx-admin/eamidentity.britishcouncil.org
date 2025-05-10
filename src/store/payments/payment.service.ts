import { DateTime } from 'luxon';
import { api } from '../shared/api';
import {
  CentrePaymentMethodDto,
  centresClient,
  ExamFormat,
  ProductType,
  registrationEnquiryOnResultsClient,
} from 'ors-api/mod';
import { preparePaymentMethods, logger } from 'ors-utils';

import { getExamContext } from 'core';
import { payments } from '.';
import {
  IGetComputedTaxesFeeForRegistrationFromRegistrationTaxFeeCalculatorServiceQuery,
  pricingClient,
  ProductPricingRequest,
  ProductWithPriceResponse,
  registrationTaxFeeCalculatorClient,
  TaxedFee,
} from 'ors-api/ors2';

const paymentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPaymentMethods: builder.query<
      CentrePaymentMethodDto[],
      {
        locale: string;
        centreId?: number;
        registrationId?: number;
        examDate?: string;
        examFormat?: ExamFormat;
        productType?: ProductType;
        productFamilyId?: string;
      }
    >({
      query: async ({
        centreId,
        registrationId,
        examDate,
        examFormat,
        productType,
        productFamilyId,
      }) => {
        if (centreId && productFamilyId) {
          const response = await centresClient.getCentrePaymentMethods(
            centreId,
            productFamilyId,
            registrationId
          );

          if (productType !== ProductType.ExamRegistration) return response;

          const curTime = DateTime.local().toISO();
          const preparedData = preparePaymentMethods(response.data, curTime, examDate, examFormat);

          return { ...response, data: preparedData };
        }

        return Promise.resolve([] as any);
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(payments.actions.setPaymentMethods(data));
        } catch (error) {
          logger.logError(error as Error);
        }
      },
    }),
    getEorOfflinePaymentNote: builder.query<
      string,
      { registrationId: number; locale: string; fetch?: boolean }
    >({
      query: async ({ registrationId, fetch = false }) => {
        if (!fetch || getExamContext() === 'iol') {
          return Promise.resolve('' as any);
        }
        return await registrationEnquiryOnResultsClient.getOfflinePaymentNote(registrationId);
      },
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {
          logger.logError(error as Error);
        }
      },
    }),
    getComputedTaxesFeeForRegistration: builder.query<
      TaxedFee,
      IGetComputedTaxesFeeForRegistrationFromRegistrationTaxFeeCalculatorServiceQuery & {
        locale: string;
      }
    >({
      query: async ({ orgCountryId, fee }) => {
        return registrationTaxFeeCalculatorClient.getComputedTaxesFeeForRegistration({
          orgCountryId,
          fee,
        });
      },
    }),
    getPromoCodePrice: builder.query<
      ProductWithPriceResponse,
      ProductPricingRequest & { locale: string }
    >({
      query: async (args) => {
        return pricingClient.calculateProductPrice(args);
      },
    }),
  }),
});

export const {
  useGetPaymentMethodsQuery,
  useGetEorOfflinePaymentNoteQuery,
  useGetComputedTaxesFeeForRegistrationQuery,
  useLazyGetPromoCodePriceQuery,
} = paymentApi;
