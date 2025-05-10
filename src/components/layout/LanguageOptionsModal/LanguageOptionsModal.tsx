import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { Button } from '@britishcouncil/react-solas';
import { Modal, useActiveCountryLanguageSettings } from 'ors-ui';
import { AwardingBodySystem, ProductFamilies } from 'ors-api/mod';
import { defaultLanguage, hasIeltsUsaUrl, selectLanguage } from 'ors-translations';

import { GTM, switchLanguage } from 'core';
import { useLocale } from 'common';
import { useGetCountriesQuery } from 'store';

interface Props {
  countryId?: number;
}

export const LanguageOptionsModal = ({ countryId }: Props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { locale } = useLocale();
  const [showModal, setShowModal] = useState<boolean>(false);

  const { data: countries } = useGetCountriesQuery(
    {
      locale,
      awardingBodySystem: AwardingBodySystem.CMDS,
      productFamilyId: ProductFamilies.IELTS,
    },
    { skip: !countryId }
  );

  const selectedCountryName = useMemo(() => {
    return countryId && countries?.find((c) => c.id === countryId)?.name;
  }, [countryId, countries, locale]);

  const { isCurrentLangAvailable, langs, currentLangName, singleLangAvailable } =
    useActiveCountryLanguageSettings(
      locale,
      countries?.find((c) => c.id === countryId)?.additionalLanguages
    );

  const dispatchLangSwitch = useCallback((lang: string) => {
    switchLanguage(lang, dispatch);
    setShowModal(false);
  }, []);

  const handleExit = () => isCurrentLangAvailable && setShowModal(false);

  useEffect(() => {
    if (countryId && !hasIeltsUsaUrl() && locale !== defaultLanguage) {
      const country = countries?.find((c) => c.id === countryId);

      const isLangSupported = country?.additionalLanguages?.includes(locale) ?? true;

      !isLangSupported && setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [locale, countryId, countries]);

  return (
    <Modal
      show={showModal}
      onExit={handleExit}
      title={t('APPB2C.common.findTest.langModal.title')}
      intent="gray"
      showHideLink={false}
      modalProps={{
        alert: !isCurrentLangAvailable,
      }}
      onHide={() => GTM.trackModal('Hide', 'language-options-modal')}
      onShow={() => GTM.trackModal('Show', 'language-options-modal')}
      dataTestId="lang-options-modal"
    >
      <ModalContent>
        <p>
          {t(
            singleLangAvailable
              ? 'APPB2C.common.findTest.langModal.chooseSingle'
              : 'APPB2C.common.findTest.langModal.choose',
            { countryName: selectedCountryName, languageName: currentLangName }
          )}
        </p>
        <OptionList>
          {langs.map((lang) => (
            <Button
              data-testid={`lang-option-${lang.code}`}
              key={lang.code}
              intent="link"
              size="xs"
              onClick={() => dispatchLangSwitch(selectLanguage(lang.code))}
            >
              {lang.name}
            </Button>
          ))}
        </OptionList>
      </ModalContent>
    </Modal>
  );
};

const ModalContent = styled.div`
  max-width: 800px;
`;

const OptionList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > button {
    margin: 20px 0 0 !important;
    padding: 0 !important;
    box-shadow: none !important;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;
