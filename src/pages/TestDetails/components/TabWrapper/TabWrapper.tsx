import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { Container } from '@britishcouncil/react-solas';
import { AwardingBodySystem } from 'ors-api/ors2';
import { includesInUrl } from 'ors-utils';
import { ieltsUsaSpecific } from 'ors-translations';
import { LoadingCard } from 'ors-ui';

import { useCorrectUrl, useSelector } from 'core';
import { useRegistration } from 'common';
import { Chatbot } from 'components';
import RegNotFound from '../../../errorPages/RegNotFound';
import { RegDetailsHeader } from '.';
import { nestedAppRoutes } from 'Navigation';

export const TabWrapper = () => {
  const { t } = useTranslation();
  const { reg, regNotFound } = useRegistration();
  const { ttRegistrationIol, registrationInCentre } = useSelector((s) => s.registration);

  useCorrectUrl(
    registrationInCentre && registrationInCentre.countryId === ieltsUsaSpecific.countryId
  );

  const isCmds = registrationInCentre?.awardingBodySystem === AwardingBodySystem.CMDS;

  if (regNotFound) {
    return <RegNotFound />;
  }

  if (!reg) {
    return <LoadingCard>{t('APPB2C.common.basic.oneSecond')}</LoadingCard>;
  }

  const osrChooseDatePage = includesInUrl(nestedAppRoutes().testDetails.osr.chooseDate);
  const osrChooseTestPage = includesInUrl(nestedAppRoutes().testDetails.osr.chooseTest);
  const osrChooseReviewPage = includesInUrl(nestedAppRoutes().testDetails.osr.review);
  const disableHeader = !(osrChooseDatePage || osrChooseTestPage || osrChooseReviewPage);

  return (
    <StyledArticle>
      {disableHeader && (
        <RegDetailsHeader
          registration={registrationInCentre}
          registrationIol={ttRegistrationIol}
          isCmds={isCmds}
        />
      )}

      <Container>
        <Outlet />
        <Chatbot />
      </Container>
    </StyledArticle>
  );
};

const StyledArticle = styled.article`
  min-width: 360px;
`;
