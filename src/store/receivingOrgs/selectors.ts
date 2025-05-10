import { createSelector } from '@reduxjs/toolkit';
import { AwardingBodySystem } from 'ors-api/mod';

import { RootState } from '..';
import { getExamContext } from 'core';

export const canAddReceivingOrgs = createSelector(
  (state: RootState) => state.receivingOrgs.canAddOrEditReceivingOrganisation,
  (state: RootState) => state.registration,
  (canAddOrEditReceivingOrganisation, registration) => {
    const isIol = getExamContext() === 'iol';
    const awardingBodySystem = registration.registrationInCentre?.awardingBodySystem;
    const isMod = !isIol && awardingBodySystem === AwardingBodySystem.CMDS;

    return isIol
      ? !!registration.allowedActions.data?.canAddReceivingOrgs
      : isMod
      ? !!registration.allowedActions.data?.canAddEdeliveryReceivingOrgs ||
        !!registration.allowedActions.data?.canAddPostalReceivingOrgs
      : canAddOrEditReceivingOrganisation;
  }
);
