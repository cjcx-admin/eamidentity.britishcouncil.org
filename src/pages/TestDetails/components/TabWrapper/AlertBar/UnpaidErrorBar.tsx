import styled from '@emotion/styled';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

const StyledErrorAlert = styled.div`
  padding: 20px;
  margin: 10px 0;
  display: flex;
  justify-content: flex-start;
  border-radius: 50px 0;
  background-color: rgba(255, 186, 184, 0.5);
  & {
    div {
      line-height: 35px;
    }

    svg {
      margin-right: 10px;
      fill: #ea0034;
      width: 35px;
      height: 35px;

      [dir='rtl'] & {
        margin-left: 10px;
      }
    }
  }
`;

export const UnpaidErrorBar: FC = () => {
  const { t } = useTranslation();
  return (
    <StyledErrorAlert>
      <AiOutlineExclamationCircle aria-hidden />
      <div>{t('APPB2C.common.unpaidErrorBar.paymentExpired')}</div>
    </StyledErrorAlert>
  );
};
