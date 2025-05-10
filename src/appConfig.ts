import { Config } from 'ors-utils';

const appConfig: Config = {
  applicationCode: 'ORS2-B2C',
  applicationName: 'IELTS ORS2',
  insightsApplication: 'new-ttp.app',
  baseApiUrl: '',
  /**
   * If the app is hosted in a subdirectory it needs to be configured here
   * Leave empty `''` when app is hosted in the root site
   * No trailing `/` please
   */
  subdirectory: 'ttp',
  /**
   * Cache invalidation token. Increment it when you need to introduce a change
   * that invalidates existing LocalStorage entry for Feature Flags for all users.
   * Attention: Use it only when you need to introduce some incompatible change
   **/
  featureFlagsVersion: '1',
  /**
   * Cache invalidation token. Increment it when you need to introduce a change
   * that invalidates existing LocalStorage entry for store for all users.
   * Attention: Use it only when you need to introduce some incompatible change
   **/
  storeVersion: 7,
};

export default appConfig;
