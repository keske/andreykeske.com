import * as React from "react";
import styled from "styled-components";

export type Props = {
  /**
   * Optional, size of spacer which is 4 * size
   */
  size?: number;
};

export type RootProps = {
  size: number;
};

const Root = styled.div<RootProps>`
  display: block;
  height: ${({ size }) => `${size * 4}px`};
`;

const Spacer: React.FC<Props> = ({ size = 1 }: Props) => (
  <Root {...{ size }} />
);

export default Spacer;
