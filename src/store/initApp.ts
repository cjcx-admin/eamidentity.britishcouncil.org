import { GoogleTagManager } from '@britishcouncil/react-analytics';
import { fixGoogleTranslateIssue } from '@britishcouncil/react-common';
import { appSettings, CookieManager } from 'ors-utils';
import { setSupportedLanguages } from 'ors-translations';

import { AppThunk } from '.';
import appConfig from 'appConfig';
import { initSentry } from 'initSentry';
import { loadAuthStateFromLS } from './authSlice';
import { refreshAbTests, refreshFeatureFlags } from './featureFlagsSlice';
import { useInterceptors } from './useInterceptors';

/** Variable that indicated that whole app was initialized correctly */
export let appInitialized = false;

/** Loads app initial state */
export const initApp = (): AppThunk => async (dispatch) => {
  appSettings(appConfig, initSentry, import.meta.env.REACT_APP_ENV).then((appSettings) => {
    GoogleTagManager.initialize(appSettings.gtmCode);
    setSupportedLanguages(appSettings.supportedLanguages);
  });

  fixGoogleTranslateIssue();
  useInterceptors();

  dispatch(refreshAbTests());
  dispatch(loadAuthStateFromLS());
  dispatch(refreshFeatureFlags());

  /** Set Geolocalisation and IOL Early Access Cookies on DEV environments */
  if (
    (import.meta.env.MODE === 'development' || document.location.host.includes('.dev.')) &&
    !CookieManager.getCookie('AkamaiEdgeScape')
  ) {
    document.cookie = 'AkamaiEdgeScape=country_code=GB;path=/';
  }

  appInitialized = true;
};
