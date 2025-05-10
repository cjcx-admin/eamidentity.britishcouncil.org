import { orderBy } from 'lodash-es';
import { TestTakerExams } from 'ors-api/ors2';
import { TestTakerExams as UkviTestTakerExams } from 'ors-api/ukvi';
import { BasicExam } from 'store/registration';
import { IELTSProducts, TestTakerRegistrationsDto } from 'ors-api/iol';
import { converters } from 'common';
import { ExamMode, UnifiedTestTakerExams } from 'common/models';
import { appRoutes } from 'Navigation';

export function getLastExam(res: UnifiedTestTakerExams): BasicExam | undefined {
  const allExams = orderBy((res.past || []).concat(res.upcoming || []), (e) => e.createdOn);

  const lastExam = allExams.pop();
  if (!lastExam) {
    return undefined;
  }
  const isUol =
    lastExam.productId === IELTSProducts.UkviOnlineAC ||
    lastExam.productId === IELTSProducts.UkviOnlineGT;

  return {
    id: lastExam.registrationId,
    countryCode: (lastExam.mode !== 'iol' && lastExam.countryIsoCode) || '',
    module: lastExam.module,
    mode: isUol ? 'ukvi' : lastExam.mode,
    productId: lastExam.productId,
  };
}

export function unifySummary(
  locale: string,
  icExams?: TestTakerExams,
  ukviExams?: UkviTestTakerExams,
  iolExams?: TestTakerRegistrationsDto
): UnifiedTestTakerExams {
  const pastIc = converters.toUnifiedExams('long', locale).fromIcExams(icExams?.past || []);
  const pastUkvi = converters.toUnifiedExams('long', locale).fromUkviExams(ukviExams?.past || []);
  const pastIol = converters.toUnifiedExams('long', locale).fromIolExams(iolExams?.past || []);
  const upcomingIc = converters
    .toUnifiedExams('short', locale)
    .fromIcExams(icExams?.upcoming || []);
  const upcomingUkvi = converters
    .toUnifiedExams('short', locale)
    .fromUkviExams(ukviExams?.upcoming || []);
  const upcomingIol = converters
    .toUnifiedExams('short', locale)
    .fromIolExams(iolExams?.upcoming || []);

  return {
    canRecreateRegistration: icExams?.canRecreateRegistration ?? false,
    past: orderBy(pastIc.concat(pastUkvi, pastIol), (e) => e.lrwSortDate, 'desc'),
    upcoming: orderBy(upcomingIc.concat(upcomingUkvi, upcomingIol), (e) => e.lrwSortDate),
  };
}

type GetUrl = (regMode: ExamMode, regId: number) => string;

export const getTestDetailsTabUrl = (regMode: ExamMode, regId: number, url: string) => {
  const baseUrl = `/${appRoutes.testDetails.index}/${url}`;
  return baseUrl.replace(':ctx', regMode).replace(':regId', String(regId));
};

export const getDateLocationUrl: GetUrl = (regMode, regId) =>
  getTestDetailsTabUrl(regMode, regId, appRoutes.testDetails.dateLocation);

export const getPaymentsUrl: GetUrl = (regMode, regId) =>
  getTestDetailsTabUrl(regMode, regId, appRoutes.testDetails.payments.index);

export const getTestTakerUrl: GetUrl = (regMode, regId) =>
  getTestDetailsTabUrl(regMode, regId, appRoutes.testDetails.tt);

export const getResultsUrl: GetUrl = (regMode, regId) =>
  getTestDetailsTabUrl(regMode, regId, appRoutes.testDetails.results);

export const promiseHelperAllSettled = (promises: Promise<any>[]) =>
  Promise.all(
    promises.map((promise) =>
      promise
        .then((value) => ({ status: 'fulfilled', value: value, reason: undefined }))
        .catch((reason) => ({ status: 'rejected', reason: reason, value: undefined }))
    )
  );
