import { includesInUrl } from 'ors-utils';
import { ExamMode } from 'common';

export type ExamContext = ExamMode | undefined;

/**
 * Get exam context based on URL
 */
export const getExamContext = (): ExamContext => {
  switch (true) {
    case includesInUrl('/ors/'):
      return 'ors';
    case includesInUrl('/iol'):
      return 'iol';
    case includesInUrl('/ukvi'):
      return 'ukvi';
    default:
      return undefined;
  }
};
