import * as React from 'react';

// Libs
import { useResource } from 'react-three-fiber';
import { MeshWobbleMaterial } from '@react-three/drei';

// Local
import Model from './Lego';

const Scene: React.FC = () => {
  const material = useResource();

  return (
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

      <MeshWobbleMaterial
        ref={material}
        bumpScale={0.005}
        color="#d01012"
        factor={7}
        metalness={3}
        roughness={0.3}
        speed={0}
      />

      <Model material={material} />
    </group>
  );
};

export default Scene;
