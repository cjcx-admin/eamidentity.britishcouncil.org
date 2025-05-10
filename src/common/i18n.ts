import { initTranslations } from 'ors-translations';
import { logger } from 'ors-utils';

/**
 * If you need to access the t function or the i18next instance from outside
 * of a React component you can simply import "./i18n.ts" and use the exported i18next instance
 */
const i18next = initTranslations({
  logMissingTranslationKeyAction: (lngs: readonly string[], ns: string, key: string) => {
    return logger.logMissingTranslationKey(lngs, ns, key);
  },
});
export default i18next;
