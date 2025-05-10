import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { CustomError } from './CustomError';

const RegNotFound: FC = () => {
  const { t } = useTranslation();

  return (
    <CustomError
      title={t('APPB2C.common.general.regNotFound')}
      msg={t('APPB2C.common.basic.notFound.msg')}
      type="danger"
      linkTitle={t('APPB2C.common.basic.notFound.goHome')}
      linkUrl="/ttp/"
    />
  );
};

export default RegNotFound;
