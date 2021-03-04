/* eslint react/jsx-props-no-spreading: 0 */

import React from 'react';

// Libs
import { Box, CubeCamera } from '@react-three/drei';

const Sphere = ({ ...props }: any) => {
  const ref = React.useRef<THREE.Group>();

  return (
    <CubeCamera {...props}>
      {(texture) => (
        <mesh ref={ref}>
          <sphereBufferGeometry args={[5, 64, 64]} />
          <meshStandardMaterial
            envMap={texture}
            metalness={1}
            roughness={0}
          />
        </mesh>
      )}
    </CubeCamera>
  );
};

const Scene: React.FC = () => {
  return (
    <group>
      <fog args={['#f0f0f0', 100, 200]} attach="fog" />

      <Sphere position={[-10, 10, 0]} />

      <Box
        args={[5, 5, 5]}
        material-color="hotpink"
        position-y={1.5}
      />

      <gridHelper args={[100, 10]} />
    </group>
  );
};

export default Scene;
