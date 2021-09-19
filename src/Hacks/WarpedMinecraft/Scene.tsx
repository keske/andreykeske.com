import * as React from 'react';

// Components
import Cube from './Cube';

const Scene: React.FC = () => (
  <group>
    <ambientLight intensity={0.2} />

    <spotLight
      angle={Math.PI / 6}
      castShadow
      intensity={0.1}
      position={[20, 20, 30]}
      shadow-bias={-0.00005}
      shadow-mapSize-height={2048}
      shadow-mapSize-width={2048}
    />

    <Cube />
  </group>
);

export default Scene;
