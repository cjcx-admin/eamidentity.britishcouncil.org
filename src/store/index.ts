import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import expireReducer from 'redux-persist-expire';
import { PersistConfig, PersistedState } from 'redux-persist/es/types';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootReducer from './rootReducer';
import { initApp } from './initApp';
import appConfig from 'appConfig';
import { api } from './shared/api';

export * from './common';
export * from './countries.service';
export * from './preparation.service';
export * from './helps.service';

const migrations = (state: PersistedState, newVersion: number): Promise<PersistedState> => {
  const storedVersion = state?._persist?.version;
  if (storedVersion && newVersion > storedVersion) {
    return Promise.resolve({} as any);
  }

  return Promise.resolve(state);
};

const persistConfig: PersistConfig<any> = {
  key: 'ttp',
  storage,
  whitelist: ['auth', 'featureFlags', 'language', 'osrBooking', 'selfServiceTransfer'],
  version: appConfig.storeVersion,
  migrate: migrations,
  stateReconciler: autoMergeLevel2,

  transforms: [
    expireReducer('auth', { expireSeconds: 3600 * 24, autoExpire: true }),
    expireReducer('featureFlags', { expireSeconds: 3600 * 24 * 7, autoExpire: true }),
    expireReducer('language', { expireSeconds: 3600 * 24 * 7, autoExpire: true }),
  ],
};

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
  reducer: persistReducer(persistConfig, rootReducer),
});

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnData = void> = ThunkAction<
  ReturnData,
  RootState,
  undefined,
  Action<string>
>;

export type ThunkApi = {
  dispatch: ThunkDispatch<RootState, undefined, Action<string>>;
  getState?: () => RootState;
};

export type RootState = ReturnType<typeof rootReducer>;

export default store;

const persistor = persistStore(store, {}, () => {
  store.dispatch(initApp() as any);
});

export { persistor };
