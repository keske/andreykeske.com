import React from "react";
import * as THREE from "three";

// Libs
import styled from "styled-components";
import { Canvas as FiberCanvas } from "react-three-fiber";

type Props = {
  cameraPosition: THREE.Vector3;
  children: React.ReactNode;
};

const Root = styled.div`
  cursor: grab;
  height: 100vh;
`;

const Canvas: React.FC<Props> = ({ cameraPosition, children }: Props) => (
  <Root>
    <FiberCanvas
      camera={{ position: cameraPosition }}
      colorManagement
      gl={{
        alpha: true,
        antialias: true,
        depth: false,
        powerPreference: "high-performance",
        stencil: false,
      }}
    >
      {children}
    </FiberCanvas>
  </Root>
);

export default Canvas;
