import * as React from 'react';

// Libs
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const Root = styled.button`
  background-color: #000;
  border: none;
  border-radius: 31px;
  color: #fff;
  display: inline-block;
  margin-top: 10px;
  padding: 23px 33px;
`;

const Button: React.FC<Props> = ({
  children,
  ...rest
}: Props): JSX.Element => <Root {...rest}>{children}</Root>;

export default Button;
