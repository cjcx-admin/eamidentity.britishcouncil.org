import { registrationUkvi } from '.';
import { AppThunk } from '..';

export const loadRegIdDocument =
  (regId: string): AppThunk =>
  async (dispatch) => {
    const registrationId = Number(regId || '');

    if (!registrationId || isNaN(registrationId)) {
      throw new Error(`Incorrect registration ID was provided`);
    }

    dispatch(registrationUkvi.api.getRegistrationIdFilesUkvi(registrationId));
  };
