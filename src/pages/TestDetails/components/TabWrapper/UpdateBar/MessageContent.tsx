import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { LoadingContainer } from '@britishcouncil/react-solas';
import { LinkButton } from '@britishcouncil/react-solas-ors3';
import { BandScoreType, ComponentType, NotificationType } from 'ors-api/ors2';
import { OneSkillRetakeDto, RequestedActiveOneSkillRetakeDto } from 'ors-api/mod';

import { registration, registrationIol, registrationUkvi } from 'store/registration';
import { getExamContext, useDispatch } from 'core';
import { getOsrSkillName, LrwFormatCode, useLocale } from 'common';
import { SlimAlert } from 'components';
import { AcceptRegTerms } from '../../../../Home/AcceptRegTerms';
import { MessageCode, MessageDetails, UpdateMessage } from './models';
import { useScoreToRetake } from 'pages/TestDetails/Results/Osr/hooks/useScoreToRetake';
import EorCompletedContent from './components/EorCompletedContent';
import { useGetRegistrationScores } from 'store/results';

interface Props {
  registrationId: number;
  isIol: boolean;
  isUkvi: boolean;
  lrwFormatCode: LrwFormatCode;
  updateMessage: UpdateMessage;
  organisationCountryId?: number;
  isAgentPays: boolean;
  osrDetails?: OneSkillRetakeDto;
  originalExamOsrDetails?: RequestedActiveOneSkillRetakeDto;
  productId?: string;
}

export const MessageContent: FC<Props> = ({
  registrationId,
  isIol,
  lrwFormatCode,
  updateMessage,
  organisationCountryId,
  isAgentPays,
  osrDetails,
  originalExamOsrDetails,
  isUkvi,
  productId,
}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const ctx = getExamContext();

  const { data: resultScores, isFetching: fetchingScores } = useGetRegistrationScores({
    registrationId,
    locale: useLocale().locale,
  });

  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(true);

  const overallScore = resultScores?.value?.scores?.find(
    (score) => score.bandScoreType === BandScoreType.Overall
  );
  const { originalScoreToRetake, osrComponentScore, osrOverallScore } = useScoreToRetake(
    osrDetails,
    registrationId
  );
  const originalOverallScore = originalScoreToRetake?.originalOverallScore;
  const osrRegId =
    updateMessage.code === 'osrOriginalExamHasResultsStatus' ||
    updateMessage.code === 'osrOriginalExamAwaitingStatus'
      ? originalExamOsrDetails?.osrRegistrationId
      : undefined;

  const getOsrScoreChangeMessage = () => {
    if (originalOverallScore! > osrOverallScore!)
      return t('APPB2C.registration.results.hasResults.osr.updateBar.scoreDecreased', {
        originalScore: originalOverallScore?.toPrecision(2),
        osrScore: osrOverallScore?.toPrecision(2),
      });
    if (originalOverallScore === osrOverallScore)
      return t('APPB2C.registration.results.hasResults.osr.updateBar.scoreUnchanged', {
        originalScore: originalOverallScore?.toPrecision(2),
      });
    if (originalOverallScore! < osrOverallScore!)
      return t('APPB2C.registration.results.hasResults.osr.updateBar.scoreIncreased', {
        originalScore: originalOverallScore?.toPrecision(2),
        osrScore: osrOverallScore?.toPrecision(2),
      });
  };

  const notificationTypeFromMessageCode = (code: MessageCode): NotificationType | null => {
    switch (code) {
      case 'transferred':
      case 'transferredCmds':
        return NotificationType.Transfer;
      case 'transferCancelled':
        return NotificationType.TransferCancelled;
      case 'hasResults':
        return NotificationType.ResultsAvailable;
      case 'eorCompleted':
        return NotificationType.EnquiryOnResultsCompleted;
      case 'eorRefunded':
        return NotificationType.EnquiryOnResultsRefunded;
      case 'transactionRefundRequestAccepted':
        return NotificationType.RefundRequestAccepted;

      default:
        return null;
    }
  };

  const getUpdateMessageI18nKey = (code: MessageCode) => {
    switch (code) {
      case 'cancelPending':
        return 'APPB2C.common.updateBar.cancelPending';
      case 'cancelRejected':
        return 'APPB2C.common.updateBar.cancelRejected';
      case 'cancelled':
        return 'APPB2C.common.updateBar.cancelled';
      case 'transferPending':
        return 'APPB2C.common.updateBar.transferPending';
      case 'transferCancelled':
        return 'APPB2C.common.updateBar.transferCancelled';
      case 'cmdsTransferPending':
        return 'APPB2C.common.updateBar.transferPendingCmds';
      case 'transferred':
        return 'APPB2C.common.updateBar.transferred';
      case 'transferredCmds':
        return 'APPB2C.common.updateBar.transferredCmds';
      case 'termsUpdated':
        return 'APPB2C.common.updateBar.termsUpdated';
      case 'hasResults':
        return 'APPB2C.common.updateBar.hasResults';
      case 'eorPending':
        return isAgentPays
          ? 'APPB2C.common.updateBar.eorPendingAgentPays'
          : 'APPB2C.common.updateBar.eorPending';
      case 'eorCompleted':
        return 'APPB2C.common.updateBar.eorCompleted';
      case 'eorRejected':
        return 'APPB2C.common.updateBar.eorRejected';
      case 'eorRefundPending':
        return 'APPB2C.common.updateBar.eorRefundPending';
      case 'eorRefunded':
        return 'APPB2C.common.updateBar.eorRefunded';
      case 'osrHasResults':
        return 'APPB2C.registration.results.hasResults.osr.updateBar.title';
      case 'osrOriginalExamHasResultsStatus':
        return 'APPB2C.registration.results.updateBar.osr.marked';
      case 'osrOriginalExamAwaitingStatus':
        return 'APPB2C.registration.results.updateBar.osr.booked';
      case 'transactionRefundRequestPending':
        return 'APPB2C.common.updateBar.transactionRefundRequestPending';
      case 'transactionRefundRequestAccepted':
        return 'APPB2C.common.updateBar.transactionRefundRequestAccepted';
      case 'transactionRefundRequestRejected':
        return 'APPB2C.common.updateBar.transactionRefundRequestRejected';
      default:
        return '';
    }
  };

  const handleCloseUpdate = async () => {
    setLoading(true);
    const notificationType = notificationTypeFromMessageCode(updateMessage.code);

    if (notificationType !== null) {
      const { meta } = await dispatch(
        isIol
          ? registrationIol.api.hideNotificationIol({ registrationId, notificationType })
          : isUkvi
          ? registrationUkvi.api.hideNotification({ registrationId, notificationType })
          : registration.api.hideNotification({ registrationId, notificationType })
      );

      meta.requestStatus === 'fulfilled' && setShow(false);
    }

    setLoading(false);
  };

  const getActionRoute = (routes: MessageDetails, regId?: number): string =>
    (routes.route ?? '')
      .replace(':ctx', ctx ?? 'ors')
      /** The route might already default to '/ors/', additional replace handles that */
      .replace('/ors/', `/${ctx ?? 'ors'}/`)
      .replace(':regId', String(regId || registrationId));

  const showClose =
    updateMessage.details.type === 'success' || updateMessage.code === 'transferCancelled';

  return show ? (
    <LoadingContainer loading={loading || fetchingScores}>
      <StyledSlimAlert size="sm" extended type={updateMessage.details.type} className="update">
        <Message>
          <div>
            <Trans
              t={t}
              i18nKey={getUpdateMessageI18nKey(updateMessage.code)}
              values={{
                osrSkillName: t(
                  getOsrSkillName({
                    skillType:
                      originalExamOsrDetails?.component ||
                      osrDetails?.component ||
                      ComponentType.Listening,
                  })
                ),
                score: osrComponentScore?.toPrecision(2),
              }}
            >
              Update message
              {updateMessage.code === 'termsUpdated' ? (
                <AcceptRegTerms
                  reg={{
                    registrationId: registrationId,
                    organisationCountryId: organisationCountryId,
                    lrwFormatCode,
                    mode: ctx,
                    productId,
                  }}
                  onSuccess={() => setShow(false)}
                  onLoading={(isLoading) => setLoading(isLoading)}
                  appearance="text"
                />
              ) : (
                <Link to={getActionRoute(updateMessage.details, osrRegId)} className="link">
                  link
                </Link>
              )}
            </Trans>
            {updateMessage.code === 'eorRejected' && (
              <EorRejectedContent>
                <strong>
                  <Trans
                    t={t}
                    i18nKey={'APPB2C.common.updateBar.eorRejected.overallBand'}
                    values={{
                      overallBand: overallScore?.score,
                    }}
                  />
                </strong>

                <p>{t('APPB2C.common.updateBar.details')}</p>
              </EorRejectedContent>
            )}
            {updateMessage.code === 'eorCompleted' && <EorCompletedContent />}
            {updateMessage.code === 'osrHasResults' && (
              <>
                <br />
                <strong>{getOsrScoreChangeMessage()}</strong>
              </>
            )}
          </div>

          {showClose && (
            <Close
              onClick={handleCloseUpdate}
              data-testid="close"
              title={t('APPB2C.common.updateBar.close')}
              aria-label={t('APPB2C.common.updateBar.close')}
            >
              ×
            </Close>
          )}
        </Message>
      </StyledSlimAlert>
    </LoadingContainer>
  ) : null;
};

const StyledSlimAlert = styled(SlimAlert)`
  &.update {
    margin: 0 0 30px 0 !important;
    padding: 16px 20px;

    & + & {
      margin-top: -20px;
    }

    @media (max-width: 849px) {
      padding: 8px 20px;

      &:first-of-type {
        margin-top: -10px !important;
      }
      &:last-of-type {
        margin-bottom: 50px !important;
      }
    }

    .icon {
      width: 30px;
      height: 30px;
      margin-right: 12px;
    }

    @media (max-width: 567px) {
      .icon {
        position: absolute;
        left: -10px;
        top: -10px;
      }
    }
  }
`;

const Message = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Close = styled(LinkButton)`
  font-size: 1.2em;
  line-height: initial;
  text-decoration: none !important;
`;

const EorRejectedContent = styled.div`
  strong {
    margin: 5px 0;
    display: block;
    color: #a94442;
  }
`;
