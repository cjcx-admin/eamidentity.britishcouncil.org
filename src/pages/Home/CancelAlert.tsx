import { FC, PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { BsXOctagon } from 'react-icons/bs';

export const CancelAlert: FC = () => {
  const { t } = useTranslation();
  return (
    <StyledAlert role="alert" className="alert alert-warning">
      <BsXOctagon />

      {t('APPB2C.common.startPage.common.cancelled')}
    </StyledAlert>
  );
};

interface Props extends PropsWithChildren {
  intent: 'note' | 'success' | 'attention';
  borderRadiusNone?: boolean;
}

export const CardAlert: FC<Props> = ({ children, intent, borderRadiusNone }) => {
  return (
    <StyledAlert
      role="alert"
      className={'alert alert-' + intent}
      borderRadiusNone={borderRadiusNone}
    >
      {children}
    </StyledAlert>
  );
};

const StyledAlert = styled.div<{ borderRadiusNone?: boolean }>`
  margin: 10px -24px -24px;
  border-bottom: 0 none;
  border-left: 0 none;
  border-right: 0 none;
  border-bottom-left-radius: ${({ borderRadiusNone }) => (borderRadiusNone ? 0 : '12px')};
  border-bottom-right-radius: ${({ borderRadiusNone }) => (borderRadiusNone ? 0 : '12px')};

  &.alert-note {
    background-color: #fcf8e4;
    border-color: #edcf93;
  }

  &.alert-success {
    color: #000;
  }

  &.alert-attention {
    background-color: #ffeee4;
    border-color: #ff7a29;
    color: #000;
  }

  > svg {
    margin: 0px 10px -5px -5px;
    width: 24px;
    height: 24px;

    [dir='rtl'] & {
      margin: 0px -5px -5px 10px;
    }
  }

  > .btn-link:hover {
    color: #000;
  }

  > div {
    margin: 0 !important;
  }
`;
