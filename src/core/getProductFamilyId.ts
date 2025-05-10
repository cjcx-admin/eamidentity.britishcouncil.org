import { ProductFamilies } from 'ors-api/mod';

import { getExamContext } from './getExamContext';

/**
 * Get ProductFamilyId based on getExamContext
 */
export const getProductFamilyId = (): ProductFamilies | undefined => {
  switch (getExamContext()) {
    case 'ors':
      return ProductFamilies.IELTS;
    case 'ukvi':
      return ProductFamilies.UKVI;
    /** ProductFamilies.UkviOnline and ProductFamilies.IeltsOnline
     * to be taken into consideration if they need to be
     * */
    default:
      return ProductFamilies.IELTS;
  }
};
