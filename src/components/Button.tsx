import * as React from 'react';

// Libs
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const Root = styled.button`
  background-color: #000;
  border: none;
  border-radius: 7px;
  color: #fff;
  display: inline-block;
  margin-top: 10px;
  padding-bottom: 13px;
  padding-left: 23px;
  padding-right: 23px;
  padding-top: 13px;
`;

const Button: React.FC<Props> = ({
  children,
}: Props): JSX.Element => <Root>{children}</Root>;

export default Button;
