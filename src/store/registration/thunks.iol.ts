import { registrationIol, registration } from '.';
import { AppThunk } from '..';

export const loadRegDetailsIol =
  (regId: string): AppThunk =>
  async (dispatch) => {
    dispatch(registration.actions.clearRegDetails());

    const registrationId = Number(regId || '');
    await dispatch(registrationIol.api.getRegistrationIol(registrationId));
    await dispatch(registrationIol.api.getAllowedActions(registrationId));
  };
