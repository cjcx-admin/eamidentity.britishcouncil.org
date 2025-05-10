import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Divider } from '@britishcouncil/react-solas-ors3';
import { AwardingBodySystem } from 'ors-api/ors2';
import { ProductFamilies } from 'ors-api/mod';
import { appSettings, getOrganisationAlias } from 'ors-utils';
import { ApplyBoardWidget, TestTaker, breakpoints } from 'ors-ui';

import appConfig from 'appConfig';
import { initSentry } from 'initSentry';
import { useGetCountriesQuery } from 'store';
import { GTM } from 'core';
import { useLocale } from 'common';

type Props = {
  registrationId: number;
  candidate: {
    email?: string;
    idNumber?: string;
    idExpiry?: string;
    firstName?: string;
    surname?: string;
    gender?: string;
    dob?: string;
    addressLine1?: string;
    addressLine2?: string;
    addressLine3?: string;
    addressLine4?: string;
    postCode?: string;
    countryId?: number;
  };
  districtName?: string;
  date?: string;
  header?: string;
};

export const ApplyBoard = ({ registrationId, candidate, districtName, date, header }: Props) => {
  const organisationAlias = getOrganisationAlias();
  const { data: countries } = useGetCountriesQuery({
    locale: useLocale().locale,
    awardingBodySystem: AwardingBodySystem.IWAS,
    productFamilyId: ProductFamilies.IELTS,
  });
  const countryName = countries?.find((c) => c.id === candidate.countryId)?.name;

  const [applyBoardScript, setApplyBoardScript] = useState('');
  const [applyBoardStylesheet, setApplyBoardCss] = useState('');
  const [environment, setEnvironment] = useState('');

  const show =
    !organisationAlias &&
    !!date &&
    !!districtName &&
    !!countryName &&
    !!applyBoardScript &&
    !!applyBoardStylesheet;

  const testTaker: TestTaker = {
    ...candidate,
    country: countryName,
  };

  useEffect(() => {
    async function getApplyBoardSettings() {
      const settings = await appSettings(appConfig, initSentry, import.meta.env.REACT_APP_ENV);
      setApplyBoardScript(settings.ApplyBoardWidget.js);
      setApplyBoardCss(settings.ApplyBoardWidget.css);
      setEnvironment(settings.environment);
    }
    getApplyBoardSettings();
  }, []);

  useEffect(() => {
    const eventHandler = (event: any) => {
      GTM.trackEvent('applyBoardWidgetEvent', event.detail);
    };

    document.addEventListener('ApplyBoard Widget Event', eventHandler);

    return () => document.removeEventListener('ApplyBoard Widget Event', eventHandler);
  }, []);

  return show ? (
    <>
      <Divider />
      {header && <BoardHeader>{header}</BoardHeader>}
      <ApplyBoardWidget
        applyBoardScript={applyBoardScript}
        applyBoardStylesheet={applyBoardStylesheet}
        environment={environment}
        registrationId={registrationId}
        testTaker={testTaker}
        lrwDate={date}
        locationName={districtName!}
      />
      <br />
    </>
  ) : (
    <></>
  );
};

const BoardHeader = styled.h2`
  text-align: center;

  @media (min-width: ${breakpoints['screen-md-min']}px) {
    text-align: unset;
    margin-left: 25px;
  }
`;
