import { Dispatch } from '@reduxjs/toolkit';
import { setOneTrustLanguage } from 'ors-translations';

import i18next from 'common/i18n';
import { language } from 'store/language';
import { GoogleTagManager } from '@britishcouncil/react-analytics';

export const switchLanguage = (lang: string, dispatch: Dispatch) => {
  i18next.changeLanguage(lang);
  dispatch(language.actions.setLanguage(lang));
  setOneTrustLanguage(lang);

  GoogleTagManager.updateDataLayer({
    uiLang: lang,
  });
};
