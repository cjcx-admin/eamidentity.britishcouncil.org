import { useEffect } from 'react';
import { LoadingCard } from 'ors-ui';

import { useAuthSlice } from 'store/authSlice';

export const OidcLogout = () => {
  const { handleLogOut } = useAuthSlice();

  useEffect(() => {
    handleLogOut();
  }, []);

  return <LoadingCard />;
};
