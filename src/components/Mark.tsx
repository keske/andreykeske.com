import * as React from 'react';

// Libs
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const Root = styled.span`
  border: 1px solid #000;
  border-radius: 5px;
  font-weight: bold;
  padding: 5px 10px;
`;

const Mark: React.FC<Props> = ({ children }: Props): JSX.Element => (
  <Root>{children}</Root>
);

export default Mark;
