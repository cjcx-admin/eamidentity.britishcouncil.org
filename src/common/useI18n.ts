import { useEffect } from 'react';
import { useSelectedLang } from 'ors-translations';

import { switchLanguage, useDispatch } from 'core';

export const useI18n = () => {
  const dispatch = useDispatch();
  const startLang = useSelectedLang();

  useEffect(() => {
    switchLanguage(startLang, dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
