import { includesInUrl } from 'ors-utils';
import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';

import { useSelector } from 'core';
import {
  registration,
  registrationIol,
  useGetRegistrationDetailsModQuery,
} from 'store/registration';

export const useRegistration = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const regId = params.regId ?? '';
  const isIol = includesInUrl('/iol/');
  const location = useLocation();

  const { registrationInCentre, ttRegistrationIol, regNotFound } = useSelector(
    (s) => s.registration
  );

  useGetRegistrationDetailsModQuery(+regId, {
    skip: isIol,
    refetchOnMountOrArgChange: true,
  });

  const loadRegistration = useCallback(async () => {
    if (isIol) {
      return dispatch(registrationIol.thunksIol.loadRegDetailsIol(regId));
    }

    dispatch(registration.api.getAllowedActionsMod(Number(regId)));
  }, [dispatch, isIol, regId]);

  useEffect(() => {
    loadRegistration();
  }, [loadRegistration]);

  useEffect(() => {
    if (location.state === 'refreshRegData') {
      loadRegistration();
      location.state = null;
    }
  }, [location, location.state, loadRegistration]);

  return {
    reg: isIol ? ttRegistrationIol : registrationInCentre,
    regNotFound,
  };
};
