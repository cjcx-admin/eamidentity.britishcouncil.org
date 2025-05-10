import { FC } from 'react';
import styled from '@emotion/styled';

interface Props {
  /** Percentage value (0 - 100). Used to determine fill of the progressbar */
  value: number;
  /** Value to be printed inside */
  label?: number;
}

export const CircularProgress: FC<Props> = ({ value, label }) => {
  const val = 280 - (value / 100) * 280;

  return (
    <StyledProgress>
      <StyledSvg viewBox="0 0 100 100">
        <path
          className="spinner-track"
          d="m51,50.5m0,-42.5a42,42.5 0 1 1 0,85a42.5,42.5 0 1 1 0,-85"
        />
        <path
          className="spinner-head"
          d="m51,50.5m0,-42.5a42,42.5 0 1 1 0,85a42.5,42.5 0 1 1 0,-85"
          pathLength="280"
          strokeDasharray="280 280"
          strokeDashoffset={val}
        />
      </StyledSvg>
      {label && <strong>{Math.round(label * 10) / 10}</strong>}
    </StyledProgress>
  );
};

const StyledSvg = styled.svg`
  stroke-width: 12;
  width: 5.5em;
  height: 5.5em;

  path {
    fill-opacity: 0;
  }
  .spinner-track {
    stroke: #c8c8c8;
  }
  .spinner-head {
    stroke-linecap: round;
    stroke: #00953b;
  }
`;

const StyledProgress = styled.span`
  display: inline-block;
  position: relative;

  strong {
    display: block;
    position: absolute;
    width: 100%;
    text-align: center;
    top: 0.64em;
    font-size: 2em;
    color: #23085a;
  }
`;
