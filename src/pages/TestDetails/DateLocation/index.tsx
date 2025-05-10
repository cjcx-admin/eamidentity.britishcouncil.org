import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { registration } from 'store/registration';
import { useSelector, getExamContext } from 'core';
import { SlimAlert, TestDetails, TestDetailsIol, Wootric } from 'components';
import { nestedAppRoutes, useActiveTabs } from 'Navigation/helpers';
import { ApplyBoard } from 'components/ApplyBoard';
import { BookingDetails } from './BookingDetails';
import { ManageBooking } from '../components/ManageBooking/ManageBooking';

const DateLocationPage: FC<{ isBookingDetails?: boolean }> = ({ isBookingDetails = false }) => {
  const { t } = useTranslation();
  useActiveTabs(isBookingDetails ? 'booking-details' : 'date-location');

  const { registrationInCentre: reg, ttRegistrationIol: regIol } = useSelector(
    (s) => s.registration
  );
  const { onlinePaymentError } = useSelector((s) => s.osrBooking);
  const showApplyBoard = useSelector(registration.selectors.showApplyBoard);
  const showBookingDetails = isBookingDetails && !!reg;
  const selectedReg = reg ?? regIol;
  const ctx = getExamContext();
  const isIol = ctx === 'iol';

  return (
    <>
      {showBookingDetails && (
        <>
          <SlimAlert
            data-testid="alert-success"
            type="success"
            size="sm"
            style={{ marginBottom: '30px' }}
          >
            <span>{t('APPB2C.cj.bookingComplete.note')}</span>
          </SlimAlert>
          {onlinePaymentError && (
            <SlimAlert
              data-testid="alert-payment-error"
              type="danger"
              size="sm"
              style={{ marginBottom: '30px' }}
            >
              <p>{t('APPB2C.cj.bookingComplete.paymentFailed')}</p>
              <Link
                to={nestedAppRoutes(selectedReg?.id).testDetails.payments.index}
                className="btn btn-primary"
              >
                {t('APPB2C.cj.bookingComplete.paymentOptions')}
              </Link>
            </SlimAlert>
          )}

          <Wootric regDetails={reg} regDetailsIol={regIol} />
        </>
      )}
      {isIol ? (
        <>
          <TestDetailsIol reg={regIol} showExtraContent />
          {!isBookingDetails && selectedReg && <ManageBooking reg={selectedReg} />}
        </>
      ) : (
        <>
          <TestDetails
            registration={reg}
            showExtraContent={!isBookingDetails}
          />
          {showBookingDetails && <BookingDetails reg={reg} />}

          {!isBookingDetails && selectedReg && <ManageBooking reg={selectedReg} />}

          {showApplyBoard && (
            <ApplyBoard
              registrationId={reg?.id || -1}
              candidate={{
                ...reg?.registrationTestTaker,
                ...reg?.registrationTestTaker?.address,
                idNumber: reg?.registrationTestTaker?.idDocument?.number,
                idExpiry: reg?.registrationTestTaker?.idDocument?.expiryDate,
                gender: reg?.registrationTestTaker?.genderShortCode,
                dob: reg?.registrationTestTaker?.dateOfBirth,
              }}
              districtName={reg?.lrwExam?.districtName}
              date={reg?.lrwExam?.examDate}
            />
          )}
        </>
      )}
      <br />
    </>
  );
};

export default DateLocationPage;
