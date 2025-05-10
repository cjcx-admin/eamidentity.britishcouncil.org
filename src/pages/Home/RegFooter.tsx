import { FC, useMemo, useState } from 'react';
import { Link, generatePath } from 'react-router-dom';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { BsChevronRight } from 'react-icons/bs';
import { Quote } from '@britishcouncil/react-solas-ors3';
import { RegistrationDocumentType, SelfServiceType, WhoPaysType } from 'ors-api/ors2';

import { getExamContext } from 'core';
import { ExamMode, UnifiedExam } from 'common/models';
import { appRoutes, nestedAppRoutes } from 'Navigation';
import { CardAlert, CancelAlert } from './CancelAlert';
import { LinkWrapper } from './LinkWrapper';
import { getDateLocationUrl, getPaymentsUrl, getTestTakerUrl } from './helpers';
import { AcceptRegTerms } from './AcceptRegTerms';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { DateTime } from 'luxon';

interface Props {
  reg: UnifiedExam;
  hasCreds?: boolean;
}

// TODO: this component follows almost all React antipatterns and with its "if-ology" it is very hard to maintain and extend it.
// It should be splitted and completlly rewritten in my opinion.
export const RegistrationFooter: FC<Props> = ({ reg }) => {
  const { t } = useTranslation();

  const isIncomplete = reg.status === 'incomplete';

  const selfServicesRequests = useMemo(() => {
    const selfServiceRequests = reg?.selfServiceRequests ?? [];
    if (
      reg?.isPendingCancellationRequest &&
      !selfServiceRequests.includes(SelfServiceType.Cancellation)
    ) {
      selfServiceRequests.push(SelfServiceType.Cancellation);
    }

    return selfServiceRequests.map((r) => (
      <SelfServiceReq key={r}>
        {r === SelfServiceType.Transfer
          ? t('APPB2C.common.selfServices.requested.transfer')
          : t('APPB2C.common.selfServices.requested.cancellation')}
      </SelfServiceReq>
    ));
  }, [reg?.isPendingCancellationRequest, reg?.selfServiceRequests, t]);

  const hasCreds = !!reg?.hasCredentials;

  if (reg.status === 'cancelled') return <CancelAlert />;

  if (reg.mode === 'iol' && reg.paid && !reg.missingDocuments?.length)
    return (
      <CardAlert intent={hasCreds ? 'success' : 'attention'}>
        {selfServicesRequests}
        <IolActions reg={reg} hasCreds={hasCreds} />
      </CardAlert>
    );

  const pastPaymentDeadline =
    DateTime.fromISO(reg.paymentDeadline, { zone: 'utc' }) <= DateTime.utc();

  if (
    (reg.mode === 'ors' || reg.mode === 'ukvi') &&
    pastPaymentDeadline &&
    (!reg.paid || reg.missingDocuments?.find((v) => v === RegistrationDocumentType.PaymentSlip))
  ) {
    return (
      <CardAlert intent="attention">
        <UnpaidAlert />
      </CardAlert>
    );
  }

  if (isIncomplete)
    return reg.pendingPaymentProofUploadDate ? null : (
      <CardAlert intent="note">
        {selfServicesRequests}
        <IncompleteActions reg={reg} />
      </CardAlert>
    );
  if (reg.status === 'confirmed')
    return (
      <CardAlert
        intent={reg?.isPendingCancellationRequest ? 'note' : 'success'}
        borderRadiusNone={!!reg.oneSkillRetake}
      >
        {selfServicesRequests}
        <ConfirmedActions reg={reg} />
      </CardAlert>
    );

  return null;
};

const IolActions: FC<Props> = ({ reg, hasCreds }) => {
  const { t } = useTranslation();

  return (
    <Quote
      intent={hasCreds ? 'success' : 'warning'}
      title={
        hasCreds ? t('APPB2C.common.alertBar.withCreds') : t('APPB2C.common.alertBar.beforeTest')
      }
    >
      <Link
        data-testid="pre-test-check"
        to={nestedAppRoutes(reg.registrationId, { ctx: 'iol' }).testDetails.check}
        className="btn btn-primary"
      >
        {hasCreds ? t('APPB2C.common.alertBar.creds') : t('APPB2C.common.alertBar.check')}
      </Link>
    </Quote>
  );
};

export const UnpaidAlert: FC = () => {
  const { t } = useTranslation();
  return (
    <UnpaidAlertContainer>
      <AiOutlineExclamationCircle aria-hidden />
      {t('APPB2C.common.startPage.upcoming.pastPaymentDeadline')}
    </UnpaidAlertContainer>
  );
};

const IncompleteActions: FC<Props> = ({ reg }) => {
  const { t } = useTranslation();
  const [showTermLink, setShowTermLink] = useState(reg.needTermsConsentUpdate);

  const missingDocs = reg.missingDocuments
    ?.filter(
      (d) => !(reg.whoPays === WhoPaysType.Agent && d === RegistrationDocumentType.PaymentSlip)
    )
    .map((d) => (
      <MissingDocLink regId={reg.registrationId} regMode={reg.mode} missingDoc={d} key={d} />
    ));
  const missingChildConsent = reg.missingChildConsent && (
    <StyledMissingLink>
      <LinkWrapper
        dataTestId="child-consent"
        route={appRoutes.childConsent
          .replace(':ctx', getExamContext() ?? 'ors')
          .replace(':regId', String(reg.registrationId))}
        label={t('APPB2C.common.startPage.upcoming.missing.childConsent')}
        className="link"
      />
    </StyledMissingLink>
  );

  if (!reg.paid && reg.whoPays !== WhoPaysType.Agent) {
    const paymentsUrl = getPaymentsUrl(reg.mode, reg.registrationId);
    return (
      <Group>
        <LinkWrapper
          dataTestId="pay-for-test"
          route={paymentsUrl}
          label={t('APPB2C.common.startPage.upcoming.pay')}
          className="btn btn-primary"
        />
        {showTermLink && (
          <AcceptRegTerms
            reg={reg}
            onSuccess={() => {
              setShowTermLink(false);
            }}
          />
        )}
      </Group>
    );
  }

  if ((missingDocs && missingDocs.length > 0) || missingChildConsent)
    return (
      <>
        {missingDocs} {missingChildConsent}
      </>
    );

  return <ConfirmedActions reg={reg} />;
};

const ConfirmedActions: FC<Props> = ({ reg }) => {
  const { t } = useTranslation();
  const [showTermLink, setShowTermLink] = useState(reg.needTermsConsentUpdate);

  const detailsUrl = getDateLocationUrl(reg.mode, reg.registrationId);
  const preparationUrl = generatePath(appRoutes.preparation.index, {
    ctx: reg.mode,
    regId: reg.registrationId.toString(),
  });

  return (
    <>
      <Group>
        <LinkWrapper
          dataTestId="registration-details"
          route={detailsUrl}
          label={t('APPB2C.common.startPage.upcoming.manage')}
          className="btn btn-primary"
        />
        {showTermLink ? (
          <AcceptRegTerms
            reg={reg}
            onSuccess={() => {
              setShowTermLink(false);
            }}
          />
        ) : (
          <StyledPrepareLink>
            <LinkWrapper
              dataTestId="test-preparation"
              route={preparationUrl}
              label={t('APPB2C.common.startPage.upcoming.prepare')}
              className="btn btn-link btn-sm"
            >
              <BsChevronRight />
            </LinkWrapper>
          </StyledPrepareLink>
        )}
      </Group>
    </>
  );
};

interface DocLinkProps {
  regId: number;
  regMode: ExamMode;
  missingDoc: RegistrationDocumentType;
}

const MissingDocLink: FC<DocLinkProps> = ({ regId, regMode, missingDoc }) => {
  const { t } = useTranslation();

  const missingDocDict = {
    [RegistrationDocumentType.SpecialArrangement]: {
      href: getTestTakerUrl(regMode, regId),
      dataTestId: 'medical',
      label: t('APPB2C.common.startPage.upcoming.missing.medical'),
    },

    [RegistrationDocumentType.IdDocument]: {
      href: getTestTakerUrl(regMode, regId),
      dataTestId: 'id',
      label: t('APPB2C.common.startPage.upcoming.missing.id'),
    },
    [RegistrationDocumentType.PaymentSlip]: {
      href: getPaymentsUrl(regMode, regId),
      dataTestId: 'payment',
      label: t('APPB2C.common.startPage.upcoming.missing.payment'),
    },
    [RegistrationDocumentType.AdditionalDocument]: {
      href: null,
      dataTestId: null,
      label: null,
    },
  };
  const doc = missingDocDict[missingDoc];
  if (!doc?.href) return null;

  return (
    <StyledMissingLink>
      <LinkWrapper
        dataTestId={doc.dataTestId}
        route={doc.href}
        label={doc.label}
        className="link"
      />
    </StyledMissingLink>
  );
};

const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

const StyledMissingLink = styled.div`
  & + & {
    margin-top: 8px !important;
  }
`;

const StyledPrepareLink = styled.span`
  > a {
    min-width: initial;
    margin: 10px 0 0;
    padding: 0;
    color: #005cb9 !important;

    &:hover {
      color: #000 !important;
    }

    > svg {
      width: 24px;
      height: 24px;
      margin: 0 -6px -6px 10px;

      [dir='rtl'] & {
        margin: 0 10px -6px -6px;
    }

    @media (max-width: 567px) {
      display: block;

      > svg {
        display: none;
      }
    }
  }
`;

const UnpaidAlertContainer = styled.div`
  color: rgb(134, 58, 26) !important;
  > svg {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-right: 6px;
  }
`;

const SelfServiceReq = styled.p`
  margin-bottom: 0.5em !important;
`;
