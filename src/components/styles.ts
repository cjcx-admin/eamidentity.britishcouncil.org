import { ReadonlyField } from '@britishcouncil/react-solas-ors3';
import styled from '@emotion/styled';
import { breakpoints } from 'ors-ui';

export const SmallFont = styled.div`
  font-size: 0.8em;
  line-height: 2em;
  text-align: right;
  @media only screen and (max-width: ${breakpoints['screen-sm-min']}px) {
    text-align: left;
  }
`;

export const Monospace = styled.span`
  white-space: nowrap;
`;

export const LargeFont = styled.div`
  font-size: 1.1em;
`;

export const HelpOption = styled.p<{ marginTopZero?: boolean }>`
  margin: ${(props) => (props.marginTopZero ? 0 : 32)}px 0 10px 0;
`;

export const StyledReadonlyField = styled(ReadonlyField)`
  line-break: anywhere;
`;

export const Reference = styled.p`
  font-weight: bold;

  [dir='rtl'] & {
    font-weight: 500;
  }
`;

export const HelpHeader = styled.h2`
  margin-bottom: 15px;
`;

export const IcContentHeader = styled.p`
  margin: 10px 0 0;
`;

export const ActionHeader = styled.h3`
  margin-top: 10px;
`;

export const SelectWrapper = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 30px;

  p {
    font-size: 0.9em;
    margin: 0;
  }
`;
