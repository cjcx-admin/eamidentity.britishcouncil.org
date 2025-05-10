import { Navigate, useParams } from 'react-router-dom';
import { includesInUrl } from 'ors-utils';
import { appRoutes } from './appRoutes';
import { nestedAppRoutes } from './helpers';

/** Switch registrtion context to ORS when user try to visit app without any context within URL. */

export const TestDetailsComp = () => {
  const { regId } = useParams();
  const isIol = includesInUrl('/iol/');
  const ctx = isIol ? 'iol' : 'ors';

  if (includesInUrl(appRoutes.testDetails.tt)) {
    return <Navigate to={nestedAppRoutes(regId, { ctx }).testDetails.tt} />;
  } else if (includesInUrl(appRoutes.testDetails.results)) {
    return <Navigate to={nestedAppRoutes(regId, { ctx }).testDetails.results} />;
  } else if (includesInUrl(appRoutes.testDetails.payments.index)) {
    return <Navigate to={nestedAppRoutes(regId, { ctx }).testDetails.payments.index} />;
  } else if (includesInUrl(appRoutes.testDetails.help.index)) {
    return <Navigate to={nestedAppRoutes(regId, { ctx }).testDetails.help.index} />;
  } else if (includesInUrl(appRoutes.testDetails.eor.index)) {
    return <Navigate to={nestedAppRoutes(regId, { ctx }).testDetails.eor.index} />;
  } else if (includesInUrl(appRoutes.testDetails.dateLocation)) {
    return <Navigate to={nestedAppRoutes(regId, { ctx }).testDetails.dateLocation} />;
  } else if (includesInUrl(appRoutes.testDetails.recognisingOrgs.index)) {
    return <Navigate to={nestedAppRoutes(regId, { ctx }).testDetails.recognisingOrgs.index} />;
  }
  return <Navigate to={nestedAppRoutes(regId, { ctx }).testDetails.dateLocation} />;
};
