import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { PageContainer } from '@britishcouncil/react-solas-ors3';
import { useParams } from 'react-router-dom';

import { nestedAppRoutes } from 'Navigation';
import { BackLinkRouter, SlimAlert } from 'components';
import { getExamContext } from 'core';

interface PageParams {
  isIol?: boolean;
  bannerTransKey?: string;
}

const Thanks: FC<PageParams> = ({ bannerTransKey }) => {
  const bannerText = bannerTransKey || 'APPB2C.common.helpAndContact.form.thanks.banner';
  const { t } = useTranslation();
  const { regId } = useParams();
  const ctx = getExamContext();

  return (
    <div>
      <SlimAlert type="success" extended>
        <p>{t(bannerText)}</p>
      </SlimAlert>

      <PageContainer>
        <h2>{t('APPB2C.common.helpAndContact.form.thanks.title')}</h2>
        <p>{t('APPB2C.common.helpAndContact.form.thanks.info')}</p>

        {regId && (
          <BackLinkRouter
            to={nestedAppRoutes(regId, { ctx }).testDetails.dateLocation}
            text={t('APPB2C.common.helpAndContact.form.thanks.back')}
          ></BackLinkRouter>
        )}
      </PageContainer>
    </div>
  );
};

export default Thanks;
