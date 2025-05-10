import { useEffect } from 'react';
import { generatePath, Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { BcAlert } from '@britishcouncil/react-solas';
import { Card } from '@britishcouncil/react-solas-ors3';
import { RegistrationDto as RegistrationDtoMod, WhoPaysType } from 'ors-api/mod';
import { formatSurname, isLifeSkillsExam, ITrackCommerceEvent } from 'ors-utils';

import { getExamContext, GTM, useDispatch } from 'core';
import { appRoutes } from 'Navigation';
import { nestedAppRoutes } from 'Navigation/helpers';
import { getOsrSkillName } from 'common';
import { ChangeHeading, FormattedPrice } from 'components';
import { PreparationIcon, ResultsIcon } from './BookingDetailsIcons';
import { Terms } from './Terms';
import { registration } from 'store/registration';
import { usePaymentStatus } from 'pages/TestDetails/Payments/Acknowledgement/usePaymentStatus';

export const BookingDetails = ({ reg }: { reg?: RegistrationDtoMod }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const osrComponent = reg && 'oneSkillRetake' in reg && reg.oneSkillRetake?.component;

  const ctx = getExamContext();
  const paymentId = searchParams.get('paymentId');
  const { paymentStatusMod, checkStatusMod } = usePaymentStatus();

  const updatePaymentStatus = async () => {
    if (ctx === 'ors') {
      reg &&
        dispatch(
          registration.actions.setRegistrationInCentre({
            reg: {
              ...reg,
              payment: {
                ...reg?.payment,
                isPaid: true,
                paymentDeadline: reg?.payment?.paymentDeadline ?? '',
                fee: reg?.payment?.fee ?? 0,
                whoPays: reg?.payment?.whoPays ?? WhoPaysType.TestTaker,
              },
            },
            regNotFound: false,
            processing: false,
          })
        );
    }
  };

  const ecommerceData: ITrackCommerceEvent = {
    refNumber: reg?.reference ?? '',
    testPrice: reg?.payment?.fee ?? 0,
    currency: reg?.payment?.currencyCode ?? '',
    productId: reg?.productId ?? '',
    location: reg?.lrwExam?.venue?.venueName ?? '',
    paymentType: paymentId ? 'Online' : 'Offline',
    promoCodeUsage: false,
  };

  useEffect(() => {
    if (paymentStatusMod?.isSuccessfullyPaid && reg && !reg.payment?.isPaid && paymentId) {
      updatePaymentStatus();
    }
  }, [paymentStatusMod]);

  useEffect(() => {
    if (!paymentId) {
      return GTM.trackTransSuccess(ecommerceData);
    }

    if (checkStatusMod === 'IDLE' && paymentStatusMod && paymentId) {
      paymentStatusMod?.isSuccessfullyPaid
        ? GTM.trackTransSuccess(ecommerceData)
        : GTM.trackTransFailure(ecommerceData);
    }
  }, [checkStatusMod, paymentStatusMod]);

  return (
    <>
      {!!osrComponent ? (
        <>
          <br />
          <BcAlert type="note">
            {t('APPB2C.common.startPage.upcoming.osr.note', {
              skill: t(getOsrSkillName({ skillType: osrComponent })),
            })}
          </BcAlert>
        </>
      ) : (
        <br />
      )}

      <ChangeHeading
        title={t('APPB2C.registration.tabs.candidate')}
        to={nestedAppRoutes(reg?.id).testDetails.tt}
        headingClassName="margin-bottom-20"
        data-testid="show-test-taker-tab"
      >
        {t('APPB2C.registration.bookingDetails.seeTestTaker')}
      </ChangeHeading>
      <DetailsCard>{`${reg?.registrationTestTaker?.firstName} ${formatSurname(
        reg?.registrationTestTaker?.surname
      )}`}</DetailsCard>

      <ChangeHeading
        title={t('APPB2C.registration.bookingDetails.payment')}
        to={nestedAppRoutes(reg?.id).testDetails.payments.index}
        headingClassName="margin-bottom-20"
        data-testid="show-test-taker-tab"
      >
        {t('APPB2C.registration.bookingDetails.seePayment')}
      </ChangeHeading>
      <DetailsCard>
        <FormattedPrice
          value={reg?.payment?.fee}
          currencyIsoCode={reg?.payment?.currencyCode}
          showFraction
        />
      </DetailsCard>
      <Terms
        isOsr={!!osrComponent}
        registrationId={reg?.id}
        examFormat={reg?.examFormat}
        isLifeSkills={isLifeSkillsExam(reg?.productId)}
        organisationCountryId={reg?.organisationCountryId}
        style={{ marginTop: '-12px' }}
      />

      <h2 className="margin-bottom-20">{t('APPB2C.registration.bookingDetails.whatNext')}</h2>
      <CardRow>
        <CardCell>
          <StyledCard>
            <StyledLink
              to={generatePath(appRoutes.preparation.index, {
                ctx: ctx,
                regId: reg?.id.toString(),
              })}
            >
              <div>
                <PreparationIcon />
              </div>
              {t('APPB2C.registration.prepare.header')}
            </StyledLink>
          </StyledCard>
        </CardCell>
        <CardCell>
          <StyledCard>
            <StyledLink to={nestedAppRoutes(reg?.id).testDetails.results}>
              <div>
                <ResultsIcon />
              </div>
              {t('APPB2C.registration.bookingDetails.results')}
            </StyledLink>
          </StyledCard>
        </CardCell>
      </CardRow>
    </>
  );
};

const DetailsCard = styled(Card)`
  margin-bottom: 25px;
`;

const CardRow = styled.div`
  display: flex;
`;

const CardCell = styled.div`
  flex: 33.3% 0 0;
  padding: 0 5px;
  text-align: center;

  &:first-of-type {
    padding-left: 0;

    [dir='rtl'] & {
      padding-left: 5px;
      padding-right: 0;
    }
  }

  &:last-of-type {
    padding-right: 0;

    [dir='rtl'] & {
      padding-right: 5px;
      padding-left: 0;
    }
  }
`;

const StyledCard = styled(Card)`
  height: 100%;
  display: grid;
  place-items: center;

  &:focus-within {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 0px 0px 1px #005cb9 inset;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  margin: -24px;
  padding: 24px;
  font-size: 0.9em;
  outline: none !important;
`;
