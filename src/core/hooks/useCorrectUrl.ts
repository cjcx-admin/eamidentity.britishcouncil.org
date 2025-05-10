import { useEffect } from 'react';
import { appSettings } from 'ors-utils';
import { hasIeltsUsaUrl } from 'ors-translations';
import appConfig from 'appConfig';
import { initSentry } from 'initSentry';

export const useCorrectUrl = (isIeltsUsaContext?: boolean) => {
  const getIeltsUsaUrl = async () => {
    if (isIeltsUsaContext && !hasIeltsUsaUrl()) {
      const settings = await appSettings(appConfig, initSentry, import.meta.env.REACT_APP_ENV);

      if (settings.ieltsUsaUrl) {
        return (window.location.href = `${settings.ieltsUsaUrl}${window.location.pathname}`);
      }
    }
  };

  useEffect(() => {
    getIeltsUsaUrl();
  }, [isIeltsUsaContext]);
};
