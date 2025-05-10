import { PropsWithChildren } from 'react';
import { IntlProvider } from 'react-intl';
import { defaultLanguage, pseudoLanguage } from 'ors-translations';

import { useLocale } from 'common';

export const BCIntlProvider = ({ children }: PropsWithChildren) => {
  const { locale: selectedLang } = useLocale();
  const locale = !selectedLang || selectedLang === pseudoLanguage ? defaultLanguage : selectedLang;

  return <IntlProvider locale={locale}>{children}</IntlProvider>;
};
