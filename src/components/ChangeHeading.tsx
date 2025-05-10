import { AnchorHTMLAttributes, FC } from 'react';
import styled from '@emotion/styled';
import cn from 'classnames';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  to?: string;
  dataTestId?: string;
  showLink?: boolean;
  headingClassName?: string;
}

export const ChangeHeading: FC<Props & AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  to,
  as,
  title,
  children,
  dataTestId,
  className,
  showLink = true,
  headingClassName,
  ...props
}) => {
  const Component = as || 'h2';

  return (
    <Heading data-testid={dataTestId}>
      <Component className={headingClassName}>{title}</Component>
      {showLink && (
        <StyledLink to={to ?? '#'} className={cn(className, 'btn-link', 'link')} {...props}>
          {children}
        </StyledLink>
      )}
    </Heading>
  );
};

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 1px 6px;
  border-width: 2px;
  margin-top: 2px;
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
