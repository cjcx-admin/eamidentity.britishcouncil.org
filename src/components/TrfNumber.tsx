import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { valueOrDash } from 'common/utils';
import { useGetRegistrationResultsTrfNumberQuery } from 'store/results';
import { useSelectedRegistrationType } from 'core';

interface Props {
  regId: number;
  isCmds: boolean;
}

export const TrfNumber: FC<Props> = ({ regId, isCmds }) => {
  const { t } = useTranslation();
  const registrationFlow = useSelectedRegistrationType(isCmds);

  const { data: trfNumber, isFetching } = useGetRegistrationResultsTrfNumberQuery({
    registrationId: regId,
    examType: registrationFlow,
  });

  return isFetching ? (
    <>{t('APPB2C.common.regHeader.trfLoading')}</>
  ) : (
    <>{valueOrDash(trfNumber?.hasValue && trfNumber?.value)}</>
  );
};
