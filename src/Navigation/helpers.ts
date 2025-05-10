import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import { history } from 'store/historyState';
import { ExamContext } from 'core';
import { getExamContext } from 'core/getExamContext';
import appConfig from 'appConfig';
import { TabName } from '../pages/TestDetails/components/TabWrapper/models';
import { appRoutes } from './appRoutes';

/**
 * With React Router 6, we are not able to pass "baseName" to "createBrowserHistory"
 * so to make history.push() work, we need to use "base" part of the URL (i.e. "/").
 */
export const routeWithBase = (route: string) => `/${appConfig.subdirectory}${route}`;
export const navigateWithBase = (route: string, config?: { method?: 'push' | 'replace' }) =>
  history[config?.method || 'push'](routeWithBase(route));

/** Set active tab within registration tabs. */
export const useActiveTabs = (tab: TabName) => {
  type RegistrationTabsOutletContext = { setActiveTab: (tabName: TabName) => void };
  const { setActiveTab } = useOutletContext<RegistrationTabsOutletContext>();
  useEffect(() => setActiveTab(tab), [setActiveTab, tab]);
};

// TODO: Maybe find a better declarative way to handle nested routes? Maybe helper function which parse passed-in route and create full path based on "index" key?
/** Nested routes as a full path. Use when you need to navigate to different part (different tab) of the app. */
export const nestedAppRoutes = (regId?: string | number, config?: { ctx: ExamContext }) => {
  const id = String(regId ?? ':regId');
  const ctx = config?.ctx ?? getExamContext() ?? 'ors';

  const cb = appRoutes.changeBooking;
  const cbi = '/' + appRoutes.changeBooking.index.replace(':ctx', ctx).replace(':regId', id);

  const td = appRoutes.testDetails;
  const tdi = '/' + appRoutes.testDetails.index.replace(':ctx', ctx).replace(':regId', id);

  const nested: Pick<typeof appRoutes, 'changeBooking' | 'testDetails'> = {
    changeBooking: {
      index: cbi,
      transfer: `${cbi}/${cb.transfer}`,
      selfServiceTransfer: {
        index: `${cbi}/${cb.selfServiceTransfer.index}`,
        chooseDate: `${cbi}/${cb.selfServiceTransfer.index}/${cb.selfServiceTransfer.chooseDate}`,
        chooseTest: `${cbi}/${cb.selfServiceTransfer.index}/${cb.selfServiceTransfer.chooseTest}`,
        changeSpeaking: `${cbi}/${cb.selfServiceTransfer.index}/${cb.selfServiceTransfer.changeSpeaking}`,
        review: `${cbi}/${cb.selfServiceTransfer.index}/${cb.selfServiceTransfer.review}`,
      },
      cancel: `${cbi}/${cb.cancel}`,
      speaking: `${cbi}/${cb.speaking}`,
      cancelAcknowledgement: `${cbi}/${cb.cancelAcknowledgement}`,
      transferAcknowledgement: `${cbi}/${cb.transferAcknowledgement}`,
    },
    testDetails: {
      index: tdi,
      bookingDetails: `${tdi}/${td.bookingDetails}`,
      dateLocation: `${tdi}/${td.dateLocation}`,
      tt: `${tdi}/${td.tt}`,
      results: `${tdi}/${td.results}`,
      check: `${tdi}/${td.check}`,
      payments: {
        index: `${tdi}/${td.payments.index}`,
        offlinePaymentDetails: `${tdi}/${td.payments.index}/${td.payments.offlinePaymentDetails}`,
        paymentProofUpload: `${tdi}/${td.payments.index}/${td.payments.paymentProofUpload}`,
        paymentAcknowledgement: `${tdi}/${td.payments.index}/${td.payments.paymentAcknowledgement}`,
      },
      recognisingOrgs: {
        index: `${tdi}/${td.recognisingOrgs.index}`,
      },
      help: {
        index: `${tdi}/${td.help.index}`,
        helpForm: `${tdi}/${td.help.index}/${td.help.helpForm}`,
      },
      eor: {
        index: `${tdi}/${td.eor.index}`,
        request: `${tdi}/${td.eor.index}/${td.eor.request}`,
        acknowledgement: `${tdi}/${td.eor.index}/${td.eor.acknowledgement}`,
      },
      osr: {
        index: `${tdi}/${td.osr.index}`,
        webForm: `${tdi}/${td.osr.index}/${td.osr.webForm}`,
        chooseSkill: `${tdi}/${td.osr.index}/${td.osr.chooseSkill}`,
        chooseDate: `${tdi}/${td.osr.index}/${td.osr.chooseDate}`,
        chooseTest: `${tdi}/${td.osr.index}/${td.osr.chooseTest}`,
        review: `${tdi}/${td.osr.index}/${td.osr.review}`,
      },
    },
  };

  return nested;
};
