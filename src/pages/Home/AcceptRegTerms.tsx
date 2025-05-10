import styled from '@emotion/styled';
import { NewTermsModal } from 'ors-ui';
import { isLifeSkillsExam, makeTermsUrl } from 'ors-utils';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { termsAndConditionsTypeClient } from 'ors-api/ors2';
import { ExamMode, LrwFormatCode } from 'common';
import { termsAndConditionsClient as termsAndConditionsClientUkvi } from 'ors-api/ukvi';
import {
  useLazyCheckIfTermsAndConditionsUpdatedQuery,
  useLazyGetRegistrationTermsShortCodeQuery,
} from 'store/registration';

type Reg = {
  registrationId: number;
  organisationCountryId?: number;
  lrwFormatCode?: LrwFormatCode;
  mode?: ExamMode;
  productId?: string;
};

interface Props {
  reg: Reg;
  onSuccess?: () => void;
  appearance?: 'button' | 'text';
  triggerText?: string;
  onLoading?: (isLoading: boolean) => void;
}

/**
 * As a Test Taker informed about the changes in T&Cs,
 * that I've previously accepted, I should be advised
 * to accept new T&Cs for given registration in B2C Customer Journey [ORSNBC-2198].
 */
export const AcceptRegTerms = ({
  reg,
  onSuccess,
  appearance = 'button',
  triggerText,
  onLoading,
}: Props) => {
  const { t } = useTranslation();
  const isUkvi = reg.mode === 'ukvi';
  const client = isUkvi ? termsAndConditionsClientUkvi : termsAndConditionsTypeClient;

  const [shortCode, setShortCode] = useState('');
  const [status, setStatus] = useState<'error' | 'idle' | 'processing'>('idle');

  const [getTermsShortCode, { data: termsShortCode, isFetching, isError }] =
    useLazyGetRegistrationTermsShortCodeQuery();

  const [checkIfTermsAndConditionsUpdated] = useLazyCheckIfTermsAndConditionsUpdatedQuery();

  useEffect(() => {
    setShortCode(termsShortCode ?? '');
  }, [termsShortCode, isFetching]);

  useEffect(() => {
    onLoading && onLoading(isFetching);
    setStatus(isFetching ? 'processing' : isError ? 'error' : 'idle');
  }, [isFetching, isError, onLoading]);

  const isLifeSkills = isLifeSkillsExam(reg?.productId);
  const ukviProductGroupShortCode = isLifeSkills ? 'LIFESKILLS' : 'IELTSUKVI';
  const onSubmit = useCallback(async () => {
    try {
      setStatus('processing');
      await client.addConsentToRegistrationTermsAndConditions(
        {
          productGroupShortCode: isUkvi ? ukviProductGroupShortCode : 'IELTS',
          shortCode,
          subSystemName: 'B2C',
        },
        reg.registrationId,
        reg?.organisationCountryId ?? -1
      );
      onSuccess && (await onSuccess());
      checkIfTermsAndConditionsUpdated({
        registrationId: reg.registrationId,
        organisationCountryId: reg.organisationCountryId,
        shortCode,
        isLifeSkills: isLifeSkills,
      });
      setStatus('idle');
      setShortCode('');
    } catch (error) {
      setStatus('error');
    }
  }, [onSuccess, reg, isUkvi, client, shortCode]);

  const termsLink = makeTermsUrl({
    shortCode,
    organisationCountryId: reg.organisationCountryId,
    withBase: true,
    isLifeSkills,
  });

  return (
    <>
      <StyledLink
        className={cn('btn-link', {
          btn: appearance === 'button',
          lowercase: appearance === 'text',
        })}
        onClick={() =>
          getTermsShortCode({
            registrationId: reg.registrationId,
            orgCountryId: reg.organisationCountryId,
            context: reg.mode,
          })
        }
      >
        {triggerText ?? t('APPB2C.common.modals.newTermsAndConditions.trigger')}
      </StyledLink>
      <NewTermsModal
        show={!!shortCode}
        link={termsLink}
        context="registration"
        processing={status === 'processing'}
        onSubmit={onSubmit}
        hasError={status === 'error'}
        modalProps={{
          showHideLink: true,
          onExit: () => setShortCode(''),
        }}
      />
    </>
  );
};

const StyledLink = styled('button')`
  padding: 0;
  &.lowercase {
    text-transform: lowercase;
  }
`;
