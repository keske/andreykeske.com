import React from 'react';
import styled, { css } from 'styled-components';

import { mediaQuery } from '../utils';

type Props = {
  children: React.ReactNode;
  invert?: boolean;
};

const Root = styled.p<Props>`
  color: ${({ invert }) => (invert ? 'white' : 'black')};
  line-height: 2;

  ${mediaQuery(
    'phone',
    css`
      line-height: 1.5;
    `,
  )}
`;

const Text: React.FC<Props> = ({ children, ...rest }: Props) => (
  <Root {...rest}>{children}</Root>
);

export default Text;
