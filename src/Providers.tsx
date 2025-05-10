import { PropsWithChildren, Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { IntegratedLoader } from '@britishcouncil/react-solas';
import { ExtroProvider } from '@britishcouncil/react-extro-ui';

import store, { persistor } from 'store';
import { history } from 'store/historyState';
import appConfig from 'appConfig';
import { BCIntlProvider } from 'BCIntlProvider';
import AuthProvider from 'AuthProvider';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <HistoryRouter basename={appConfig.subdirectory} history={history}>
        <PersistGate persistor={persistor}>
          <BCIntlProvider>
            <ExtroProvider>
              <AuthProvider>
                <Suspense fallback={<IntegratedLoader />}>{children}</Suspense>
              </AuthProvider>
            </ExtroProvider>
          </BCIntlProvider>
        </PersistGate>
      </HistoryRouter>
    </Provider>
  );
};
