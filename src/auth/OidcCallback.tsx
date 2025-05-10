import { useEffect } from 'react';
import { LoadingCard } from 'ors-ui';
import { logger } from 'ors-utils';
import { OidcContext } from '@britishcouncil/react-oidc-auth';
import { useLocale } from 'common';

export const OidcCallback = () => {
  const { signinRedirect, error } = OidcContext.useAuth();
  const { locale } = useLocale();

  useEffect(() => {
    if (error) {
      if (error.message !== 'No matching state found in storage') {
        logger.logError(error);
      }

      const extraQueryParams = {
        ui_locales: locale,
      };

      signinRedirect({
        extraQueryParams,
      });
    }
  }, [error]);

  return <LoadingCard />;
};
