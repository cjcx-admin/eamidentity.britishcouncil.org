import { FC, useEffect } from 'react';
import { LoadingContainer } from '@britishcouncil/react-solas';
import { EnquiryOnResultsStatus, NotificationType, WhoPaysType } from 'ors-api/ors2';
import { EorRequestStatus } from 'ors-api/mod';

import { getNotifications } from 'store/registration/api';
import { getNotificationsIol } from 'store/registration/api.iol';
import { getNotifications as getNotificationsUkvi } from 'store/registration/api.ukvi';
import { getEoRAcknowledgment, getEorDetailsMod } from 'store/eor/api';
import { useGetAlertsIolQuery, useGetAlertsModQuery } from 'store/registration';
import { useDispatch, useSelector } from 'core';
import { AlertBar, useTermsAndConditionsInCentreData } from 'common';
import { SuiTab } from '../';
import { MessageCode, UpdateMessage } from './models';
import { messageCodes } from './messageCodes';
import { messageDetailsDictionary } from './messageDetailsDictionary';
import { MessageContent } from './MessageContent';
import { includesInUrl } from 'ors-utils';

interface Props {
  reg?: AlertBar;
  tabs: SuiTab[];
  isCMDS: boolean;
}

export const UpdateBar: FC<Props> = ({ reg, tabs, isCMDS }) => {
  const dispatch = useDispatch();

  const isIol = includesInUrl('/iol/');
  const isOrs = includesInUrl('/ors/');
  const isUkvi = includesInUrl('/ukvi/');
  const isMod = isCMDS && (isUkvi || isOrs);

  const { termsUpdated } = useTermsAndConditionsInCentreData();

  const { notifications } = useSelector((s) => s.registration);
  const { eorRequestDetails } = useSelector((s) => s.eor);
  const { data: alertsMod } = useGetAlertsModQuery(reg?.registrationId, {
    refetchOnMountOrArgChange: true,
    skip: isIol,
  });
  const { data: alertsIol } = useGetAlertsIolQuery(reg?.registrationId, {
    refetchOnMountOrArgChange: true,
    skip: !isIol,
  });
  const isTransactionRefundRequestPending =
    alertsMod?.isTransactionRefundRequestPending ??
    alertsIol?.isTransactionRefundRequestPending ??
    false;
  const isTransferPending = alertsMod?.isTransferPending ?? alertsIol?.isTransferPending ?? false;
  const isCancelPending =
    alertsMod?.isCancelRequestPending ?? alertsIol?.isCancelRequestPending ?? false;
  const isCancelRejected =
    alertsMod?.isCancelRequestRejected ?? alertsIol?.isCancelRequestRejected ?? false;

  const eorPendingStates = [
    EorRequestStatus.Submitted,
    EorRequestStatus.Confirmed,
    EorRequestStatus.AwaitingResponse,
    EorRequestStatus.AcceptedByCambridge,
    EorRequestStatus.CommunicationFailed,
    EorRequestStatus.RejectedByCambridge,
  ];
  useEffect(() => {
    if (reg) {
      isIol
        ? dispatch(getNotificationsIol(reg.registrationId))
        : isOrs
        ? dispatch(getNotifications(reg.registrationId))
        : dispatch(getNotificationsUkvi(reg.registrationId));

      isMod && dispatch(getEorDetailsMod(reg.registrationId));
      isOrs && !isCMDS && dispatch(getEoRAcknowledgment(reg.registrationId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  if (!reg) return null;

  const isActionActive = (code: MessageCode): boolean => {
    switch (code) {
      case 'transactionRefundRequestPending':
        return isTransactionRefundRequestPending;
      case 'transactionRefundRequestAccepted':
        return !!notifications?.data?.some((n) => n === NotificationType.RefundRequestAccepted);
      case 'transactionRefundRequestRejected':
        return !!notifications?.data?.some((n) => n === NotificationType.RefundRequestRejected);
    }

    if (reg?.status === 'cancelled') return code === 'cancelled';
    /** Messages below won't be displayed because registration has been canceled */

    switch (code) {
      case 'cancelPending':
        return isCancelPending;
      case 'cancelRejected':
        return isCancelRejected;
      case isCMDS ? 'transferredCmds' : 'transferred':
        return (
          !isTransferPending && !!notifications?.data?.some((n) => n === NotificationType.Transfer)
        );
      case 'transferCancelled':
        return (
          !isTransferPending &&
          !!notifications?.data?.some((n) => n === NotificationType.TransferCancelled)
        );
      case 'cmdsTransferPending':
        return isTransferPending;
      case 'termsUpdated':
        return termsUpdated !== undefined ? !termsUpdated : false;
      case 'hasResults':
        return !!notifications?.data?.some((n) => n === NotificationType.ResultsAvailable);
      case 'eorPending':
        if (isMod || isIol) {
          return eorPendingStates.some((s) => s === eorRequestDetails.data?.details?.status);
        }
        return [
          EnquiryOnResultsStatus.New,
          EnquiryOnResultsStatus.Paid,
          EnquiryOnResultsStatus.Triggered,
        ].some((s) => s === eorRequestDetails.data?.details?.status);
      case 'eorCompleted':
        return !!notifications?.data?.some((n) => n === NotificationType.EnquiryOnResultsCompleted);
      case 'eorRejected':
        return eorRequestDetails.data?.details?.status === EorRequestStatus.Rejected;
      case 'eorRefundPending':
        return [EnquiryOnResultsStatus.ResultsChanged].some((s) => s === reg.eorStatus);
      case 'eorRefunded':
        return !!notifications?.data?.some((n) => n === NotificationType.EnquiryOnResultsRefunded);
      case 'osrHasResults':
        return (
          !eorRequestDetails.data?.details && !!reg.oneSkillRetake && reg.status === 'has-results'
        );
      case 'osrOriginalExamAwaitingStatus':
        return (
          !!reg.requestedActiveOneSkillRetake && !reg.requestedActiveOneSkillRetake.overallScore
        );
      case 'osrOriginalExamHasResultsStatus':
        return (
          !!reg.requestedActiveOneSkillRetake && !!reg.requestedActiveOneSkillRetake.overallScore
        );

      default:
        return false;
    }
  };

  const allActions: UpdateMessage[] = messageCodes.map((code) => ({
    code: code,
    active: isActionActive(code),
    details: messageDetailsDictionary[code],
  }));
  const activeTab = tabs.find((tab) => tab.active);

  const activeActions = allActions.filter(
    (a) => a.active && (a.details.tabName === activeTab?.to || a.details.tabName === 'all')
  );

  return activeActions.length > 0 ? (
    <LoadingContainer loading={notifications.isLoading}>
      {activeActions.map((updateMessage, index) => (
        <MessageContent
          key={index}
          registrationId={reg.registrationId}
          isIol={isIol}
          isUkvi={isUkvi}
          lrwFormatCode={reg.lrwFormatCode}
          updateMessage={updateMessage}
          organisationCountryId={reg.organisationCountryId}
          isAgentPays={reg.whoPays === WhoPaysType.Agent}
          osrDetails={reg.oneSkillRetake}
          originalExamOsrDetails={reg.requestedActiveOneSkillRetake}
          productId={reg.productId}
        />
      ))}
    </LoadingContainer>
  ) : (
    <></>
  );
};
