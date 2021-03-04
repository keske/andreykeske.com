/* eslint react/jsx-props-no-spreading: 0 */
/* eslint no-multi-assign: 0 */
/* eslint @typescript-eslint/ban-ts-comment: 0 */

import React from 'react';

// Libs
import Webcam from 'react-webcam';
import { extend } from 'react-three-fiber';
import { Box, CubeCamera } from '@react-three/drei';

extend({ Webcam });

const Sphere = ({ ...props }: any) => {
  const ref = React.useRef<THREE.Group>();

  // useFrame(({ clock }) => {
  //   ref.current!.position.y =
  //     Math.sin(offset + clock.elapsedTime) * 5;
  // });

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

      {/* @ts-ignore} */}
      <webcam
        // @ts-ignore
        audio={false}
        // @ts-ignore
        height="113"
        // @ts-ignore
        id="webcam"
        // @ts-ignore
        mirrored
        // @ts-ignore
        screenshotFormat="image/jpeg"
        // @ts-ignore
        width="200"
      />

      <gridHelper args={[100, 10]} />
    </group>
  );
};

export default Scene;
