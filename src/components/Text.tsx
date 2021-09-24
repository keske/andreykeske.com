import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  invert?: boolean;
};

const Root = styled.p<Props>`
  color: ${({ invert }) => (invert ? 'white' : 'black')};
  font-size: 18px;
  line-height: 32px;
`;

const Text: React.FC<Props> = ({ children, ...rest }: Props) => (
  <Root {...rest}>{children}</Root>
);

export default Text;
