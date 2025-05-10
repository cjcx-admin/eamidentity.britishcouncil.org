import { createBrowserHistory } from 'history';
import { createPreserveQueryHistory } from '@britishcouncil/react-common';

/**
 * List of query params that needs to be persisted automatically
 * utm_* params are for Google campaigns and Google Analytics in general
 **/
const queryParams = ['organisation', 'organization', 'utm_source', 'utm_medium', 'utm_campaign'];

export const history = createPreserveQueryHistory(createBrowserHistory, queryParams)({ window });
