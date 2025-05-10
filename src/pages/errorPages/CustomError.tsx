import { FC, PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { BcAlert, MainContainer } from '@britishcouncil/react-solas-ors3';

export interface ErrorPageProps extends PropsWithChildren {
  title?: string;
  msg?: string;
  type: 'danger' | 'success' | 'warning';
  linkTitle?: string;
  linkUrl?: string;
}

export const CustomError: FC<ErrorPageProps> = ({
  title,
  msg,
  type,
  linkTitle,
  linkUrl,
  children,
}) => {
  return (
    <Styled404Container>
      <BcAlert title={title} type={type}>
        <p>{msg}</p>
        {children}
        {linkUrl && linkTitle && (
          <p>
            <a href={linkUrl}>{linkTitle}</a>
          </p>
        )}
      </BcAlert>
    </Styled404Container>
  );
};

const Styled404Container = styled(MainContainer)`
  position: relative;

  & {
    margin-bottom: 24px;
  }

  &:after {
    position: absolute;
    content: '404';
    bottom: 0px;
    right: 0;
    font-size: 144px;
    line-height: 90px;
    color: #fff;
    z-index: 0;
  }
`;
