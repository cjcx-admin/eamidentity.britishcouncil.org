import { AxiosError } from 'axios';
import { DateTime } from 'luxon';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiErrorDetailed, extractApiError, SimpleLS } from '@britishcouncil/react-common';
import { candidateClient, CandidateMarketingPreferences } from 'ors-api/ors2';
import { formatSurname, logger } from 'ors-utils';
import { hasIeltsUsaUrl } from 'ors-translations';
import queryString from 'query-string';
import { OidcContext, User } from '@britishcouncil/react-oidc-auth';

import { useDispatch, useSelector } from 'core';
import { OidcCallbackUser } from '../auth/models';
import { appRoutes, navigateWithBase, routeWithBase } from 'Navigation';
import { history } from './historyState';
import { globalLogOut } from './common';
import { AppThunk, ThunkApi } from '.';
import { useNavigate } from 'react-router-dom';
import { useLocale } from 'common';

const sliceName = 'auth';

export const initialState: AuthTokenState = {
  isLoggedIn: false,
  logInError: undefined,
  logInProcessing: false,
};

const slice = createSlice({
  name: sliceName,
  initialState: initialState,
  reducers: {
    loggedIn(state, action: PayloadAction<Partial<AuthTokenState>>) {
      state.accessToken = action.payload.accessToken;
      state.expiresAt = action.payload.expiresAt;
      state.userId = action.payload.userId;
      state.unfulfilled_policies = action.payload.unfulfilled_policies;
      state.isLoggedIn = true;
      state.logInProcessing = false;
      state.logInError = undefined;
      state.idp = action.payload.idp;
    },
    loggedOut() {
      return initialState;
    },
    setLoginProcessing(state) {
      state.logInProcessing = true;
      state.logInError = undefined;
    },
    setLoginError(state, action: PayloadAction<ApiErrorDetailed>) {
      state.logInProcessing = false;
      state.logInError = action.payload;
    },
    setLoadingProcessing(state) {
      state.loadingProcessing = true;
      state.loadingError = undefined;
    },
    setLoadingError(state, action: PayloadAction<ApiErrorDetailed>) {
      state.loadingProcessing = false;
      state.loadingError = action.payload;
    },
    setUserProfile(state, action: PayloadAction<EamUserProfile | undefined>) {
      state.logInProcessing = false;
      state.profile = action.payload;
    },
    removePolicy(state, action: PayloadAction<string>) {
      const policyToRemove = action.payload;
      const newPolicies = state.unfulfilled_policies?.filter((p) => p !== policyToRemove);
      state.unfulfilled_policies = newPolicies ?? [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(globalLogOut, () => initialState);
  },
});

export interface AuthTokenState {
  isLoggedIn: boolean;
  accessToken?: string;
  expiresAt?: string;
  userId?: number;
  profile?: EamUserProfile;
  logInError?: ApiErrorDetailed;
  logInProcessing?: boolean;
  loadingProcessing?: boolean;
  loadingError?: ApiErrorDetailed;
  unfulfilled_policies?: string[];
  idp?: string;
}

export interface EamAuthIdentity {
  token_type?: string;
  user_id?: any;
  expires_in?: number;
  unfulfilled_policies?: string[];
  valid_till: string;
  id_token?: string;
  access_token: string;
  idp?: string;
}

export const auth = {
  ...slice,
  initialState,
};

export default auth;

export const reducer = slice.reducer;

export const loadAuthStateFromLS = (): AppThunk => async (dispatch, getState) => {
  const eamAuthIdentity = SimpleLS.read<EamAuthIdentity>('SECURITY_AUTH_IDENTITY', {});
  const userProfileLS = SimpleLS.read<EamUserProfile>('USER_PROFILE', null);

  if (eamAuthIdentity && eamAuthIdentity.access_token) {
    if (DateTime.fromISO(eamAuthIdentity.valid_till) <= DateTime.local()) {
      dispatch(slice.actions.loggedOut());
      return;
    }

    const authRes: Partial<AuthTokenState> = {
      accessToken: eamAuthIdentity.access_token,
      expiresAt: eamAuthIdentity.valid_till,
      userId: parseInt(eamAuthIdentity.user_id, 10),
      unfulfilled_policies: eamAuthIdentity.unfulfilled_policies,
      idp: eamAuthIdentity.idp,
    };
    dispatch(slice.actions.loggedIn(authRes));
    dispatch(slice.actions.setUserProfile(userProfileLS));
  } else {
    dispatch(slice.actions.loggedOut());
  }
};

export const logOut =
  (callbackError = false): AppThunk =>
  async (dispatch) => {
    SimpleLS.remove('SECURITY_AUTH_IDENTITY');
    SimpleLS.remove('USER_PROFILE');

    dispatch(globalLogOut());

    callbackError && navigateWithBase(appRoutes.auth.login);
  };

export const logIn =
  (user: OidcCallbackUser): AppThunk =>
  async (dispatch, getState) => {
    dispatch(slice.actions.setLoginProcessing());
    /** Restore query string that was present before redirection to IS4 */
    dispatch(persistAuth(user));
    await loadProfile({ dispatch });

    navigateWithBase(getRedirectUrl(user));
  };

const getRedirectUrl = (user: OidcCallbackUser) => {
  const searchParams = queryString.parse(user.state?.location.search);
  const organisationAlias = searchParams['organisation'] || searchParams['organization'];
  const mustChangePass = user?.profile?.unfulfilled_user_policies
    ? JSON.parse(user?.profile?.unfulfilled_user_policies as string)[0] ===
      'CustomResetPasswordAtFirstLogin'
    : false;

  const redirectUrl = mustChangePass
    ? appRoutes.auth.changePassword
    : user.state?.returnUrl ?? appRoutes.root;

  const parsedTargetUrl = queryString.parseUrl(redirectUrl);

  if (
    organisationAlias &&
    (!parsedTargetUrl.query['organisation'] || !parsedTargetUrl.query['organization'])
  ) {
    return `${parsedTargetUrl.url}?${queryString.stringify(
      hasIeltsUsaUrl()
        ? Object.assign(parsedTargetUrl.query, { organization: organisationAlias })
        : Object.assign(parsedTargetUrl.query, { organisation: organisationAlias })
    )}`;
  }

  return redirectUrl;
};

export const persistAuth =
  (user: User): AppThunk =>
  async (dispatch) => {
    const auth = {
      ...user,
      user_id: user.profile.sub,
      valid_till: new Date((user.expires_at || 1) * 1000).toISOString(),
      unfulfilled_policies: user?.profile?.unfulfilled_user_policies
        ? JSON.parse(user?.profile?.unfulfilled_user_policies as string)
        : undefined,
      idp: user.profile.idp as string,
    };

    dispatch(
      slice.actions.loggedIn({
        accessToken: auth.access_token,
        expiresAt: auth.valid_till,
        userId: parseInt(auth.user_id, 10),
        unfulfilled_policies: auth.unfulfilled_policies,
        idp: auth.idp,
      })
    );
    SimpleLS.write('SECURITY_AUTH_IDENTITY', auth);
  };

export const loadProfile = async ({ dispatch }: ThunkApi) => {
  try {
    dispatch(slice.actions.setLoadingProcessing());
    // Clean old profile to avoid issues
    dispatch(slice.actions.setUserProfile(undefined));
    SimpleLS.remove('USER_PROFILE');

    // Gather new profile data
    const { data: candidateDetails } = await candidateClient.getCandidateDetailsExtended();
    if (!candidateDetails || typeof candidateDetails === 'string') {
      return;
    }

    const userProfile: EamUserProfile = {
      email: candidateDetails.email!,
      username: candidateDetails.username,
      fullName: [candidateDetails.firstName, formatSurname(candidateDetails.surname)].join(' '),
      id: candidateDetails.id,
      isMinor: candidateDetails.isMinor,
      needToSupplyMissingDetails: candidateDetails.needToSupplyMissingDetails,
      needToUpdateMarketingPreferences: candidateDetails.needToUpdateMarketingPreferences,
      marketingPreference: candidateDetails.marketingPreferences,
      needToVerifyDraftProcess: candidateDetails.needToVerifyDraftProcess,
      smsNotificationsAllowed: candidateDetails.smsNotificationsAllowed,
      mobile: candidateDetails.mobile,
    };
    dispatch(slice.actions.setUserProfile(userProfile));

    if (userProfile.id !== 0) {
      SimpleLS.write('USER_PROFILE', userProfile);
    }
  } catch (ex: any) {
    const apiError = extractApiError(ex as AxiosError);
    dispatch(
      slice.actions.setLoadingError({ ...apiError, msg: apiError.msg ?? ex?.response?.statusText })
    );
    logger.logFailedRequest(ex as AxiosError);
  }
};

/** It's an interesting construct. This method checks if user is logged in purely in LS,
 * because initial Private guard can run before full state rehydration is completed
 **/
export const isUserLoggedInLS = (): boolean => {
  const eamAuthIdentity = SimpleLS.read<EamAuthIdentity>('SECURITY_AUTH_IDENTITY', {});

  if (eamAuthIdentity && eamAuthIdentity.access_token) {
    return DateTime.fromISO(eamAuthIdentity.valid_till) > DateTime.local();
  }
  return false;
};

export const removePolicy =
  (policy: string): AppThunk =>
  async (dispatch) => {
    dispatch(slice.actions.removePolicy(policy));

    let eamAuthIdentity = SimpleLS.read<EamAuthIdentity>('SECURITY_AUTH_IDENTITY', {});

    const newPolicy = {
      ...eamAuthIdentity,
      unfulfilled_policies: eamAuthIdentity.unfulfilled_policies?.filter((p) => p !== policy),
    };

    SimpleLS.write('SECURITY_AUTH_IDENTITY', newPolicy);
  };

export interface EamUserProfile {
  email: string;
  username?: string;
  fullName: string;
  id: number;
  isMinor: boolean;
  needToSupplyMissingDetails: boolean;
  needToUpdateMarketingPreferences: boolean;
  marketingPreference: CandidateMarketingPreferences;
  needToVerifyDraftProcess: boolean;
  smsNotificationsAllowed: boolean;
  mobile?: string;
}

export const useAuthSlice = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { locale } = useLocale();
  const { events, signoutRedirect, settings } = OidcContext.useAuth();

  const { organisationAlias } = useSelector((s) => s).organisationCountry;
  const { unfulfilled_policies } = useSelector((s) => s).auth;

  const subscribeToUserLoaded = async () => {
    events.addUserLoaded((user) => {
      dispatch(persistAuth(user));
    });

    const policies = unfulfilled_policies;
    const mustChangePass = policies?.includes('CustomResetPasswordAtFirstLogin');
    if (mustChangePass) {
      history.push(`${routeWithBase(appRoutes.auth.changePassword)}${window.location.search}`);
    }
  };

  const handleLogOut = async () => {
    const userLs = SimpleLS.read<EamAuthIdentity>('SECURITY_AUTH_IDENTITY');

    SimpleLS.remove('SECURITY_AUTH_IDENTITY');
    SimpleLS.remove('USER_PROFILE');

    dispatch(globalLogOut());

    const extraQueryParams = {
      ui_locales: locale,
      ...(organisationAlias && { organisationAlias }),
      viewCustomizationClientId: settings.client_id,
    };

    userLs?.id_token
      ? signoutRedirect({
          redirectMethod: 'replace',
          extraQueryParams,
          id_token_hint: userLs?.id_token,
        })
      : navigate(appRoutes.auth.login);
  };

  return { subscribeToUserLoaded, handleLogOut };
};
