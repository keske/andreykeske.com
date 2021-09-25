import * as React from 'react';

// Libs
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const Root = styled.div`
  color: #000;
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  padding: 0px 5px;
  transform: translateY(-10px);
`;

const Arrow: React.FC<Props> = ({ children }: Props): JSX.Element => (
  <Root>
    <span>{children}</span>
  </Root>
);

export default Arrow;
