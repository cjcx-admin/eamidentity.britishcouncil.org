import { PropsWithChildren } from 'react';
import { OidcProvider } from '@britishcouncil/react-oidc-auth';
import { PageLoader } from '@britishcouncil/react-solas-ors3';

import { loadSettings } from 'auth/settingsManager';
import { useAsync } from 'react-async';
import { OidcCallbackUser } from 'auth/models';
import { logIn } from 'store/authSlice';
import { useDispatch } from 'core/hooks/useDispatch';

const AuthProvider = ({ children }: PropsWithChildren) => {
  const settings = useAsync({ promiseFn: loadSettings });
  const dispatch = useDispatch();

  return (
    <>
      {settings.data ? (
        <OidcProvider
          {...settings.data}
          onSigninCallback={(user): void => {
            dispatch(logIn(user as OidcCallbackUser));
          }}
        >
          {children}
        </OidcProvider>
      ) : (
        <PageLoader />
      )}
    </>
  );
};

export default AuthProvider;
