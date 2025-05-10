import { OidcClient } from '@britishcouncil/react-oidc-auth';

const B2C_CLIENT_ID = 'ors2.b2c.app';

OidcClient.Log.setLevel(OidcClient.Log.ERROR);
OidcClient.Log.setLogger(console);
export class B2CUserManager extends OidcClient.UserManager {
  get _userStoreKey(): string {
    return `user:${this.settings.authority}:${B2C_CLIENT_ID}`;
  }
}
