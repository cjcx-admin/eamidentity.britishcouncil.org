import { useSelector } from 'core';
import { localeFns } from 'ors-utils';

export const useLocale = (timeZoneId?: string) => {
  const locale = useSelector((state) => state.language.currentLanguage);

  const { localeTime, localeDate } = localeFns(locale, timeZoneId);

  return { locale, localeTime, localeDate };
};
