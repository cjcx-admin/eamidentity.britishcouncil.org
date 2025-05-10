import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { includesInUrl } from 'ors-utils';
import { useDispatch, useSelector } from 'core';
import { converters } from 'common';
import { receivingOrgs } from 'store/receivingOrgs';

export const useIolRoSettings = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const isIol = includesInUrl('/iol/');
  const reg = useSelector((s) => s.registration.ttRegistrationIol);
  const { resultSettingsIol } = useSelector((s) => s.receivingOrgs);

  const details = useMemo(
    () =>
      reg &&
      resultSettingsIol.data &&
      converters.toUnifiedResults().fromIolRegDetails(reg, resultSettingsIol.data),
    [reg, resultSettingsIol.data]
  );

  useEffect(() => {
    if (isIol) {
      details && dispatch(receivingOrgs.thunks.getSelectedReceivingOrgs(details));
    }
  }, [details, dispatch, isIol]);

  useEffect(() => {
    if (isIol) {
      dispatch(receivingOrgs.api.getResultSettingsIol(Number(params.regId || '')));
    }
  }, [isIol, dispatch, params.regId]);
};
