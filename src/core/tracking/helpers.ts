import { SimpleLS } from '@britishcouncil/react-common';

/**
 * Stores information about transaction being finished.
 * It is stored separately in LS to assure that each transaction is only tracked once only
 **/
export function recordRegId(regId: string) {
  const ids = SimpleLS.read<string[]>('GTM_REGS_TTP', []);
  ids.push(regId);
  SimpleLS.write('GTM_REGS_TTP', ids);
}

/**
 * Checks if the registrationId is a new one, so that the transaction can be tracked in GTM
 **/
export function isNewTransaction(regId: string): boolean {
  const ids = SimpleLS.read<string[]>('GTM_REGS_TTP', []);

  return !~ids.indexOf(regId);
}
