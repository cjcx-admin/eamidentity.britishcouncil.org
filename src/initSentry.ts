import * as Sentry from '@sentry/react';
import { Settings } from 'ors-utils';

export function initSentry(appConfig: Settings) {
  if (appConfig.sentryUri) {
    const conf: Sentry.BrowserOptions = {
      dsn: appConfig.sentryUri,
      release: appConfig.appVersion,
      environment: appConfig.sentryEnvironment,
      autoSessionTracking: true,
      debug: false,
      denyUrls: ['google-analytics.com', 'go-mpulse.net', 'googletagmanager.com'],
      integrations: [Sentry.browserTracingIntegration()],

      /*
        How many trace request will be send (this is probability of particular trace req being sent)
        0 - send no requests
        1 - send all requests
      */
      tracesSampleRate: 0.5,
    };

    Sentry.init(conf);
  }
}
