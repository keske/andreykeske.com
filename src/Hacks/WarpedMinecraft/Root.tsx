import * as React from 'react';

// Libs
import { OrbitControls } from '@react-three/drei';

// Local
import Canvas from './Canvas';
import Scene from './Scene';

const Root: React.FC = () => (
  <Canvas>
    <React.Suspense fallback={null}>
      <OrbitControls />
      <Scene />
    </React.Suspense>
  </Canvas>
);

export default Root;
