import { AxiosError } from 'axios';
import { registerOrs2Interceptors } from 'ors-api/ors2';
import { registerIolInterceptors } from 'ors-api/iol';
import { registerUkviInterceptors } from 'ors-api/ukvi';
import { registerModInterceptors } from 'ors-api/mod';

import store from '.';
import { logOut } from 'store/authSlice';
import { organisationCountry } from 'store/organisationCountry';
import { logger } from 'ors-utils';
import { BC_ORG_ALIAS } from './organisationCountry/organisationCountrySlice';

export const useInterceptors = () => {
  const interceptorActions = {
    authActions: {
      provideState: () => {
        const authState = store.getState().auth;
        return {
          isLoggedIn: authState.isLoggedIn,
          accessToken: authState.accessToken,
        };
      },
      logout: () => {
        store.dispatch(logOut() as any);
      },
    },
    organisationActions: {
      provideState: () => {
        const organisationId = organisationCountry.selectors.getOrgId(store.getState());
        const orgAlias = store.getState().organisationCountry?.organisationAlias;

        return {
          organisationId: organisationId,
          organisationAlias: orgAlias,
          bcOrganisationAlias: BC_ORG_ALIAS,
        };
      },
    },
    loggerActions: {
      logFailedRequest: (axiosError: AxiosError) => {
        logger.logFailedRequest(axiosError);
      },
    },
  };

  registerOrs2Interceptors(interceptorActions);
  registerIolInterceptors(interceptorActions);
  registerUkviInterceptors(interceptorActions);
  registerModInterceptors(interceptorActions);
};
