import React, { Suspense } from 'react';

// Libs
import { OrbitControls } from '@react-three/drei';

// Local
import Canvas from './Canvas';
import Scene from './Scene';

const Root: React.FC = () => (
  <Canvas>
    <Suspense fallback={null}>
      <OrbitControls enableZoom={false} />
      <Scene />
    </Suspense>
  </Canvas>
);

export default Root;
