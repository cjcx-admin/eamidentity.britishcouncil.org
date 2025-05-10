import { OidcClient } from '@britishcouncil/react-oidc-auth';
import { appSettings } from 'ors-utils';
import { hasIeltsUsaUrl } from 'ors-translations';

import appConfig from 'appConfig';
import { initSentry } from 'initSentry';

export async function loadSettings(): Promise<OidcClient.UserManagerSettings> {
  const config = await appSettings(appConfig, initSentry, import.meta.env.REACT_APP_ENV);

  const baseAddress = window.location.origin;

  const settings: OidcClient.UserManagerSettings = {
    authority: config.userManager.authority,
    client_id: hasIeltsUsaUrl() ? config.userManager.usa_client_id : config.userManager.client_id,
    redirect_uri: `${baseAddress}/ttp/callback`,
    response_type: 'code',
    scope: config.userManager.scope,
    post_logout_redirect_uri: `${baseAddress}/ttp`,
    silent_redirect_uri: `${baseAddress}/ttp/silent-redirect.html`,
    automaticSilentRenew: true,
  };
  return {
    ...settings,
    userStore: new OidcClient.WebStorageStateStore({ store: window.sessionStorage }),
  };
}
