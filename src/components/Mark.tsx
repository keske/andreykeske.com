import * as React from "react";

// Libs
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  color?: string;
};

const Root = styled.span<{ color: string }>`
  border: 1px solid ${({ color }) => color};
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
  margin: 0 3px;
  padding: 5px 10px;
`;

const Mark: React.FC<Props> = ({
  children,
  color = "#000",
  ...rest
}: Props): JSX.Element => <Root {...{ ...rest, color }}>{children}</Root>;

export default Mark;
