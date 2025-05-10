import { AnchorHTMLAttributes, FC } from 'react';
import { Link } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';

interface Props {
  to: string;
  text?: string;
}

export const BackLinkRouter: FC<Props & AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  to,
  text,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <StyledLink to={to} {...props}>
      <BsChevronLeft />
      <span>{text ? text : t('APPB2C.common.basic.goBack')}</span>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  line-height: 1em;

  > span {
    margin-left: 6px;

    [dir='rtl'] & {
      margin-left: inherit;
      margin-right: 6px;
    }
  }
`;
