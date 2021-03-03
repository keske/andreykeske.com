import React, { Suspense } from 'react';

// Libs
import { Environment, OrbitControls } from '@react-three/drei';

// Local
import Canvas from './Canvas';
import Scene from './Scene';

const Root: React.FC = () => (
  <Canvas>
    <Suspense fallback={null}>
      <Environment preset="lobby" />
      <OrbitControls />
      <Scene />
    </Suspense>
  </Canvas>
);

export default Root;
