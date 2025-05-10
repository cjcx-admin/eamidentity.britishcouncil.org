import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { LoadingContainer } from '@britishcouncil/react-solas';
import { BcAlert, Quote } from '@britishcouncil/react-solas-ors3';

import { getExamContext, useSelector } from 'core';
import { AlertBar } from 'common';
import { ActionCode, ActionRoutes, AlertAction } from './models';

interface Props {
  reg: AlertBar;
  activeActions: AlertAction[];
}

export const AlertBarContent: FC<Props> = ({ reg, activeActions }) => {
  const { t } = useTranslation();

  const { processing, processingDocs, allowedActions } = useSelector((s) => s.registration);

  const getActionTitle = (code: ActionCode) => {
    switch (code) {
      case 'creds':
        return t('APPB2C.common.alertBar.withCreds');
      case 'eorPayment':
        return t('APPB2C.common.alertBar.afterTest');
      case 'eorPaymentProof':
        return t('APPB2C.common.alertBar.afterTest');
      default:
        return t('APPB2C.common.alertBar.beforeTest');
    }
  };

  const getActionLabel = (code: ActionCode) => {
    switch (code) {
      case 'regPayment':
        return t('APPB2C.common.alertBar.regPayment');
      case 'regPaymentProof':
        return t('APPB2C.common.alertBar.regPaymentProof');
      case 'idUpload':
        return t('APPB2C.common.alertBar.idUpload');
      case 'idReupload':
        return t('APPB2C.common.alertBar.idReupload');
      case 'medicalUpload':
        return t('APPB2C.common.alertBar.medicalUpload');
      case 'medicalReupload':
        return t('APPB2C.common.alertBar.medicalReupload');
      case 'childConsentMissing':
        return t('APPB2C.common.alertBar.childConsentMissing');
      case 'check':
        return t('APPB2C.common.alertBar.check');
      case 'creds':
        return t('APPB2C.common.alertBar.creds');
      case 'cancelReupload':
        return t('APPB2C.common.alertBar.cancelReupload');
      case 'eorPayment':
        return t('APPB2C.common.alertBar.eorPayment');
      case 'eorPaymentProof':
        return t('APPB2C.common.alertBar.eorPaymentProof');
      default:
        return '';
    }
  };

  const getActionRoute = (routes: ActionRoutes): string =>
    (routes.route ?? '')
      .replace(':ctx', getExamContext() ?? 'ors')
      .replace(':regId', String(reg.registrationId));

  const loading = processingDocs || processing || allowedActions.isLoading;

  return activeActions.length > 0 ? (
    <AlertWrapper>
      <LoadingContainer loading={loading}>
        <StyledBcAlert
          size="sm"
          extended
          title={getActionTitle(activeActions[0]?.code)}
          type={activeActions.length === 1 && !!reg?.hasCredentials ? 'success' : 'warning'}
        >
          <ActionsWrapper>
            {activeActions.map((action, index) => {
              const label = getActionLabel(action.code);

              return (
                <LinkWrapper fullWidth={index === 0} key={index}>
                  <Link
                    data-testid={action.code}
                    to={getActionRoute(action.routes)}
                    className={index === 0 ? 'btn btn-primary' : 'link'}
                  >
                    {index === 0 ? label : <Quote title="">{label}</Quote>}
                  </Link>
                </LinkWrapper>
              );
            })}
          </ActionsWrapper>
        </StyledBcAlert>
      </LoadingContainer>
    </AlertWrapper>
  ) : (
    <></>
  );
};

const AlertWrapper = styled.div`
  .loading {
    &::before,
    &::after {
      z-index: 11 !important;
    }
  }
`;

const StyledBcAlert = styled(BcAlert)`
  margin: 0 0 30px 0 !important;
  flex-direction: row !important;

  @media (max-width: 849px) {
    margin: -10px 0 50px 0 !important;
  }

  @media (max-width: 567px) {
    .btn {
      padding: 10px 14px;
    }

    .icon {
      position: absolute;
      left: -10px;
      top: -20px;
    }
  }

  h2 {
    margin: 6px 0 16px 0;
    font-size: 1.1em;
  }

  .link:not(:hover) {
    text-decoration: none;
  }
`;

const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: -8px;
`;

const LinkWrapper = styled.div<{ fullWidth: boolean }>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  margin: 8px;

  .bc-quote {
    margin-bottom: 0;
    font-size: 0.9em;

    > b {
      display: none;
    }
  }
`;
