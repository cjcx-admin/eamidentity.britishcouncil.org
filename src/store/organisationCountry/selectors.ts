import { createSelector } from '@reduxjs/toolkit';
import { hasOrganisationInUrl } from 'ors-utils';
import { hasIeltsUsaUrl } from 'ors-translations';
import { MarketingPref } from 'ors-ui';
import { RootState } from '..';

export const getMarketingPreferences = (state: RootState): MarketingPref | undefined => {
  const ieltsSpecific = state.organisationCountry.organisationDetails.data;
  if (ieltsSpecific) {
    const {
      marketingPreferenceOrganisationOnly,
      marketingPreferenceOrganisationAndThird,
      marketingPreferenceNone,
    } = ieltsSpecific;

    return {
      marketingPreferenceOrganisationOnly,
      marketingPreferenceOrganisationAndThird,
      marketingPreferenceNone,
    };
  }
};

export const getOrgId = createSelector(
  (state: RootState) => state.organisationCountry?.organisationDetails?.data?.organisationId,
  (orgId) => {
    if (hasIeltsUsaUrl()) {
      return hasOrganisationInUrl() ? orgId : undefined;
    }
    return orgId;
  }
);
