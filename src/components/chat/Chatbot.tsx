import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { includesInUrl } from 'ors-utils';

import { useSelector } from 'core';
import { loadChatScript } from './scripts';

const Chatbot = () => {
  const location = useLocation();
  const isLAInitialized = useRef(false);

  const tt = useSelector((state) => state.registration.ttRegistrationIol?.testTaker);
  const { launchLiveChat } = useSelector((state) => state.registration);

  const prepopulatedData = useMemo(() => {
    return tt
      ? {
          FirstName: tt.firstName,
          LastName: tt.surname,
          Email: tt.email,
          Subject: 'Test Taker Portal',
        }
      : undefined;
  }, [tt]);

  const loadScripts = useCallback(async () => {
    await loadChatScript(prepopulatedData);
  }, [prepopulatedData]);

  useEffect(() => {
    const isIol = includesInUrl('/iol/');
    if (!isIol || !tt) {
      displayChatButton(false);
      return;
    }

    if (isLAInitialized.current) {
      displayChatButton(true);
    } else {
      loadScripts();
      isLAInitialized.current = true;
      displayChatButton(true);
    }
  }, [loadScripts, location.pathname, tt]);

  useEffect(() => {
    if (launchLiveChat) {
      loadScripts();
      isLAInitialized.current = true;
      displayChatButton(true);
    }
  }, [launchLiveChat, loadScripts]);

  return <></>;
};

export { Chatbot };

const displayChatButton = (show: boolean) => {
  const chatBtn = document.querySelector(
    '.embeddedServiceHelpButton .helpButton'
  ) as HTMLDivElement | null;

  if (chatBtn) {
    if (show) {
      chatBtn.style.display = 'block';
      chatBtn.style.visibility = 'visible';
    } else {
      chatBtn.style.display = 'none';
      chatBtn.style.visibility = 'hidden';
    }
  }
};
