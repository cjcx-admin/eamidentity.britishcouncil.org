import { useEffect, useRef, useState } from 'react';
import { AxiosPromise } from 'axios';
import { ApiErrorDetailed, extractApiError } from '@britishcouncil/react-common';
import { BandScoreType, ComponentType } from 'ors-api/mod';
import {
  TermsShortCodeEnum,
  getExamDetailsFromProductId,
  getRegContext,
  getSearchParamSuffix,
  isLifeSkillsExam,
} from 'ors-utils';

import { GTM, getExamContext } from 'core';

export const DASH = '—';

type VD = <D>(v?: D) => D | string;
export const valueOrDash: VD = (val) => (val ? val : DASH);

export type ReqStatus = 'IDLE' | 'PENDING' | 'ERROR';
export type UseClient<D> = {
  status: ReqStatus;
  data?: D;
  error?: ApiErrorDetailed;
};
export type Config = {
  enabled?: boolean;
};

/**
 * Fetch data inside components using client's endpoints
 * @param fn memoized client's function
 * @param refetch array of parameters which, if changed, will trigger a new data fetch
 * @param config additional configuration
 * @param config.enabled if set to false results in staying IDLE without running the client's function
 * */
export const useClient = <D>(
  fn: () => AxiosPromise<D>,
  refetch: Array<any> = [],
  config: Config = { enabled: true }
): UseClient<D> => {
  const [status, setStatus] = useState<ReqStatus>('IDLE');
  const [data, setData] = useState<D>();
  const [error, setError] = useState<ApiErrorDetailed>();

  const isMountedRef = useIsMounted();
  useEffect(() => {
    const run = async () => {
      isMountedRef.current && setStatus(config.enabled ? 'PENDING' : 'IDLE');
      const resp = await Promise.resolve(fn()).catch((e) => {
        setError(extractApiError(e));
        setStatus('ERROR');
      });

      if (isMountedRef.current) {
        resp && resp.data && setData(resp.data);
        setStatus('IDLE');
      }
    };

    config.enabled && run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...refetch, isMountedRef]);

  return { status, data, error };
};

/**
 * Guard against updating state of an unmounted component
 */
export const useIsMounted = () => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  });

  return isMounted;
};

export const rebookExam = ({
  regId,
  countryIsoCode,
  productId,
  districtId,
}: {
  regId: number;
  countryIsoCode?: string;
  productId: string;
  districtId?: number;
}) => {
  GTM.trackEvent('rebook', {
    id: regId,
    country: countryIsoCode,
  });

  const isIol = getRegContext(productId) === 'iol';
  const isUkvi = getRegContext(productId) === 'ukvi';
  const isLifeSkills = isLifeSkillsExam(productId);
  const baseUrl = window.location.origin;
  const searchParams = new URLSearchParams();
  const examFormatAndType = getExamDetailsFromProductId(productId);

  countryIsoCode && searchParams.append('country', countryIsoCode);
  searchParams.append('productId', productId);

  if (isIol || isLifeSkills) {
    const href = baseUrl + getSearchParamSuffix(searchParams);
    window.location.href = href;
  } else {
    districtId && searchParams.append('location', districtId.toString());
    searchParams.append('examType', examFormatAndType.examType.toLowerCase());
    searchParams.append('examFormat', examFormatAndType.examFormat.toLowerCase());

    const inCentreContext = isUkvi ? '/ukvi' : '/ors';
    const href = baseUrl + inCentreContext + '/book-test' + getSearchParamSuffix(searchParams);
    window.location.href = href;
  }
};

export const getOsrSkillName = ({
  skillType,
  withRetake,
  withYourTest,
  withResult,
}: {
  skillType: ComponentType;
  withRetake?: boolean;
  withYourTest?: boolean;
  withResult?: boolean;
}) => {
  switch (skillType) {
    case ComponentType.Listening:
      return withRetake
        ? 'APPB2C.registration.results.osr.chooseDate.retakeListening'
        : withYourTest
        ? 'APPB2C.common.basic.bookingDetails.osrTitle.listening'
        : withResult
        ? 'APPB2C.registration.results.eor.preDeadline.scoresTitleOsr.Listening'
        : 'APPB2C.registration.results.hasResults.scores.Listening';
    case ComponentType.Reading:
      return withRetake
        ? 'APPB2C.registration.results.osr.chooseDate.retakeReading'
        : withYourTest
        ? 'APPB2C.common.basic.bookingDetails.osrTitle.reading'
        : withResult
        ? 'APPB2C.registration.results.eor.preDeadline.scoresTitleOsr.Reading'
        : 'APPB2C.registration.results.hasResults.scores.Reading';
    case ComponentType.Speaking:
      return withRetake
        ? 'APPB2C.registration.results.osr.chooseDate.retakeSpeaking'
        : withYourTest
        ? 'APPB2C.common.basic.bookingDetails.speaking.title'
        : withResult
        ? 'APPB2C.registration.results.eor.preDeadline.scoresTitleOsr.Speaking'
        : 'APPB2C.registration.results.hasResults.scores.Speaking';
    case ComponentType.Writing:
      return withRetake
        ? 'APPB2C.registration.results.osr.chooseDate.retakeWriting'
        : withYourTest
        ? 'APPB2C.common.basic.bookingDetails.lrw.title'
        : withResult
        ? 'APPB2C.registration.results.eor.preDeadline.scoresTitleOsr.Writing'
        : 'APPB2C.registration.results.hasResults.scores.Writing';
    default:
      return '';
  }
};

export const getOsrTermsAndConditionsShortCode = (): TermsShortCodeEnum => {
  const ctx = getExamContext();
  const isUkvi = ctx === 'ukvi';

  return isUkvi
    ? TermsShortCodeEnum.Global_IELTS_UKVI_CD_OSR
    : TermsShortCodeEnum.GLOBAL_IELTS_CD_OSR;
};

export const getScoreName = (scoreType: BandScoreType) => {
  switch (scoreType) {
    case BandScoreType.Listening:
      return 'APPB2C.registration.results.hasResults.scores.Listening';
    case BandScoreType.Reading:
      return 'APPB2C.registration.results.hasResults.scores.Reading';
    case BandScoreType.Writing:
      return 'APPB2C.registration.results.hasResults.scores.Writing';
    case BandScoreType.Speaking:
      return 'APPB2C.registration.results.hasResults.scores.Speaking';
    case BandScoreType.Overall:
      return 'APPB2C.registration.results.hasResults.scores.Overall';
    default:
      return undefined;
  }
};
