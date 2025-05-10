import { FC, HTMLAttributes, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ExamFormat } from 'ors-api/mod';
import { makeTermsUrl } from 'ors-utils';
import { ApiErrorsAlert, LinkButton } from 'ors-ui';
import { GoLinkExternal } from 'react-icons/go';
import { LoadingContainer } from '@britishcouncil/react-solas';

import { getExamContext } from 'core';
import { useLazyGetRegistrationTermsShortCodeQuery } from 'store/registration';

interface Props {
  isOsr: boolean;
  registrationId?: number;
  organisationCountryId?: number;
  examFormat?: ExamFormat;
  isLifeSkills?: boolean;
}

export const Terms: FC<Props & HTMLAttributes<HTMLParagraphElement>> = ({
  isOsr = false,
  registrationId,
  organisationCountryId,
  examFormat,
  isLifeSkills,
  ...props
}) => {
  const { t } = useTranslation();
  const isUkvi = getExamContext() === 'ukvi';

  const [getTermsShortCode, { data: termsShortCode, isFetching, isError }] =
    useLazyGetRegistrationTermsShortCodeQuery();

  const handleClick = () => {
    termsShortCode
      ? window.open(
          makeTermsUrl({
            shortCode: termsShortCode,
            organisationCountryId,
            isUkvi: isUkvi,
            isLifeSkills: isLifeSkills,
            withBase: true,
          })
        )
      : getTermsShortCode({
          registrationId,
          orgCountryId: organisationCountryId,
        });
  };

  useEffect(() => {
    termsShortCode &&
      window.open(
        makeTermsUrl({
          shortCode: termsShortCode,
          organisationCountryId,
          isUkvi: isUkvi,
          isLifeSkills: isLifeSkills,
          withBase: true,
        })
      );
  }, [termsShortCode]);

  return (
    <LoadingContainer loading={isFetching}>
      <p {...props}>
        {t('APPB2C.cj.bookingComplete.tnc')}&nbsp;
        <LinkButton onClick={() => handleClick()}>
          {t('APPB2C.cj.bookingComplete.tncLink')}
          <GoLinkExternal />
        </LinkButton>
      </p>
      <ApiErrorsAlert forceShow={isError} style={{ marginBottom: '25px' }} />
    </LoadingContainer>
  );
};
