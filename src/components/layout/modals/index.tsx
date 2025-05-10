import { useCallback } from 'react';
import { MissingDataForm, MissingDataModal, NewTermsAccount, TimesUpModal } from 'ors-ui';

import { useSelector, GTM, useDispatch } from 'core';
import { useLocale } from 'common';
import { osrBooking } from 'store/osrBooking';
import { useNavigate, useParams } from 'react-router-dom';
import { appRoutes, nestedAppRoutes } from 'Navigation';
import { useEffect, useState } from 'react';
import { candidate as candidateSlice } from 'store/candidate';
import { TermsShortCodeEnum, includesInUrl, iolLinks, makeTermsUrl } from 'ors-utils';
import { useGetTermsAndConditionsNewestVersionNumberQuery } from 'store/registration';
import { useHomeData } from 'pages/Home/useHomeTests';
import { LanguageOptionsModal } from '../LanguageOptionsModal';

/**
 * Globally available modals
 */
export const Modals = () => {
  const [checkNewTerms, setCheckNewTerms] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { regId } = useParams();

  const org = useSelector((s) => s.organisationCountry.organisationDetails);
  const showTimeUpModal = useSelector((s) => s.osrBooking.reservation?.showTimeUpModal);
  const { registrationInCentre } = useSelector((s) => s.registration);
  const { isLoggedIn } = useSelector((s) => s.auth);
  const { missingDetails, candidate } = useHomeData(true, true);

  const isIol = includesInUrl('/iol/');
  const iolTermsLink = iolLinks.termsConditions;
  const accountTermsShortCode =
    org.data?.accountTermsAndConditions?.shortCode ??
    TermsShortCodeEnum.Global_IELTS_Account_Registration;
  const termsLink = makeTermsUrl({
    shortCode: accountTermsShortCode,
    withBase: true,
  });

  const { data: termsVersion } = useGetTermsAndConditionsNewestVersionNumberQuery(
    { locale: useLocale().locale, shortCode: accountTermsShortCode },
    { skip: !missingDetails }
  );

  const handleTimesUpClose = () => {
    dispatch(osrBooking.actions.clearBooking());
    regId && navigate(nestedAppRoutes(regId).testDetails.osr.chooseSkill);
  };

  const handleMissingDataSubmit = useCallback(
    (val: MissingDataForm) => {
      dispatch(candidateSlice.thunks.handleMissingData(val, termsVersion || 1));
    },
    [dispatch]
  );

  const handleLoginCancellation = useCallback(() => {
    navigate(appRoutes.auth.logout);
  }, [navigate]);

  useEffect(() => {
    /** Delay check for new terms- for some reason modal
      sometimes break page if displaying  to soon */

    const timeout = setTimeout(() => {
      setCheckNewTerms(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {checkNewTerms && (
        <NewTermsAccount
          enableAccountTermsCheck={!org.isLoading && isLoggedIn && !!org.data}
          accountTermsAndConditionsShortCode={org.data?.accountTermsAndConditions?.shortCode}
        />
      )}
      <TimesUpModal
        showModal={!!showTimeUpModal}
        onClose={handleTimesUpClose}
        onHide={() => GTM.trackModal('Hide', 'timesup-modal')}
        onShow={() => GTM.trackModal('Show', 'timesup-modal')}
      />
      <MissingDataModal
        show={missingDetails}
        testTaker={candidate}
        onSubmit={handleMissingDataSubmit}
        onCancel={handleLoginCancellation}
        isIol={isIol}
        termsLinkIol={iolTermsLink}
        termsLink={termsLink}
        isTtp
      />

      <LanguageOptionsModal countryId={registrationInCentre?.countryId} />
    </>
  );
};
