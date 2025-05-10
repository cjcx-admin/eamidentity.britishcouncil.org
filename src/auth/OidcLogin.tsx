import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getOrganisationAlias } from 'ors-utils';
import { LoadingCard } from 'ors-ui';
import { OidcContext } from '@britishcouncil/react-oidc-auth';

import { history } from 'store/historyState';
import { useSearchParams } from 'react-router-dom';
import { useLocale } from 'common';

export const OidcLogin = () => {
  const dispatch = useDispatch();
  const organisationAlias = getOrganisationAlias();
  const [searchParams] = useSearchParams();
  const returnUrl = searchParams.get('returnUrl');
  const { signinRedirect } = OidcContext.useAuth();
  const { locale } = useLocale();

  useEffect(() => {
    const startLogIn = async () => {
      const extraQueryParams = {
        ui_locales: locale,
        ...(organisationAlias && { organisationAlias }),
      };
      signinRedirect({
        extraQueryParams,
        state: {
          location: history.location,
          returnUrl,
        },
      });
    };

    startLogIn();
  }, [dispatch, organisationAlias, returnUrl]);

  return <LoadingCard />;
};
