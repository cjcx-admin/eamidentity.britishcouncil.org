import { GoogleTagManager } from '@britishcouncil/react-analytics';
import { SS } from '@britishcouncil/react-common';

import { FullRegistrationDataLayer } from './models';

const GTM_LS_KEY = 'GTM_DL';

/** This method stores in LS the updated dataLayer and then emits new stuff to GTM */
export function updateDataLayer(value: Partial<FullRegistrationDataLayer>) {
  const val = SS.read<Partial<FullRegistrationDataLayer>>(GTM_LS_KEY);
  const updated = { ...val, ...value };
  SS.write(GTM_LS_KEY, updated);

  GoogleTagManager.updateDataLayer(value);
}

/** Use it from VirtualPageView to populate dataLayer with persisted state */
export function getStoredData(): Partial<FullRegistrationDataLayer> {
  return SS.read<Partial<FullRegistrationDataLayer>>(GTM_LS_KEY);
}

/** Just clear the storage of the GTM dataLayer. It does not touch dataLayer directly */
export function clearDataLayer() {
  SS.remove(GTM_LS_KEY);
}
