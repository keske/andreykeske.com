import * as React from 'react';

// Libs
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const Root = styled.span`
  border: 1px solid #000;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
  margin: 0 3px;
  padding: 5px 10px;
`;

const Mark: React.FC<Props> = ({
  children,
  ...rest
}: Props): JSX.Element => <Root {...rest}>{children}</Root>;

export default Mark;
