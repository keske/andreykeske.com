import * as React from 'react';

// Libs
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const Root = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 31px;
  box-shadow: 0 2px 8px 0px rgba(0, 0, 0, 0.1);
  color: #000;
  display: inline-block;
  margin-top: 10px;
  padding: 13px 33px;
`;

const Button: React.FC<Props> = ({
  children,
  ...rest
}: Props): JSX.Element => <Root {...rest}>{children}</Root>;

export default Button;
