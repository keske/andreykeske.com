import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  invert?: boolean;
};

const Root = styled.p<Props>`
  color: ${({ invert }) => (invert ? 'white' : 'black')};
`;

const Text: React.FC<Props> = ({ children, ...rest }: Props) => (
  <Root {...rest}>{children}</Root>
);

export default Text;
