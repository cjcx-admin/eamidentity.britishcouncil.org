import { createAction } from '@reduxjs/toolkit';

/** Place for global actions that can be listened to by all of the slices */

/** Action raised when user logged out. It can be used to clear other slices */
export const globalLogOut = createAction<void>('global/loggedOut');
