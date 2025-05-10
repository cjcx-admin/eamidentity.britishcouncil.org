import { useEffect, useState } from 'react';
import { appSettings } from 'ors-utils';
import { CrowdinContext } from 'ors-ui';

import appConfig from 'appConfig';
import { initSentry } from 'initSentry';

export const Crowdin = () => {
  const [isProd, setIsProd] = useState(false);
  const [crowdinProject, setCrowdinProject] = useState('');

  useEffect(() => {
    async function getEnvSettings() {
      const settings = await appSettings(appConfig, initSentry, import.meta.env.REACT_APP_ENV);
      setIsProd(settings.environment === 'PROD');
      setCrowdinProject(settings.Crowdin.project);
    }
    getEnvSettings();
  }, []);

  return <CrowdinContext isProd={isProd} project={crowdinProject} />;
};
