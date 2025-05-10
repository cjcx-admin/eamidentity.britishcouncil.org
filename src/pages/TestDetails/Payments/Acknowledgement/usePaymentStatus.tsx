import { useLocation, useParams } from 'react-router-dom';
import queryString from 'query-string';
import { registrationClient as registrationClientMod } from 'ors-api/mod';
import { registrationClient as registrationClientIol } from 'ors-api/iol';

import { getExamContext } from 'core';
import { useClient } from 'common';

export function usePaymentStatus() {
  const params = useParams();
  const location = useLocation();

  const registrationId = Number(params.regId || '');
  const { paymentId } = queryString.parse(location.search);
  const isIol = getExamContext() === 'iol';
  const paymentIdentifier = (paymentId as string) || '';

  const { data: paymentStatusIol, status: checkStatusIol } = useClient(
    () => registrationClientIol.getPaymentStatus(registrationId, paymentIdentifier),
    [isIol, paymentIdentifier],
    { enabled: isIol && paymentIdentifier !== '' }
  );

  const { data: paymentStatusMod, status: checkStatusMod } = useClient(
    () => registrationClientMod.getPaymentStatus(registrationId, paymentIdentifier),
    [isIol, paymentIdentifier],
    { enabled: !isIol && paymentIdentifier !== '' }
  );

  return {
    paymentStatusIol,
    checkStatusIol,
    paymentStatusMod,
    checkStatusMod,
  };
}
