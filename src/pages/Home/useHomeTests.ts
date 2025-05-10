import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { DateTime } from 'luxon';
import { orderBy } from 'lodash-es';
import { ApiError, parseApiError } from '@britishcouncil/react-common';
import { countryIsoCode2, isAdult } from 'ors-utils';
import { Candidate } from 'ors-api/ors2';

import { useCorrectUrl, useSelector } from 'core';
import {
  loadMainCandidate,
  loadMinorsCandidates,
  loadCandidateExams,
  loadCandidateFromMcr,
  loadCandidateIolExams,
  loadCandidateUkviExams,
} from './api';
import { registration } from 'store/registration';
import { payments } from 'store/payments';
import { loadProfile } from 'store/authSlice';
import { useLocale, UnifiedTestTakerExams } from 'common';
import { appRoutes, navigateWithBase } from 'Navigation';
import { getLastExam, unifySummary, promiseHelperAllSettled } from './helpers';
import { useAllAccountTests } from './useAllAccountTests';

const candidateInitData: Candidate = {
  id: 0,
  isParent: true,
  isMinor: false,
  idDoesNotExpire: false,
  smsNotificationsAllowed: false,
};

export function useHomeTests(summary?: UnifiedTestTakerExams) {
  const recentTest = summary?.past
    ?.filter((t) => t.status === 'awaiting-results' || t.status === 'has-results')
    .filter((t) => DateTime.fromISO(t.lrwSortDate).plus({ days: 29 }) >= DateTime.now())
    .pop();
  const showNoUpcoming = !recentTest && (!summary?.upcoming || summary.upcoming.length < 1);
  const showRecentTest = recentTest && (!summary?.upcoming || summary.upcoming.length < 1);
  const pastTests =
    summary?.past?.filter(
      (e) => !showRecentTest || e.registrationId !== recentTest?.registrationId
    ) || [];

  const allExams = [...(summary?.past ?? []), ...(summary?.upcoming ?? [])];
  const absoluteDaysFromNow = (date: string) =>
    Math.abs(DateTime.fromISO(date).diff(DateTime.now(), 'days').days);

  const nearestOrsAcademicTest = allExams
    .filter((e) => {
      const applyBoardCommonConditions =
        e.mode === 'ors' &&
        e.module === 'ac' &&
        e.status !== 'cancelled' &&
        e.isBcOrganisation &&
        e.countryIsoCode !== countryIsoCode2.HONG_KONG;

      if (e.isFromB2B) return applyBoardCommonConditions && e.isAgentAffiliatedWithApplyBoard;

      return applyBoardCommonConditions;
    })
    .sort((a, b) => absoluteDaysFromNow(b.lrwSortDate) - absoluteDaysFromNow(a.lrwSortDate))
    .pop();

  useCorrectUrl(
    allExams.length > 0 &&
      allExams.every((e) => e.countryIsoCode === countryIsoCode2.UNITED_STATES_OF_AMERICA)
  );

  return {
    recentTest,
    showNoUpcoming,
    showRecentTest,
    pastTests,
    nearestOrsAcademicTest,
  };
}

export function useHomeData(preventRedirect?: boolean, preventLoadAllReg?: boolean) {
  const dispatch = useDispatch();
  const { locale } = useLocale();
  const userId = useSelector((state) => state.auth.userId);
  const mainCandidateId = useSelector((state) => state.auth.profile?.id);
  const { features } = useSelector((state) => state.featureFlags);
  const { profile } = useSelector((state) => state.auth);
  const missingDetails = profile?.needToSupplyMissingDetails ?? false;
  const missingMarketing = profile?.needToUpdateMarketingPreferences ?? false;
  const marketingPreference = profile?.marketingPreference;
  const showDraftProcess = profile?.needToVerifyDraftProcess;
  const stopRedirect = preventRedirect || missingDetails || missingMarketing;

  const [isLoading, setIsLoading] = useState(true);
  const [candidate, setCandidate] = useState<Candidate>(candidateInitData);
  const [mainCandidate, setMainCandidate] = useState<Candidate>(candidateInitData);
  const [error, setError] = useState<ApiError>();
  const [partialError, setPartialError] = useState(false);
  const [summary, setSummary] = useState<UnifiedTestTakerExams>();
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  const { isChecking } = useAllAccountTests(candidates, summary, stopRedirect);
  const loading = isLoading || isChecking;

  /**
   * Load once list of SelfService supported countries
   * Let's store it in LS, so that old CJ can access it
   * It's quite a nasty temporary workaround.
   * I hope (naively) that we will get rid of it shortly...
   */
  useEffect(() => {
    !profile && loadProfile({ dispatch });
  }, [dispatch, profile]);

  /** Load list of candidates for the logged in user */
  useEffect(() => {
    const shouldLoadCandidates =
      mainCandidateId &&
      mainCandidateId !== 0 &&
      missingDetails === false &&
      missingMarketing === false &&
      showDraftProcess === false;
    shouldLoadCandidates &&
      Promise.all([loadMainCandidate(), loadMinorsCandidates()]).then(([mainCandidate, minors]) => {
        const properMinors = minors.map((m) => ({ ...m, isMinor: true }));
        setCandidates(orderBy([mainCandidate, ...properMinors], (c) => c.firstName));

        if (mainCandidate) {
          setCandidate(mainCandidate);
          setMainCandidate(mainCandidate);
        }
      });

    if (missingDetails) {
      loadCandidateFromMcr().then((res) => {
        setCandidate({
          firstName: res?.firstName,
          surname: res?.lastName,
          dob: res?.dateOfBirth,
        } as Candidate);
      });
    }
  }, [userId, mainCandidateId, missingDetails, missingMarketing, showDraftProcess]);

  /** Load list of registrations for selected Test Taker */
  useEffect(() => {
    if (preventLoadAllReg) return;

    const cid = candidate?.id || mainCandidateId;
    if (!cid || !features || showDraftProcess) {
      showDraftProcess && navigateWithBase(appRoutes.draft.replace('/:returnUrl', '/root'));
      return;
    }

    setError(undefined);
    setPartialError(false);
    setIsLoading(true);

    /**
     * Right now IOL doesn't support minors, so we check against 'isMinor' flag.
     * Without this check we would get IOL exams for parent, because now IOL API always returns exams for parent
     * and there is no option to indicate that we want IOL exams for minor only.
     */
    const getIolRegistrations = () =>
      !candidate.isMinor ? loadCandidateIolExams() : Promise.resolve(undefined);

    const getUkviRegistrations = () => loadCandidateUkviExams(cid);

    const setSummaryAndLastExam = (summary: UnifiedTestTakerExams) => {
      setSummary(summary);
      dispatch(registration.actions.setLastExam(getLastExam(summary)));

      /** Ensure that previously viewed registration data does not 'ghost around' when loading another one
       *  (but only when there's more than one to be seen)
       */
      if (
        candidates.length > 1 ||
        (summary.past && summary.past?.length > 1) ||
        (summary.upcoming && summary.upcoming?.length > 1)
      ) {
        dispatch(registration.actions.clearRegDetails());
        dispatch(payments.actions.clearPaymentDetails());
      }
    };

    (Promise && !!Promise.allSettled
      ? Promise.allSettled([loadCandidateExams(cid), getUkviRegistrations(), getIolRegistrations()])
      : promiseHelperAllSettled([
          loadCandidateExams(cid),
          getUkviRegistrations(),
          getIolRegistrations(),
        ])
    )
      .then(([icRes, ukviRes, iolRes]: any) => {
        if ([icRes, ukviRes, iolRes].every((res) => res.status === 'rejected')) {
          setError(parseApiError(icRes.status === 'rejected' && icRes.reason));
          return;
        }

        [icRes, ukviRes, iolRes].some((res) => res.status === 'rejected') && setPartialError(true);

        setSummaryAndLastExam(
          unifySummary(
            locale,
            icRes.status === 'fulfilled' ? icRes.value : undefined,
            ukviRes.status === 'fulfilled' ? ukviRes.value : undefined,
            iolRes.status === 'fulfilled' ? iolRes.value : undefined
          )
        );
      })
      .finally(() => setIsLoading(false));
  }, [
    candidate,
    mainCandidateId,
    dispatch,
    features,
    showDraftProcess,
    candidates.length,
    locale,
    preventLoadAllReg,
  ]);

  return {
    loading,
    error,
    partialError,
    summary,
    candidates,
    mainCandidate,
    candidate,
    setCandidate,
    isAdultMinor: candidate?.isMinor === true && (candidate?.dob ? isAdult(candidate.dob) : false),
    missingDetails,
    missingMarketing,
    marketingPreference,
    isChecking,
  };
}
