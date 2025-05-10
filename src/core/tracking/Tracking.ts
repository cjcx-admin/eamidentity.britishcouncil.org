import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GoogleTagManager } from '@britishcouncil/react-analytics';
import { getGA4PurchaseEvent, ITrackCommerceEvent } from 'ors-utils';

import { updateDataLayer, getStoredData } from './GtmManager';
import { FullRegistrationDataLayer } from './models';
import { isNewTransaction, recordRegId } from './helpers';

/**
 * Fun facts: GTM Events are pushed only to dataLayer and are not persisted further.
 * Whereas update method does push data to dataLayer and persist it
 **/
export const GTM = {
  update(value: Partial<FullRegistrationDataLayer>) {
    updateDataLayer(value);
  },
  updateAbTests(value: any) {
    const val = value ?? {};
    const gtmReadyFeatureFlags = Object.keys(val)
      .map((k) => k + '=' + val[k])
      .join(',');

    GoogleTagManager.updateDataLayer({
      abExperiment: gtmReadyFeatureFlags,
    });
  },
  trackEvent(eventName: string, value?: Partial<FullRegistrationDataLayer>) {
    GoogleTagManager.updateDataLayer({
      event: eventName,
    });
    if (value) {
      updateDataLayer(value);
    }
  },
  trackPageView(url: string, name?: string) {
    GoogleTagManager.updateDataLayer({
      event: 'VirtualPageview',
      virtualPageURL: url,
      virtualPageTitle: name || '',
      ...getStoredData(),
    });
  },
  trackModal(action: 'Show' | 'Hide', modalName: string) {
    GoogleTagManager.updateDataLayer({
      event: 'modal',
      eventCategory: 'Modal',
      eventAction: action,
      eventLabel: modalName,
    });
  },
  trackError(label: string, action?: string) {
    GoogleTagManager.updateDataLayer({
      event: 'error',
      eventCategory: 'IELTS',
      eventAction: `${action ?? getPageName()} - error`,
      eventLabel: label,
    });
  },
  trackTransSuccess(event: ITrackCommerceEvent) {
    if (isNewTransaction(event.refNumber)) {
      recordRegId(event.refNumber);

      const purchaseData = getGA4PurchaseEvent(event);

      window.gtag('event', 'purchase', purchaseData);
    }
  },
  trackTransFailure(event: ITrackCommerceEvent) {
    if (isNewTransaction(event.refNumber)) {
      recordRegId(event.refNumber);

      const purchaseData = getGA4PurchaseEvent(event);

      window.gtag('event', 'purchase', purchaseData);
    }
  },
};

/**
 * Set up a global hook that will emit page change event to Google Analytics
 */
export function usePageViewsInGA() {
  let location = useLocation();

  useEffect(() => {
    /**
     * It's like this because we want to have a full pathname with our VirtualDirectory
     * It should not be called on BOOKING_COMPLETE route as this page handles it on its own
     */

    const url = window.location.pathname.replace(/[0-9]/g, '').replace(/\/\//g, '/');
    let name = url.split('/').pop();

    if (name === '') {
      name = url.split('/')[url.split('/').length - 2];
    }

    if (location.pathname === '/') {
      name = 'home-page';
    }

    GTM.trackPageView(url, name);
  }, [location]);
}

export enum ExamFormat {
  PB = 1,
  CD = 2,
}

export interface IPageNavigationEvent {
  countryTagCode: string;
  event: string;
  virtualPageTitle?: string;
  virtualPageURL?: string;
}

/**
 * Get Page name from current route, e.g. "/ttp/find-test" => "Find test"
 */
const getPageName = () => {
  const route = window.location.pathname;
  if (route === '/ttp/') {
    return 'home page';
  }

  const routesToAvoid = ['', 'ttp'];
  const filtered = route
    .split('/')
    .filter((s) => !routesToAvoid.includes(s) && !Number(s))
    .map((s) => s.replace('-', ' '))
    .join(' ');
  const capitalized = filtered.charAt(0).toUpperCase() + filtered.slice(1);
  return capitalized;
};
