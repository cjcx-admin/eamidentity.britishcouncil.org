import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { Container } from '@britishcouncil/react-solas';
import { RegistrationDto as RegistrationDtoIol } from 'ors-api/iol';
import { RegistrationDto as RegistrationDtoMod } from 'ors-api/mod';
import { formatSurname } from 'ors-utils';
import { breakpoints } from 'ors-ui';

import { converters, getOsrSkillName, useLocale } from 'common';
import { TrfNumber } from 'components/TrfNumber';

interface Props {
  registration?: RegistrationDtoMod;
  registrationIol?: RegistrationDtoIol;
  isCmds: boolean;
}

export const RegDetailsHeader: FC<Props> = ({ registration, registrationIol, isCmds }) => {
  const { t } = useTranslation();
  const { locale } = useLocale();

  if (!registration && !registrationIol) return null;

  const reg =
    (registration && converters.toUnifiedRegHeader(locale).fromIcRegDetails(registration)) ??
    (registrationIol && converters.toUnifiedRegHeader(locale).fromIolRegDetails(registrationIol));

  const registrationId = registration?.id ?? registrationIol?.id ?? -1;

  return (
    <StyledContainer>
      <Container>
        <h2 data-testid="exam-type-and-date">
          {reg?.moduleTitle}
          {reg?.osrComponent ? (
            <RetakeComponent>
              {` (${t(getOsrSkillName({ skillType: reg?.osrComponent, withRetake: true }))})`}
            </RetakeComponent>
          ) : (
            ''
          )}
          : <TestDate>{reg?.date}</TestDate>
        </h2>

        <Flex>
          <div>
            <LargeFont data-testid="full-name">
              {reg?.firstName} {formatSurname(reg?.surname)}
            </LargeFont>
            <div data-testid="centre-name">{reg?.centre}</div>
          </div>
          <SmallFont>
            <div data-testid="reference">
              {t('APPB2C.common.regHeader.reference')}: <span>{reg?.reference}</span>
            </div>
            {reg && (
              <div data-testid="trf-number">
                {t('APPB2C.common.regHeader.trfNumber')}:{' '}
                <span>
                  <TrfNumber regId={registrationId} isCmds={isCmds} />
                </span>
              </div>
            )}
          </SmallFont>
        </Flex>
      </Container>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  margin: -30px 0 30px;
  padding: 15px 0;
  border-top: 1px solid #bfcbd6;
  border-bottom: 1px solid #bfcbd6;
  background: #fafcff;

  &.no-margin-bottom {
    margin-bottom: -10px;

    @media (max-width: ${breakpoints['screen-sm-max']}px) {
      margin-bottom: 0;
    }
  }

  h2 {
    margin-bottom: 10px;
  }
`;

const RetakeComponent = styled.span`
  font-size: 0.82em;
  white-space: nowrap;
`;

const TestDate = styled.span`
  white-space: nowrap;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const LargeFont = styled.div`
  font-size: 1.1em;
  word-break: break-all;
`;

const SmallFont = styled.div`
  font-size: 0.8em;
  line-height: 2em;
  text-align: right;
  @media only screen and (max-width: ${breakpoints['screen-sm-min']}px) {
    text-align: left;
  }
`;
