import React from 'react';
import styled from '@emotion/styled';
import { Card } from '@britishcouncil/react-solas-ors3';
import { LoaderSimple } from '@britishcouncil/react-extro-ui';

import { breakpoints } from 'ors-ui';

type Props = {
  Icon: React.FC<React.HTMLAttributes<SVGElement>>;
  text: string;
  disabled?: boolean;
  isLoading?: boolean;
  btnTestId: string;
  action?: () => void;
};

export const ManageBookingCard = ({
  Icon,
  text,
  action,
  disabled,
  isLoading,
  btnTestId,
}: Props) => {
  return (
    <StyledButton onClick={action} disabled={disabled} data-testid={btnTestId}>
      <StyledCard className="card" disabled={disabled}>
        {isLoading ? (
          <LoaderSimple
            style={{ width: '32px', height: '32px', marginBottom: '7px', color: '#005CB9' }}
          />
        ) : (
          <IconContainer disabled={disabled}>
            <Icon />
          </IconContainer>
        )}
        <Title>{text}</Title>
      </StyledCard>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  flex: 1;
  @media (max-width: ${breakpoints['screen-md-min']}px) {
    width: 100%;
  }

  :hover {
    .card {
      box-shadow: 0 0 0 2px #005cb9;
    }
  }

  :focus,
  :active {
    .card {
      box-shadow: 0 0 0 2px #005cb9, 0 0 0 6px rgba(1, 156, 238, 0.5);
    }
  }
`;

const IconContainer = styled.div<{ disabled?: boolean }>`
  svg {
    width: 32px;
    height: 32px;
  }

  ${({ disabled }) =>
    disabled &&
    `
    filter: opacity(50%);
    `}
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 !important;
  padding: 16px 20px;
  transition: all 0.2s ease-in-out;

  ${({ disabled }) =>
    disabled &&
    `
    filter: grayscale(100%);
    background-color: #fafafa;
    box-shadow: none !important;
    `}
`;

const Title = styled.p`
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 600;

  [dir='rtl'] & {
    font-weight: 500;
  }
`;
