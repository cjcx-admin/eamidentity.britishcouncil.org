import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { MainContainer } from '@britishcouncil/react-solas-ors3';

interface Props extends PropsWithChildren {
  heading: string;
}

export const HeroHeading = ({ heading, children }: Props) => {
  return (
    <StyledHero>
      <StyleMainContainer className="hero-container">
        <StyledHeading className="page-header" data-testid="page-heading">
          <h1>{heading}</h1>
        </StyledHeading>
        {children}
      </StyleMainContainer>
    </StyledHero>
  );
};

const StyledHeading = styled.div`
  h1 {
    color: #fff;
  }

  :after {
    content: ' ';
    position: absolute;
    bottom: -12px;
    width: 32px;
    left: 0;
    height: 1px;
    border-bottom: 4px solid #fff;

    [dir='rtl'] & {
      right: 0;
    }
  }
  margin-bottom: 40px;

  @media (min-width: 850px) {
    :after {
      bottom: -25px;
      width: 58px;
    }
    margin-bottom: 0;
  }

  @media (min-width: 850px) {
    h1 {
      margin: 0 0 1.6em;
    }
  }
`;

const StyleMainContainer = styled(MainContainer)`
  @media (min-width: 568px) {
    [dir='rtl'] & {
      transform: scaleX(-1);
    }
  }
`;

const StyledHero = styled.div`
  margin-bottom: 20px;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: #026369;

  .hero-container {
    position: relative;
    /* max-width: 980px; */
    padding: 24px 0;

    p.text {
      color: #fff;
      max-width: 65%;
      margin-bottom: 0;
    }

    .btn.btn-default {
      background-color: transparent;
      border-color: #fff;
      color: #fff;

      &:hover,
      :focus {
        background-color: #f1f1f1;
        color: #111;
      }
    }
  }

  @media (max-width: 567px) {
    .hero-container {
      p.text {
        max-width: 100%;
      }
      .btn.btn-default {
        display: block;
      }
    }
  }

  @media (min-width: 568px) {
    background-image: none;
    background-image: url('https://bccdn.britishcouncil.org/apps/ors2/new-ttp/images/ttp_banner-opt.webp');

    [dir='rtl'] & {
      transform: scaleX(-1);
    }
  }
`;
