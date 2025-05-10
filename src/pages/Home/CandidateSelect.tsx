import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { BcAlert } from '@britishcouncil/react-solas';
import { Candidate } from 'ors-api/ors2';
import { DropdownIcon, SearchAndSelect } from 'ors-ui';

import { useLocale } from 'common';

interface Props {
  candidates: Candidate[];
  candidate?: Candidate;
  onChange: (selectedValue?: Candidate) => void;
  isAdultMinor: boolean;
}

export const CandidateSelect: FC<Props> = ({ candidates, candidate, onChange, isAdultMinor }) => {
  const { t } = useTranslation();
  const { localeDate } = useLocale();

  return (
    <Root>
      <label>{t('APPB2C.common.startPage.candidates.showingFor')}</label>
      <SearchAndSelect
        id="candidates-dropdown"
        value={candidate ? String(candidate.id) : ''}
        options={candidates.map((c) => ({
          name: `${c.firstName} (${localeDate(c.dob, { month: 'numeric' })})`,
          value: c.id.toString(),
        }))}
        renderValue={(valueProps: any, snapshot: any, className: string) =>
          renderVal(valueProps, className)
        }
        onChange={(selectedValue: any) =>
          onChange(
            candidates.find((c) => {
              return String(c.id) === selectedValue;
            })
          )
        }
      />
      {isAdultMinor && (
        <BcAlert type="note" style={{ marginTop: '20px' }}>
          {t('APPB2C.common.startPage.candidates.nowAdult', { name: candidate?.firstName })}
        </BcAlert>
      )}
    </Root>
  );
};

function renderVal(valueProps: any, className: string) {
  return (
    <div {...valueProps} className={className} id={`showing-for-${valueProps.value.toLowerCase()}`}>
      <b>{valueProps.value}</b>
      <DropdownIcon aria-hidden="true" />
    </div>
  );
}

const Root = styled.div`
  max-width: 70%;
  margin: 0 auto 20px;

  @media (min-width: 850px) {
    font-size: 0.9em;
  }
  @media (max-width: 849px) {
    max-width: 100%;
  }
`;
