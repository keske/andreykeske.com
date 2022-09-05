import * as React from "react";

// Libs
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const Root = styled.div`
  border: 1px solid #000;
  border-radius: 7px;
  display: inline-block;
  font-size: 10px;
  letter-spacing: 1px;
  margin-top: 5px;
  padding-bottom: 3px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 3px;
`;

const Button: React.FC<Props> = ({ children, ...rest }: Props): JSX.Element => (
  <Root {...rest}>{children}</Root>
);

export default Button;
