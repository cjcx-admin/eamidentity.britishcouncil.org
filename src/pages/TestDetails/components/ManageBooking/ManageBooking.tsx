import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { Button } from '@britishcouncil/react-solas';
import { Divider } from '@britishcouncil/react-solas-ors3';

import {
  CalendarCrossedIcon,
  CalendarIcon,
  LoadingCard,
  SpeakingIcon,
  breakpoints,
  Modal,
} from 'ors-ui';
import { getProductFamilyId, useDispatch, useSelector } from 'core';
import { includesInUrl } from 'ors-utils';
import { RegistrationDto as RegistrationDtoIol } from 'ors-api/iol';
import { RegistrationDto as RegistrationDtoMod } from 'ors-api/mod';
import { useGetOrgCountryConfigurationQuery } from 'store/organisationCountry';
import { speaking } from 'store/speaking';
import { useLocale } from 'common';
import { nestedAppRoutes } from 'Navigation';
import { ManageBookingCard } from './ManageBookingCard';

type Props = {
  reg: RegistrationDtoMod | RegistrationDtoIol;
};

export const ManageBooking = ({ reg }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [showNoSpeakingSlotsModal, setNoSpeakingSlotsModal] = useState(false);
  const [loadingSpeakingTransferAvailability, setLoadingSpeakingTransferAvailability] =
    useState(false);

  const { data: allowedActions, isLoading: isLoadingAllowedActions } = useSelector(
    (s) => s.registration.allowedActions
  );
  const isIol = includesInUrl('/iol/');
  const canRequestSpeakingTransfer = allowedActions?.canRequestSpeakingTransfer;
  const canRequestOfflineTransfer = allowedActions?.canRequestOfflineTransfer;
  const canRequestSelfServiceTransfer = allowedActions?.canRequestTransfer;

  const { data: orgCountryIeltsSettings, isFetching: loadingOrgCountrySettings } =
    useGetOrgCountryConfigurationQuery(
      {
        locale: useLocale().locale,
        organisationCountryId: (reg as RegistrationDtoMod)?.organisationCountryId,
        productFamilyId: getProductFamilyId(),
      },
      { skip: isIol }
    );

  const transferUrl = orgCountryIeltsSettings?.value?.selfServiceTransferUrl;

  const handleTransfer = () => {
    if (isIol) {
      navigate(nestedAppRoutes(reg.id).changeBooking.transfer);
    } else if (canRequestSelfServiceTransfer) {
      navigate(nestedAppRoutes(reg.id).changeBooking.selfServiceTransfer.index);
    } else if (transferUrl) {
      window.location.href = transferUrl;
    }
  };

  const handleSpeakingChange = async () => {
    setLoadingSpeakingTransferAvailability(true);
    const { payload } = await dispatch(
      speaking.api.getAvailableSlots({ regId: reg.id, query: {} })
    );
    setLoadingSpeakingTransferAvailability(false);

    payload && Array.isArray(payload) && payload.length > 0
      ? navigate(nestedAppRoutes(reg.id).changeBooking.speaking)
      : setNoSpeakingSlotsModal(true);
  };

  const handleCancel = () => {
    navigate(nestedAppRoutes(reg.id).changeBooking.cancel);
  };

  const disableSpeaking = isIol || !canRequestSpeakingTransfer;

  const disableOffline =
    (isIol && !canRequestOfflineTransfer) ||
    (!isIol &&
      ((!canRequestSelfServiceTransfer && !canRequestOfflineTransfer) ||
        (canRequestOfflineTransfer && !transferUrl)));

  const disableCancel = !allowedActions?.canRequestCancellation;
  const hideCards = disableSpeaking && disableOffline && disableCancel;

  if (loadingOrgCountrySettings || isLoadingAllowedActions) {
    return (
      <>
        <Divider />
        <LoadingCard type="white" />
      </>
    );
  }

  if (hideCards) return null;

  return (
    <>
      <Divider />
      <h2>{t('APPB2C.registration.dateLocation.manage.title')}</h2>
      <CardsContainer>
        <ManageBookingCard
          text={t('APPB2C.registration.dateLocation.manage.transferSpeaking')}
          disabled={disableSpeaking}
          isLoading={loadingSpeakingTransferAvailability}
          btnTestId="btn-change-speaking"
          data-testid="manage-booking-card-speaking"
          action={handleSpeakingChange}
          Icon={SpeakingIcon}
        />
        <ManageBookingCard
          text={t('APPB2C.registration.dateLocation.manage.transferWhole')}
          disabled={disableOffline}
          btnTestId="btn-change-reg"
          data-testid="manage-booking-card-lrw"
          action={handleTransfer}
          Icon={CalendarIcon}
        />
        <ManageBookingCard
          text={t('APPB2C.registration.dateLocation.manage.cancel')}
          disabled={disableCancel}
          btnTestId="btn-request-cancel"
          data-testid="manage-booking-card-cancel"
          Icon={CalendarCrossedIcon}
          action={handleCancel}
        />
      </CardsContainer>

      {!isIol && (
        <Modal
          show={showNoSpeakingSlotsModal}
          onExit={() => setNoSpeakingSlotsModal(false)}
          title={t('APPB2C.registration.dateLocation.speakingTransfer.noSpeakingSlotsHeader')}
        >
          <ModalBody>
            <p>{t('APPB2C.registration.dateLocation.speakingTransfer.noSpeakingSlotsBody1')}</p>
            <p>{t('APPB2C.registration.dateLocation.speakingTransfer.noSpeakingSlotsBody2')}</p>

            <Buttons>
              <Button onClick={() => setNoSpeakingSlotsModal(false)} intent="primary" className="">
                {t('APPB2C.registration.dateLocation.speakingTransfer.keepSpeakingTest')}
              </Button>

              <Button disabled={!transferUrl} onClick={handleTransfer}>
                {t('APPB2C.registration.dateLocation.speakingTransfer.requestTransfer')}
              </Button>
            </Buttons>
          </ModalBody>
        </Modal>
      )}
    </>
  );
};

const ModalBody = styled.div`
  max-width: 650px;
`;
const Buttons = styled.div`
  display: flex;
  place-content: space-around;
  flex-wrap: wrap;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media (min-width: ${breakpoints['screen-md-min']}px) {
    flex-direction: row;
  }
`;
