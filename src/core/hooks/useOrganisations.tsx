import { useEffect, useState } from 'react';
import { useMatch } from 'react-router-dom';
import { debounce } from 'lodash-es';
import { getOrganisationAlias } from 'ors-utils';

import { getProductFamilyId } from 'core';
import { useLocale } from 'common';
import { appRoutes } from 'Navigation';
import {
  organisationCountry,
  useLazyGetOrganisationConfigurationQuery,
} from 'store/organisationCountry';
import { useDispatch } from './useDispatch';
import { useSelector } from './useSelector';

/**
 * Use this hook to check if the organisation alias is present in the URL and if so,
 * download organisation's data like logos, etc.
 * TODO: what is the best way to move it to shared packages?
 */
export const useOrganisations = () => {
  const dispatch = useDispatch();
  const { locale } = useLocale();

  const isCallbackPage = useMatch(appRoutes.auth.callback);

  const {
    organisationDetails: { data: orgData, isLoading, error },
    organisationAlias,
  } = useSelector((s) => s.organisationCountry);

  const { isLoggedIn } = useSelector((s) => s.auth);
  const [showApp, setShowApp] = useState(false);
  const orgAlias = getOrganisationAlias();

  const [getQueryParams] = useLazyGetOrganisationConfigurationQuery();

  /** Make call to API to get organisation data */
  useEffect(() => {
    if (isCallbackPage) {
      setShowApp(true);
      return;
    }

    /** Make sure URL query string is properly set at this point. */
    const debouncedOrgCheck = debounce(() => {
      const orgAlias = getOrganisationAlias();
      if (orgAlias) {
        setShowApp(false);
        dispatch(organisationCountry.actions.setOrganisationAlias(orgAlias));
        getQueryParams({
          alias: orgAlias,
          locale,
          productFamilyId: getProductFamilyId(),
        });
      } else {
        /** Use general BC branding */
        dispatch(organisationCountry.actions.setOrganisationAlias(organisationCountry.bcAlias));
        setShowApp(true);
      }
    }, 200);

    debouncedOrgCheck();
  }, [dispatch, orgAlias, isLoggedIn, isCallbackPage, getQueryParams]);

  /** Show nCJ when organisation data was downloaded from API */
  useEffect(() => {
    if (isLoading || !orgAlias) {
      return;
    }

    /** If error occurs continue as regular BC registration */
    if (orgData || error) {
      setShowApp(true);
    }
  }, [orgData, isLoading, orgAlias, error]);

  /** Hide branding stuff like logos, etc. when we are still identifying organisation */
  const hideBranding =
    organisationAlias === organisationCountry.bcAlias || !!error
      ? false
      : !organisationAlias || (!!organisationAlias && !orgData);

  return {
    hideBranding,
    showApp,
    orgData,
    logoUrl: orgData?.logoCdnUrl,
    extraLogoUrl: orgData?.extraLogoCdnUrl,
    faviconUrl: orgData?.faviconCdnUrl,
  };
};
