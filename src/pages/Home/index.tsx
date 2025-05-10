import { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { Button } from '@britishcouncil/react-solas';
import { Card, MainContainer, BcAlert } from '@britishcouncil/react-solas-ors3';
import { ApiErrorsAlert, LoadingCard } from 'ors-ui';

import { candidate as candidateSlice } from 'store/candidate';
import { useChangePass } from 'common/useChangePass';
import { HeroHeading } from './HeadingHero';
import { UpcomingTest } from './UpcomingTest';
import { PastTest } from './PastTest';
import { CandidateSelect } from './CandidateSelect';
import { useHomeTests, useHomeData } from './useHomeTests';
import { MissingMarketingForm, MissingMarketingModal } from './MissingMarketingModal';
import { ApplyBoard } from 'components/ApplyBoard';

const StartPage: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useChangePass();

  const {
    summary,
    candidates,
    loading,
    error,
    partialError,
    mainCandidate,
    candidate,
    setCandidate,
    isAdultMinor,
    missingDetails,
    missingMarketing,
    marketingPreference,
    isChecking,
  } = useHomeData();

  const { pastTests, recentTest, showNoUpcoming, showRecentTest, nearestOrsAcademicTest } =
    useHomeTests(summary);

  const handleMissingMarketingSubmit = useCallback(
    (val: MissingMarketingForm) => {
      dispatch(candidateSlice.thunks.handleMissingMarketing(val));
    },
    [dispatch]
  );

  return (
    <>
      <StyledPage>
        <HeroHeading heading={t('APPB2C.common.startPage.hero.title')}>
          <p className="text">{t('APPB2C.common.startPage.hero.subtitle')}</p>
        </HeroHeading>
        <MainContainer>
          {!isChecking && candidates && candidates.length > 1 && (
            <CandidateSelect
              candidate={candidate}
              candidates={candidates}
              onChange={(sel) => sel && setCandidate(sel)}
              isAdultMinor={isAdultMinor}
            />
          )}

          {loading && <LoadingCard type="white" />}
          <ApiErrorsAlert apiError={error} style={{ marginBottom: '20px' }} />

          {!loading && !error && (
            <>
              {showRecentTest && recentTest ? (
                <section>
                  <h2>{t('APPB2C.common.startPage.recent.title')}</h2>

                  <PastTest
                    key={recentTest.registrationId}
                    reg={recentTest}
                    isAdultMinor={isAdultMinor}
                  />
                </section>
              ) : (
                <section>
                  <h2>{t('APPB2C.common.startPage.upcoming.title')}</h2>
                  {summary?.upcoming &&
                    summary.upcoming.map((reg) => (
                      <UpcomingTest key={reg.registrationId} reg={reg} />
                    ))}
                  {showNoUpcoming && (
                    <Card>
                      <p style={isAdultMinor ? { margin: 0 } : {}}>
                        {t('APPB2C.common.startPage.upcoming.empty')}
                      </p>
                      {!isAdultMinor && (
                        <a href="/" className="btn btn-primary">
                          {t('APPB2C.common.startPage.hero.cta')}
                        </a>
                      )}
                    </Card>
                  )}
                </section>
              )}

              <section>
                <h2>{t('APPB2C.common.startPage.past.title')}</h2>

                {pastTests.map((reg) => (
                  <PastTest key={reg.registrationId} reg={reg} isAdultMinor={isAdultMinor} />
                ))}
                {pastTests.length < 1 && (
                  <Card>
                    <p style={{ margin: 0 }}>{t('APPB2C.common.startPage.past.empty')}</p>
                  </Card>
                )}
              </section>

              {partialError && (
                <BcAlert
                  type="danger"
                  title={t('APPB2C.common.startPage.error.title')}
                  style={{ marginBottom: '35px' }}
                >
                  <p>{t('APPB2C.common.startPage.error.body')}</p>

                  <Button intent="primary" onClick={() => window.location.reload()}>
                    {t('APPB2C.common.startPage.error.cta')}
                  </Button>
                </BcAlert>
              )}

              {!!nearestOrsAcademicTest && (
                <ApplyBoard
                  registrationId={nearestOrsAcademicTest.registrationId}
                  candidate={{
                    ...candidate,
                    addressLine1: candidate.address?.streetAddress1,
                    addressLine2: candidate.address?.streetAddress2,
                    addressLine3: candidate.address?.streetAddress3,
                    addressLine4: candidate.address?.streetAddress4,
                    countryId: candidate.address?.countryId,
                    postCode: candidate.address?.postCode,
                    email: mainCandidate.email,
                  }}
                  districtName={nearestOrsAcademicTest?.location}
                  date={nearestOrsAcademicTest?.lrwSortDate}
                />
              )}
            </>
          )}
        </MainContainer>
      </StyledPage>

      <MissingMarketingModal
        show={missingMarketing && missingDetails === false}
        marketingPref={marketingPreference}
        onSubmit={handleMissingMarketingSubmit}
      />
    </>
  );
};

export default StartPage;

const StyledPage = styled.article`
  margin-top: -30px;
  min-height: 100%;
  min-width: 360px;
  background-color: #e5eff8;

  section {
    margin-bottom: 40px;
    > h2 {
      margin-bottom: 20px;
    }
  }
`;
