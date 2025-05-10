import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MainContainer } from '@britishcouncil/react-solas-ors3';
import { Outlet } from 'react-router-dom';

import { useSelector } from 'core';
import { converters } from 'common';
import { AlertBar } from './AlertBar';
import { StyledTabs, SuiTab } from './SuiTabs';
import { TabName } from './models';
import { useRecognisingOrgsDetails } from '../../RecognisingOrganisations/utils';

export const RegistrationTabs = () => {
  useRecognisingOrgsDetails();

  const { t } = useTranslation();
  const { registrationInCentre, ttRegistrationIol: regIol } = useSelector((s) => s.registration);

  const [activeTab, setActiveTab] = useState<TabName>();

  const convertedReg =
    (registrationInCentre &&
      converters.toUnifiedAlertBar().fromIcRegDetailsMod(registrationInCentre)) ??
    (regIol && converters.toUnifiedAlertBar().fromIolRegDetails(regIol));
  const regCancelled = convertedReg?.status === 'cancelled';

  const allTabs: SuiTab[] = [
    {
      title: regIol
        ? t('APPB2C.registration.tabs.date')
        : t('APPB2C.registration.tabs.dateLocation'),
      to: 'date-location',
      hide: activeTab === 'booking-details',
    },
    {
      title: t('APPB2C.registration.tabs.bookingDetails'),
      to: 'booking-details',
      hide: activeTab !== 'booking-details',
    },
    { title: t('APPB2C.registration.tabs.candidate'), to: 'candidate' },
    { title: t('APPB2C.registration.tabs.results'), to: 'results', hide: regCancelled },
    {
      title: t('APPB2C.registration.tabs.recognisingOrgs'),
      to: 'recognising-orgs',
      hide: regCancelled,
    },
    {
      title: t('APPB2C.registration.tabs.payments'),
      to: 'payments',
    },
  ];

  const tabs = allTabs.filter((t) => !t.hide).map((t) => ({ ...t, active: t.to === activeTab }));

  return (
    <StyledTabs>
      <AlertBar
        registration={registrationInCentre}
        registrationIol={regIol}
        tabs={tabs}
        convertedReg={convertedReg}
      >
        <MainContainer>
          <Outlet context={{ setActiveTab }} />
        </MainContainer>
      </AlertBar>
    </StyledTabs>
  );
};
