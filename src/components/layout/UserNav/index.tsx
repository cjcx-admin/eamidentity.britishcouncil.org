import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { SecondaryNav, PrimaryNav } from '@britishcouncil/react-solas';
import { breakpoints, LanguageSwitcher } from 'ors-ui';

import { useLocale } from 'common';
import { switchLanguage } from 'core';
import { useDispatch } from 'core/hooks/useDispatch';
import { useSelector } from 'core/hooks/useSelector';
import { useNavigationTabs } from './useNavigationTabs';

export const UserNav: FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { isLoggedIn, profile } = useSelector((s) => s.auth);
  const lastBookedExam = useSelector((s) => s.registration.lastBookedExam);
  const { locale } = useLocale();
  const needToSupplyMissingDetails = profile?.needToSupplyMissingDetails;
  const { navigationTabs } = useNavigationTabs(lastBookedExam);

  const hidePrimaryNav = profile?.needToVerifyDraftProcess;
  const candidateName = profile?.fullName
    ?.split(' ')
    .filter((v) => v !== '-')
    .join(' ');
  const showcandidateName = profile?.fullName && !profile.fullName.includes('null');

  const dispatchLangSwitch = (lang: string) => {
    switchLanguage(lang, dispatch);
  };

  return (
    <>
      {isLoggedIn && !hidePrimaryNav && (
        <PrimaryNav>
          {navigationTabs
            .filter((tab) => tab.loginAccess === isLoggedIn)
            .map((tab) => (
              <li key={tab.key}>
                {!tab.externalLink && (
                  <StyledNavLink
                    to={tab.target}
                    data-testid={tab.testDataId}
                    highlight={tab.isActive}
                  >
                    {t(tab.translationKey)}
                  </StyledNavLink>
                )}
                {tab.externalLink && (
                  <a href={tab.target} data-testid={tab.testDataId}>
                    {t(tab.translationKey)}
                  </a>
                )}
              </li>
            ))}
        </PrimaryNav>
      )}
      <SecondaryNav>
        <LanguageSwitcher selectedLang={locale} dispatchLangSwitch={dispatchLangSwitch} />

        {isLoggedIn ? (
          <>
            {!needToSupplyMissingDetails && (
              <Hello>
                <span>
                  {t('APPB2C.common.nav.hello')}
                  {showcandidateName ? (
                    <b data-testid="nav.loggedInUsername"> {candidateName}</b>
                  ) : (
                    '!'
                  )}
                </span>
              </Hello>
            )}
            <li>
              <Link to="/logout" data-testid="nav.logout">
                {t('APPB2C.common.nav.logout')}
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login" data-testid="nav.login">
              {t('APPB2C.common.nav.login')}
            </Link>
          </li>
        )}
      </SecondaryNav>
    </>
  );
};

const Hello = styled.li`
  @media (max-width: 849px) {
    display: none;
  }
`;

const StyledNavLink = styled(Link, { shouldForwardProp: (prop) => prop !== 'highlight' })<{
  highlight?: boolean;
}>`
  @media (min-width: ${breakpoints['screen-md-min']}px) {
    background-color: ${({ highlight }) => (highlight ? '#00DCFF !important' : '')};
    color: ${({ highlight }) => (highlight ? '#23085A !important' : '')};
  }

  @media (max-width: ${breakpoints['screen-sm-max']}px) {
    background-color: ${({ highlight }) => (highlight ? '#00DCFF !important' : '')};
    color: ${({ highlight }) => (highlight ? '#23085A !important' : '')};
  }
`;
