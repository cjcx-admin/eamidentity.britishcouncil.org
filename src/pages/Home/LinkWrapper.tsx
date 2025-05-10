import { FC, HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  route: string;
  label?: string;
  dataTestId?: string;
}

export const LinkWrapper: FC<Props & HTMLAttributes<HTMLAnchorElement>> = ({
  route,
  label,
  dataTestId,
  children,
  ...props
}) => {
  return (
    <Link data-testid={dataTestId} to={route} {...props}>
      {label}
      {children}
    </Link>
  );
};
