/* eslint react/jsx-props-no-spreading: 0 */
/* eslint no-multi-assign: 0 */

import React from 'react';

// Libs
import { Vector2 } from 'three';

import { Reflector, TorusKnot } from '@react-three/drei';

const Scene: React.FC = () => {
  const normalScale = React.useMemo(() => new Vector2(0), []);

  return (
    <>
      <Reflector
        args={[10, 10]}
        blur={[0, 0]}
        debug={0}
        depthScale={0}
        depthToBlurRatioBias={0.2}
        distortion={0}
        // distortionMap={distortionMap}
        maxDepthThreshold={1.2}
        minDepthThreshold={0.8}
        mirror={0.75}
        mixBlur={10}
        mixStrength={2}
        resolution={1024}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      >
        {(Material, props) => (
          <Material
            color="#a0a0a0"
            metalness={0.5}
            // normalMap={normal}
            normalScale={normalScale}
            roughness={1}
            // roughnessMap={roughness}
            {...props}
          />
        )}
      </Reflector>

      <TorusKnot args={[0.5, 0.2, 128, 32]} position={[0, 1, 0]}>
        <meshPhysicalMaterial color="hotpink" />
      </TorusKnot>
    </>
  );
};

export default Scene;
