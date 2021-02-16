import React, { Suspense } from 'react';

// Libs
import { Environment } from '@react-three/drei';
import { Perf } from 'r3f-perf';

// Local
import Canvas from './Canvas';
import Scene from './Scene';

const Root: React.FC = () => (
  <Canvas>
    <Suspense fallback={null}>
      <Environment preset="lobby" />
      <Scene />

      {process.env.NODE_ENV !== 'production' && (
        <Perf showGraph={false} />
      )}
    </Suspense>
  </Canvas>
);

export default Root;
