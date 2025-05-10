import { FC, Suspense, useEffect } from 'react';
import { ErrorBoundary } from '@sentry/react';
import { SolasLayout } from '@britishcouncil/react-solas';
import { Link } from 'react-router-dom';
import { Header, Footer, ErrorPage, LoadingCard, NearEndMsg } from 'ors-ui';
import { useSelectedLangDirection } from 'ors-translations';

import { AppRoutes } from 'Navigation';
import { Crowdin, UserNav } from 'components';
import { useOrganisations, usePageViewsInGA, useSelector } from 'core';
import { useI18n } from 'common/useI18n';
import { Modals } from 'components/layout/modals';
import { useAuthSlice } from 'store/authSlice';

import './App.scss';
import { Helmet } from 'react-helmet';

const App: FC = () => {
  useI18n();
  usePageViewsInGA();
  const { subscribeToUserLoaded } = useAuthSlice();
  const { isLoggedIn } = useSelector((s) => s.auth);
  const dir = useSelectedLangDirection();

  const showNearEndNotification = useSelector(
    (s) => s.osrBooking.reservation?.showNearEndNotification
  );
  const minutesLeft = useSelector((s) => s.osrBooking.reservation?.minutesLeft);

  const { showApp, logoUrl, extraLogoUrl, faviconUrl, orgData, hideBranding } = useOrganisations();

  useEffect(() => {
    subscribeToUserLoaded();
  }, []);

  return (
    <ErrorBoundary
      fallback={() => (
        <ErrorPage
          logoUrl={logoUrl}
          extraLogoUrl={extraLogoUrl}
          faviconUrl={faviconUrl}
          link={Link}
        />
      )}
    >
      <Helmet>
        <link
          href="https://bccdn.britishcouncil.org/dev/solas/0.1.6-bc.6/bc-ors-theme.css"
          rel="stylesheet"
        />
      </Helmet>

      <Crowdin />
      <SolasLayout id="app-container" ieltsBranding slogan="ielts" flex dir={dir}>
        <Header
          slogan="IELTS"
          slim
          compactMobileMode
          logoUrl={logoUrl}
          extraLogoUrl={extraLogoUrl}
          faviconUrl={faviconUrl}
          link={Link}
          hideBranding={hideBranding}
        >
          <UserNav />
        </Header>
        <div className="app-contents">
          <Suspense fallback={<LoadingCard />}>
            {showApp ? (
              <>
                <AppRoutes />
                {isLoggedIn && <Modals />}
              </>
            ) : (
              <LoadingCard />
            )}
          </Suspense>
        </div>
        <NearEndMsg showMsg={!!showNearEndNotification} minsLeft={minutesLeft} />
        <Footer orgSpecificData={orgData} />
      </SolasLayout>
    </ErrorBoundary>
  );
};

export default App;
