import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'core';
import { appRoutes } from 'Navigation';

export const useChangePass = () => {
  const navigate = useNavigate();
  const { unfulfilled_policies } = useSelector((state) => state.auth);

  useEffect(() => {
    unfulfilled_policies?.includes('CustomResetPasswordAtFirstLogin') &&
      navigate(appRoutes.auth.changePassword);
  }, [navigate, unfulfilled_policies]);
};
