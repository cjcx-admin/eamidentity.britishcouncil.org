import { combineReducers } from '@reduxjs/toolkit';

import auth from './authSlice';
import featureFlags from './featureFlagsSlice';
import registration from './registration/registrationSlice';
import speaking from './speaking/speakingSlice';
import eor from './eor/eorSlice';
import payments from './payments/paymentsSlice';
import results from './results/resultsSlice';
import receivingOrgs from './receivingOrgs/receivingOrgsSlice';
import organisationCountry from './organisationCountry/organisationCountrySlice';
import language from './language/languageSlice';
import { api } from './shared/api';
import osrBooking from './osrBooking/osrBookingSlice';
import { selfServiceTransfer } from './selfServiceTransfer';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: auth.reducer,
  featureFlags: featureFlags.reducer,
  registration: registration.reducer,
  speaking: speaking.reducer,
  eor: eor.reducer,
  payments: payments.reducer,
  results: results.reducer,
  receivingOrgs: receivingOrgs.reducer,
  organisationCountry: organisationCountry.reducer,
  language: language.reducer,
  osrBooking: osrBooking.reducer,
  selfServiceTransfer: selfServiceTransfer.reducer,
});

export default rootReducer;
