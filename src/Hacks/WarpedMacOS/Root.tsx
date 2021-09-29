import * as React from 'react';

// Libs
import styled from 'styled-components';
import { OrbitControls } from '@react-three/drei';

// Local
import Canvas from './Canvas';
import Scene from './Scene';

const Root = styled.div``;

const WarpedMacOSRoot: React.FC = () => (
  <Root>
    <Canvas>
      <React.Suspense fallback={null}>
        <OrbitControls />
        <Scene />
      </React.Suspense>
    </Canvas>
  </Root>
  );

export default WarpedMacOSRoot;
