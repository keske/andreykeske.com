import React from "react";

// Libs
import styled from "styled-components";
import { Canvas as FiberCanvas } from "react-three-fiber";

type Props = {
  children: React.ReactNode;
};

const Root = styled.div`
  cursor: grab;
  height: 100%;
`;

const Canvas: React.FC<Props> = ({ children }: Props) => (
  <Root>
    <FiberCanvas
      camera={{ position: [0, 7, 0] }}
      colorManagement
      gl={{
        powerPreference: "high-performance",
        stencil: false,
      }}
    >
      {children}
    </FiberCanvas>
  </Root>
);

export default Canvas;
