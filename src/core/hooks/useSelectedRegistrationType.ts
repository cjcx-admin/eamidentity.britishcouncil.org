import { includesInUrl } from 'ors-utils';

export const useSelectedRegistrationType = (isCmds: boolean) => {
  switch (true) {
    case (includesInUrl('/ors') || includesInUrl('/ukvi')) && isCmds:
      return 'mod';
    case includesInUrl('/ors'):
      return 'ors';
    case includesInUrl('/iol'):
      return 'iol';
    case includesInUrl('/ukvi'):
      return 'ukvi';
    default:
      return undefined;
  }
};
