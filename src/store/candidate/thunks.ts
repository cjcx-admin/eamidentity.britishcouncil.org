import { CandidateMarketingPreferences } from 'ors-api/ors2';
import { MissingDataForm } from 'ors-ui';
import { TermsShortCodeEnum } from 'ors-utils';

import { MissingMarketingForm } from '../../pages/Home/MissingMarketingModal';
import { AppThunk } from '..';
import { loadProfile } from '../authSlice';
import { saveCandidateMissingDetails, updateMarketingPreferences } from './api';

export const handleMissingData =
  (val: MissingDataForm, termsVersion: number): AppThunk =>
  async (dispatch, getState) => {
    const orgData = getState().organisationCountry.organisationDetails.data;

    const accountTermsShortCode =
      orgData?.accountTermsAndConditions?.shortCode ??
      TermsShortCodeEnum.Global_IELTS_Account_Registration;

    const { meta } = await dispatch(
      saveCandidateMissingDetails({
        firstName: val.firstName,
        dob: val.dateOfBirth,
        surname: val.lastName,
        marketingPreferences: CandidateMarketingPreferences.None,
        acceptedTermsAndConditionsShortCode: accountTermsShortCode,
        acceptedTermsAndConditionsVersion: termsVersion,
        isIeltsReadyMember: false,
      })
    );

    if (meta.requestStatus === 'rejected') {
      return;
    }

    await loadProfile({ dispatch });
  };

export const handleMissingMarketing =
  (val: MissingMarketingForm): AppThunk =>
  async (dispatch, getState) => {
    await dispatch(updateMarketingPreferences(val.marketingPrefs));
    await loadProfile({ dispatch });
  };
