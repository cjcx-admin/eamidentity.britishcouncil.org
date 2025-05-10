import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import styled from '@emotion/styled';
import { Button } from '@britishcouncil/react-solas';
import { useForm } from '@britishcouncil/react-forms';
import { CandidateMarketingPreferences } from 'ors-api/ors2';
import {
  CandidateMarketingPreferencesEnum,
  MarketingPreferences,
  Modal,
  marketingPrefsValidation,
} from 'ors-ui';

import { organisationCountry } from 'store/organisationCountry';
import { useSelector, useTranslateFormErrors } from 'core';
import { MissingMarketingForm } from './model';

interface Props {
  show: boolean;
  marketingPref?: CandidateMarketingPreferences;
  onSubmit: (values: MissingMarketingForm) => void;
}

export const MissingMarketingModal = ({ show, marketingPref, onSubmit }: Props) => {
  const { t } = useTranslation();
  const getSchema = () =>
    yup.object().shape({
      marketingPrefs: marketingPrefsValidation(),
    });
  const { formik, fields } = useForm<MissingMarketingForm>(
    getSchema(),
    { marketingPrefs: marketingPref || CandidateMarketingPreferencesEnum.NotSpecified } as any,
    onSubmit
  );
  useTranslateFormErrors(formik);

  const preferences = useSelector(organisationCountry.selectors.getMarketingPreferences);

  const goAboveCookieBanner = useCallback(() => {
    /** Show modal above cookie consent banner used by BC.
     * Otherwise modal's buttons are hidden and not clickable.
     * z-index needs to be that high because cookie banner is 2147483645
     */
    setTimeout(() => {
      const modalParent = document.getElementById('react-aria-modal-dialog')?.parentElement;
      modalParent?.style.setProperty('z-index', '2147483646');
    }, 0);
  }, []);

  return (
    <Modal
      intent="gray"
      show={show}
      title={t('APPB2C.common.startPage.missing.marketing.title')}
      onExit={() => null}
      footer={<Footer onSubmit={formik.handleSubmit} />}
      showHideLink={false}
      onShow={goAboveCookieBanner}
    >
      <ModalBody>
        <StyledForm>
          <MarketingPreferences formProps={fields.marketingPrefs} preferences={preferences} />
        </StyledForm>
      </ModalBody>
    </Modal>
  );
};

interface FooterProps {
  onSubmit: () => void;
}

const Footer = ({ onSubmit }: FooterProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Button intent="primary" onClick={onSubmit} type="button">
        {t('APPB2C.common.startPage.missing.marketing.cta')}
      </Button>
    </>
  );
};

const StyledForm = styled.form`
  margin: -26px -20px;
  padding: 5px 20px 20px;
  background: #e5eff8;
`;

const ModalBody = styled.div`
  /* Keep the same size as login modal */
  max-width: 540px;
`;
