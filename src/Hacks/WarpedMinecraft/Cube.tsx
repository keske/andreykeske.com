import * as React from 'react';
import * as THREE from 'three';

// Components
import Front from './Cube.Front';

const Cube: React.FC = () => {
  const frontNSControlPoints = React.useMemo(
    () => [
      [
        // Left bottom
        new THREE.Vector4(-2, -2, 1, 0.1),
        // Left half bottom
        new THREE.Vector4(-2, -1, -2, 0.1),
        // Left half top
        new THREE.Vector4(-2, 1, 2, 0.1),
        // Left top
        new THREE.Vector4(-2, 2, -1, 0.1),
      ],
      [
        new THREE.Vector4(0, -2, 0, 0.1),
        new THREE.Vector4(0, -1, -1, 0.1),
        new THREE.Vector4(0, 1, 1.5, 0.1),
        new THREE.Vector4(0, 2, 0, 0.1),
      ],
      [
        // Right bottom
        new THREE.Vector4(2, -2, -1, 0.1),
        // Right bottom half
        new THREE.Vector4(2, -1, 2, 0.1),
        // Right half top
        new THREE.Vector4(2, 1, -2.5, 0.1),
        // Right top
        new THREE.Vector4(2, 2, 1, 0.1),
      ],
    ],
    [],
  );

  const frontUrlControlPoints = React.useMemo(
    () => 'static/minecraft/Screen Shot 2021-08-07 at 11.32.58 PM.png',
    [],
  );

  return (
    <group>
      <Front
        nsControlPoints={frontNSControlPoints}
        url={frontUrlControlPoints}
      />
    </group>
  );
};

export default Cube;
