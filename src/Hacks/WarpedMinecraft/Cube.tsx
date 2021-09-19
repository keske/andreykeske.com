/* eslint max-lines: 0 */

import * as React from 'react';
import * as THREE from 'three';

// Components
import Face from './Cube.Face';

const Cube: React.FC = () => {
  const net = React.useMemo(
    () => ({
      /**
       * Back face
       */
      back: {
        nsControlPoints: [
          [
            // Left edge of front face from bottom to top
            // Same as right edge of right face
            new THREE.Vector4(2, -2, -4, 0.1),
            new THREE.Vector4(2, -1, -4, 0.1),
            new THREE.Vector4(2, 1, -4, 0.1),
            new THREE.Vector4(2, 2, -4, 0.1),
          ],
          [
            // Middle edge of front face from bottom to top
            new THREE.Vector4(0, -2, -4, 0.1),
            new THREE.Vector4(0, -1, -4, 0.1),
            new THREE.Vector4(0, 1, -4, 0.1),
            new THREE.Vector4(0, 2, -4, 0.1),
          ],
          [
            // Right edge of front face from bottom to top
            // Same as left edge of left face
            new THREE.Vector4(-2, -2, -4, 0.1),
            new THREE.Vector4(-2, -1, -4, 0.1),
            new THREE.Vector4(-2, 1, -4, 0.1),
            new THREE.Vector4(-2, 2, -4, 0.1),
          ],
        ],
        url: 'static/minecraft/dirt.jpg',
      },
      /**
       * Front face
       */
      front: {
        nsControlPoints: [
          [
            // Left edge of front face from bottom to top
            new THREE.Vector4(-2, -2, 0, 0.1),
            new THREE.Vector4(-2, -1, 0, 0.1),
            new THREE.Vector4(-2, 1, 0, 0.1),
            new THREE.Vector4(-2, 2, 0, 0.1),
          ],
          [
            // Middle edge of front face from bottom to top
            new THREE.Vector4(0, -2, 0, 0.1),
            new THREE.Vector4(0, -1, 0, 0.1),
            new THREE.Vector4(0, 1, 0, 0.1),
            new THREE.Vector4(0, 2, 0, 0.1),
          ],
          [
            // Right edge of front face from bottom to top
            new THREE.Vector4(2, -2, 0, 0.1),
            new THREE.Vector4(2, -1, 0, 0.1),
            new THREE.Vector4(2, 1, 0, 0.1),
            new THREE.Vector4(2, 2, 0, 0.1),
          ],
        ],
        url: 'static/minecraft/dirt.jpg',
      },
      /**
       * Left face
       */
      left: {
        nsControlPoints: [
          [
            // Left edge of front face from bottom to top
            new THREE.Vector4(-2, -2, -4, 0.1),
            new THREE.Vector4(-2, -1, -4, 0.1),
            new THREE.Vector4(-2, 1, -4, 0.1),
            new THREE.Vector4(-2, 2, -4, 0.1),
          ],
          [
            // Middle edge of front face from bottom to top
            new THREE.Vector4(-2, -2, -2, 0.1),
            new THREE.Vector4(-2, -1, -2, 0.1),
            new THREE.Vector4(-2, 1, -2, 0.1),
            new THREE.Vector4(-2, 2, -2, 0.1),
          ],
          [
            // Right edge of front face from bottom to top
            // Same as the front face's left edge
            new THREE.Vector4(-2, -2, 0, 0.1),
            new THREE.Vector4(-2, -1, 0, 0.1),
            new THREE.Vector4(-2, 1, 0, 0.1),
            new THREE.Vector4(-2, 2, 0, 0.1),
          ],
        ],
        url: 'static/minecraft/dirt.jpg',
      },
      /**
       * Right face
       */
      right: {
        nsControlPoints: [
          [
            // Left edge of front face from bottom to top
            // Same as the front face's right edge
            new THREE.Vector4(2, -2, 0, 0.1),
            new THREE.Vector4(2, -1, 0, 0.1),
            new THREE.Vector4(2, 1, 0, 0.1),
            new THREE.Vector4(2, 2, 0, 0.1),
          ],
          [
            // Middle edge of front face from bottom to top
            new THREE.Vector4(2, -2, -2, 0.1),
            new THREE.Vector4(2, -1, -2, 0.1),
            new THREE.Vector4(2, 1, -2, 0.1),
            new THREE.Vector4(2, 2, -2, 0.1),
          ],
          [
            // Right edge of front face from bottom to top
            new THREE.Vector4(2, -2, -4, 0.1),
            new THREE.Vector4(2, -1, -4, 0.1),
            new THREE.Vector4(2, 1, -4, 0.1),
            new THREE.Vector4(2, 2, -4, 0.1),
          ],
        ],
        url: 'static/minecraft/dirt.jpg',
      },
    }),
    [],
  );

  return (
    <group>
      <Face {...{ ...net.front }} />
      <Face {...{ ...net.right }} />
      <Face {...{ ...net.left }} />
      <Face {...{ ...net.back }} />
    </group>
  );
};

export default Cube;
