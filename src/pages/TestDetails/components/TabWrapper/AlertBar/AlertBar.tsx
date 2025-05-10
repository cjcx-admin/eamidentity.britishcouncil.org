import { FC, PropsWithChildren, useEffect } from 'react';
import { EnquiryOnResultsStatus, RegistrationDocumentType, WhoPaysType } from 'ors-api/ors2';
import {
  IdentityDocumentStatus,
  RegistrationDto as RegistrationDtoIol,
  RegistrationStatus,
} from 'ors-api/iol';
import { AwardingBodySystem, RegistrationDto as RegistrationDtoMod } from 'ors-api/mod';

import { getRegistrationIdDocument } from 'store/registration/api.iol';
import {
  registration as regStore,
  registrationUkvi,
  useGetAlertsModQuery,
  useGetRegistrationMissingDocumentsQuery,
} from 'store/registration';
import { getExamContext, useDispatch, useSelector } from 'core';
import { AlertBar as ConvertedRegAlertBar } from 'common';
import { SuiTab, SuiTabs } from '../';
import { UpdateBar } from '../UpdateBar/UpdateBar';
import { AlertBarContent } from './Content';
import { ActionCode, AlertAction } from './models';
import { actionRouteDictionary } from './actionRouteDictionary';
import { actionCodes } from './actionCodes';
import { UnpaidErrorBar } from './UnpaidErrorBar';
import { DateTime } from 'luxon';

interface Props extends PropsWithChildren {
  registration?: RegistrationDtoMod;
  registrationIol?: RegistrationDtoIol;
  tabs: SuiTab[];
  convertedReg?: ConvertedRegAlertBar;
}

export const AlertBar: FC<Props> = ({
  registration,
  registrationIol,
  tabs,
  children,
  convertedReg,
}) => {
  const dispatch = useDispatch();
  const ctx = getExamContext();
  const isIol = ctx === 'iol';
  const isUkvi = ctx === 'ukvi';
  const isOrs = ctx === 'ors';

  const { medicalFiles, paymentProofFiles, idDocIol, allowedActions } = useSelector(
    (s) => s.registration
  );
  const { data: eorRequestDetails } = useSelector((s) => s.eor.eorRequestDetails);

  const { data: missingDocs } = useGetRegistrationMissingDocumentsQuery(registration?.id ?? 0, {
    skip: isIol,
  });
  const { data: alertsMod } = useGetAlertsModQuery(registration?.id, {
    refetchOnMountOrArgChange: true,
    skip: isIol,
  });

  useEffect(() => {
    !idDocIol &&
      registrationIol &&
      !registrationIol.isDocumentValid &&
      registrationIol.status === RegistrationStatus.Incomplete &&
      dispatch(getRegistrationIdDocument(Number(registrationIol.id ?? '')));
  }, [dispatch, idDocIol, registrationIol]);
  useEffect(() => {
    !medicalFiles &&
      registration &&
      missingDocs &&
      missingDocs?.includes(RegistrationDocumentType.SpecialArrangement) &&
      (isUkvi
        ? dispatch(registrationUkvi.api.getRegistrationMedicalFilesUkvi(registration.id))
        : dispatch(regStore.api.getRegistrationMedicalFiles(registration.id)));
  }, [dispatch, medicalFiles, registration, missingDocs]);

  useEffect(() => {
    isOrs &&
      !paymentProofFiles &&
      registration &&
      (!registration.payment?.isPaid ||
        (eorRequestDetails && !eorRequestDetails?.details?.isPaid)) &&
      dispatch(regStore.api.getProofOfPaymentsDocuments(registration.id));
  }, [dispatch, paymentProofFiles, registration, eorRequestDetails]);

  if (!convertedReg) return <SuiTabs tabs={tabs}>{children}</SuiTabs>;

  const isCMDS = registration?.awardingBodySystem === AwardingBodySystem.CMDS;
  const hasMedicalFiles = !!medicalFiles?.length && medicalFiles.length > 0;
  const hasPaymentFiles = !!paymentProofFiles?.length && paymentProofFiles.length > 0;

  const unpaidPastDeadline =
    !isIol &&
    !convertedReg?.regPaid &&
    DateTime.fromISO(convertedReg.paymentDeadline!, { zone: 'utc' }) <= DateTime.utc();

  const isActionActive = (code: ActionCode): boolean => {
    if (convertedReg?.status === 'cancelled') return false;

    if (convertedReg?.examInPast && !['eorPayment', 'eorPaymentProof'].some((c) => c === code))
      return false;

    const shouldPayReg = !convertedReg.regPaid && convertedReg.whoPays !== WhoPaysType.Agent;
    const shouldPayEor =
      typeof eorRequestDetails?.details?.status === 'number' &&
      !eorRequestDetails.details?.isPaid &&
      eorRequestDetails?.details?.status !== EnquiryOnResultsStatus.Cancelled;
    const isInCentreIdUploadRequired =
      (alertsMod?.isIdUploadRequired && allowedActions.data?.canUploadIdentityDocument) ?? false;
    const isInCentreIdReUploadRequired =
      (alertsMod?.isIdReUploadRequired && allowedActions.data?.canUploadIdentityDocument) ?? false;
    const missingMedical = !!missingDocs?.includes(RegistrationDocumentType.SpecialArrangement);
    const missingPaymentProof = !!missingDocs?.includes(RegistrationDocumentType.PaymentSlip);

    switch (code) {
      case 'regPayment':
        return shouldPayReg && !convertedReg?.pendingPaymentProofUploadDate;
      case 'idUpload':
        return (
          (!!idDocIol && (!idDocIol.files || idDocIol.files?.length === 0)) ||
          isInCentreIdUploadRequired
        );
      case 'idReupload':
        return idDocIol?.status === IdentityDocumentStatus.Rejected || isInCentreIdReUploadRequired;
      case 'medicalUpload':
        return missingMedical && !hasMedicalFiles;
      case 'medicalReupload':
        return missingMedical && hasMedicalFiles;
      case 'childConsentMissing':
        return !!convertedReg.missingChildConsent;
      case 'check':
        return isIol && !convertedReg?.hasCredentials;
      case 'creds':
        return !!convertedReg?.hasCredentials;
      case 'eorPayment':
        return shouldPayEor && !missingPaymentProof && !hasPaymentFiles;
      case 'eorPaymentProof':
        return shouldPayEor && missingPaymentProof && convertedReg.whoPays !== WhoPaysType.Agent;
      default:
        return false;
    }
  };

  const allActions: AlertAction[] = actionCodes.map((code) => ({
    code: code,
    active: isActionActive(code),
    routes: actionRouteDictionary[code],
  }));
  const activeActions = allActions.filter((a) => a.active);
  const isDateTabActive = tabs.find((tab) => tab.active)?.to === 'date-location';

  return (
    <>
      {unpaidPastDeadline && convertedReg?.status !== 'cancelled' ? (
        <UnpaidErrorBar />
      ) : (
        isDateTabActive && <AlertBarContent reg={convertedReg} activeActions={activeActions} />
      )}
      <UpdateBar reg={convertedReg} tabs={tabs} isCMDS={isCMDS} />
      <SuiTabs tabs={tabs} activeActions={activeActions}>
        {children}
      </SuiTabs>
    </>
  );
};
