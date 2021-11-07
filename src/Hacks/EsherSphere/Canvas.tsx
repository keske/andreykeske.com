import React from 'react';

// Libs
import * as THREE from 'three';
import styled from 'styled-components';
import { Canvas as FiberCanvas } from 'react-three-fiber';

type Props = {
  children: React.ReactNode;
};

const Root = styled(FiberCanvas)`
  height: 100vh;
  width: 100%;
`;

const Canvas: React.FC<Props> = ({ children }: Props) => (
  <Root
    camera={{ fov: 75, position: new THREE.Vector3(-5, 5, 5) }}
    colorManagement
    pixelRatio={window.devicePixelRatio}
    shadowMap
  >
    {children}
  </Root>
);

export default Canvas;
