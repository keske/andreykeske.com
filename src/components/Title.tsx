import React from 'react';
import styled, { css } from 'styled-components';

import { mediaQuery } from '../utils';

type Props = {
  children: React.ReactNode;
  invert?: boolean;
};

const Root = styled.h3<Props>`
  color: ${({ invert }) => (invert ? 'white' : 'black')};
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 0.05em;
  margin: 40px 0 20px;
  text-transform: uppercase;

  ${mediaQuery(
    'phone',
    css`
      font-size: 18px;
    `,
  )}
`;

const Title: React.FC<Props> = ({ children, ...rest }: Props) => (
  <Root {...rest}>{children}</Root>
);

export default Title;
