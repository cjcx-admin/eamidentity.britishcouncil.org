import { useEffect } from 'react';
import { includesInUrl } from 'ors-utils';
import { AwardingBodySystem } from 'ors-api/mod';

import { converters, useLocale } from 'common';
import { getProductFamilyId, useDispatch, useSelector } from 'core';
import { receivingOrgs } from 'store/receivingOrgs';
import { isEorComplete } from '../../Results/Eors/helpers';
import { useGetOrgCountryConfigurationQuery } from 'store/organisationCountry';
import { useGetCentreConfigurationQuery } from 'store/results';

export const useInCentreRoDetails = () => {
  const dispatch = useDispatch();
  const { locale } = useLocale();

  const isIol = includesInUrl('/iol/');
  const isUkvi = includesInUrl('/ukvi/');

  const { data: eorRequestDetails } = useSelector((s) => s.eor.eorRequestDetails);
  const reg = useSelector((s) => s.registration.registrationInCentre);
  const eorComplete =
    reg && eorRequestDetails?.details?.status
      ? isEorComplete({
          eorStatus: eorRequestDetails?.details?.status,
          isIwas: reg.awardingBodySystem === AwardingBodySystem.IWAS,
        })
      : false;
  const centreId = reg?.centre?.centreId;
  const organisationCountryId = reg?.organisationCountryId;
  const details = reg && converters.toUnifiedResults().fromIcUkviRegDetails(reg, eorComplete);
  const { data: centreConfig } = useGetCentreConfigurationQuery({ locale, centreId: centreId });
  const { data: orgCountryConfig } = useGetOrgCountryConfigurationQuery({
    locale: locale,
    organisationCountryId: organisationCountryId,
    productFamilyId: getProductFamilyId(),
  });
  const isCmds = details?.awardingBodySystem === AwardingBodySystem.CMDS;

  const getReceivingOrgsData =
    isUkvi && !isCmds
      ? receivingOrgs.thunks.getReceivingOrgsDataUkvi
      : receivingOrgs.thunks.getReceivingOrgsData;

  useEffect(() => {
    if (!isIol) {
      details &&
        centreConfig &&
        orgCountryConfig &&
        dispatch(getReceivingOrgsData({ resultsRequest: details, orgCountryConfig, centreConfig }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    isIol,
    details?.registrationId,
    dispatch,
    getReceivingOrgsData,
    centreConfig,
    orgCountryConfig,
  ]);
};
