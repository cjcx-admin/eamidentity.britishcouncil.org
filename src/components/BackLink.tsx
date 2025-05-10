import { AnchorHTMLAttributes, useMemo } from 'react';
import styled from '@emotion/styled';
import { BsChevronLeft } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  dataTestId?: string;
  text?: string;
}

export const BackLink = ({ dataTestId, text, ...props }: Props) => {
  const { t } = useTranslation();

  const children = useMemo(
    () => (
      <Root>
        <BsChevronLeft className="divider" />
        {text ?? t('APPB2C.common.basic.goBack')}
      </Root>
    ),
    [t, text]
  );

  return props.href ? (
    <Link data-testid={dataTestId} to={props.href} {...props}>
      {children}
    </Link>
  ) : (
    <a data-testid={dataTestId} {...props}>
      {children}
    </a>
  );
};

const Root = styled.div`
  display: inline-block;
  cursor: pointer;

  svg {
    margin-right: 6px;
    margin-bottom: -2px;

    [dir='rtl'] & {
      margin-right: inherit;
      margin-left: 6px;
    }
  }
`;
