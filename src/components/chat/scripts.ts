import { appSettings, Settings } from 'ors-utils';

import appConfig from 'appConfig';
import { initSentry } from 'initSentry';
import { PrepopulatedData, WindowChatbot } from './models';

const initESW = (
  gslbBaseURL: string | null,
  liveAgentChatSettings: Settings['liveAgentChat'],
  prepopulatedPrechatFields?: PrepopulatedData
) => {
  const windowChat: WindowChatbot = window;
  const embedded_svc = windowChat.embedded_svc;

  const { surveysUrl, salesforceURL, deploymentId, organizationId, devName, instanceId, buttonId } =
    liveAgentChatSettings;

  embedded_svc.settings.displayHelpButton = true;
  embedded_svc.settings.language = '';

  embedded_svc.settings.enabledFeatures = ['LiveAgent'];
  embedded_svc.settings.entryFeature = 'LiveAgent';
  embedded_svc.settings.smallCompanyLogoImgURL =
    'https://bccdn.britishcouncil.org/dev/bc-logo-white-compact.svg';

  embedded_svc.settings.prepopulatedPrechatFields = prepopulatedPrechatFields ?? {
    FirstName: '',
    LastName: '',
    Email: '',
    Subject: '',
  };

  /* Init Chatbot */
  embedded_svc.init(salesforceURL, surveysUrl, gslbBaseURL, organizationId, devName, {
    baseLiveAgentContentURL: `https://c.${instanceId}.salesforceliveagent.com/content`,
    deploymentId,
    buttonId,
    baseLiveAgentURL: `https://d.${instanceId}.salesforceliveagent.com/chat`,
    eswLiveAgentDevName: devName,
    isOfflineSupportEnabled: false,
  });
};

const loadChatScript = async (data?: PrepopulatedData) => {
  const windowChat: WindowChatbot = window;

  const { liveAgentChat } = await appSettings(appConfig, initSentry, import.meta.env.REACT_APP_ENV);

  try {
    if (!windowChat.embedded_svc) {
      var s = document.createElement('script');
      s.setAttribute('src', `${liveAgentChat.salesforceURL}/embeddedservice/5.0/esw.min.js`);
      s.onload = function () {
        initESW(null, liveAgentChat, data);
      };
      document.body.appendChild(s);
    } else {
      initESW('https://service.force.com', liveAgentChat, data);
    }
  } catch (e) {
    console.error(e);
  }
};

export { loadChatScript };
