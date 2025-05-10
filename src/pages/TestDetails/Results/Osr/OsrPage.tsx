import { useState } from 'react';
import { Divider, PageContainer, TextArea } from '@britishcouncil/react-solas-ors3';
import { useTranslation, Trans } from 'react-i18next';
import { Scores } from '../HasResults/Scores';
import { useSelector } from 'core';
import { ApiErrorPage, ApiErrorsList, ExternalLink, LoadingCard, PageHeading } from 'ors-ui';
import { iolLinks } from 'ors-utils';
import { LoadingContainer } from '@britishcouncil/react-solas';
import { ProceedBtn } from 'components';
import { useHelpForm } from 'core/hooks/useHelpForm';
import Thanks from 'pages/HelpAndContact/HelpForm/Thanks';
import { useGetRegistrationScores } from 'store/results';
import { useLocale } from 'common';

export const OsrPage = () => {
  const { t } = useTranslation();
  const registration = useSelector((s) => s.registration.registrationInCentre);

  const { data: resultScores } = useGetRegistrationScores({
    registrationId: registration?.id ?? 0,
    locale: useLocale().locale,
  });

  const [processing, setProcessing] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [error, setError] = useState<ApiErrorsList>();

  const { formik, fields } = useHelpForm({
    regId: registration?.id,
    setProcessing,
    setShowThanks,
    setError,
  });

  if (showThanks && !processing) {
    return (
      <>
        <Thanks bannerTransKey="APPB2C.registration.results.osr.successBanner" />
      </>
    );
  }

  return (
    <>
      <PageHeading heading={t('APPB2C.registration.results.osr.title')} />

      <LoadingContainer loading={processing}>
        <PageContainer>
          <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
            <p>{t('APPB2C.registration.results.osr.line1')}</p>
            <p>{t('APPB2C.registration.results.osr.line2')}</p>

            {resultScores?.value?.scores?.length ? (
              <Scores scoreBands={resultScores.value.scores} hideCommentary />
            ) : (
              <LoadingCard type="white" />
            )}

            <Divider />
            <p>{t('APPB2C.registration.results.osr.line3')}</p>
            <TextArea className="form-control" {...fields.queryText} />
            <p>{t('APPB2C.registration.results.osr.line4')}</p>
            <p>
              <Trans t={t} i18nKey={'APPB2C.registration.results.osr.line5'}>
                <ExternalLink href={iolLinks.footer.dataProtectionUrl} />
              </Trans>
            </p>
            <ProceedBtn type="submit" fields={fields}>
              {t('APPB2C.registration.results.osr.submitBtn')}
            </ProceedBtn>
          </form>
        </PageContainer>
      </LoadingContainer>

      {error && <ApiErrorPage />}
    </>
  );
};
