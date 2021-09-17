import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  invert?: boolean;
};

const Root = styled.h3<Props>`
  color: ${({ invert }) => (invert ? 'white' : 'black')};
  font-size: 24px;
  font-weight: bold;
`;

const SubTitle: React.FC<Props> = ({ children, ...rest }: Props) => (
  <Root {...rest}>{children}</Root>
);

export default SubTitle;
