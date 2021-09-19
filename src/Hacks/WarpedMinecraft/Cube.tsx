/* eslint max-lines: 0 */

import * as React from 'react';
import * as THREE from 'three';

// Components
import Face from './Cube.Face';

const Cube: React.FC = () => {
  const getLeftEdgeOfFrontFace = React.useCallback(() => [
    // Left edge of front face from bottom to top
    new THREE.Vector4(-2, -2, 0, 0.1),
    new THREE.Vector4(-2, -1, 0, 0.1),
    new THREE.Vector4(-2, 1, 0, 0.1),
    new THREE.Vector4(-2, 2, 0, 0.1),
  ], []);

  const getRightEdgeOfFrontFace = React.useCallback(() => [
    // Right edge of front face from bottom to top
    new THREE.Vector4(2, -2, 0, 0.1),
    new THREE.Vector4(2, -1, 0, 0.1),
    new THREE.Vector4(2, 1, 0, 0.1),
    new THREE.Vector4(2, 2, 0, 0.1),
  ], []);

  const net = React.useMemo(
    () => ({
      /**
       * Back face
       */
      back: {
        nsControlPoints: [
          [
            // Left edge of back face from bottom to top
            // Same as right edge of right face
            new THREE.Vector4(2, -2, -4, 0.1),
            new THREE.Vector4(2, -1, -4, 0.1),
            new THREE.Vector4(2, 1, -4, 0.1),
            new THREE.Vector4(2, 2, -4, 0.1),
          ],
          [
            // Middle edge of back face from bottom to top
            new THREE.Vector4(0, -2, -4, 0.1),
            new THREE.Vector4(0, -1, -4, 0.1),
            new THREE.Vector4(0, 1, -4, 0.1),
            new THREE.Vector4(0, 2, -4, 0.1),
          ],
          [
            // Right edge of back face from bottom to top
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
       * Bottom face
       */
      bottom: {
        nsControlPoints: [
          [
            new THREE.Vector4(-2, -2, -4, 0.1),
            new THREE.Vector4(-2, -2, -2, 0.1),
            new THREE.Vector4(-2, -2, -1, 0.1),
            new THREE.Vector4(-2, -2, 0, 0.1),
          ],
          [
            new THREE.Vector4(0, -2, -4, 0.1),
            new THREE.Vector4(0, -2, -2, 0.1),
            new THREE.Vector4(0, -2, -1, 0.1),
            new THREE.Vector4(0, -2, 0, 0.1),
          ],
          [
            new THREE.Vector4(2, -2, -4, 0.1),
            new THREE.Vector4(2, -2, -2, 0.1),
            new THREE.Vector4(2, -2, -1, 0.1),
            new THREE.Vector4(2, -2, 0, 0.1),
          ],
        ],
        url: 'static/minecraft/dirt.jpg',
      },
      /**
       * Front face
       */
      front: {
        nsControlPoints: [
          getLeftEdgeOfFrontFace(),
          [
            // Middle edge of front face from bottom to top
            new THREE.Vector4(0, -2, 0, 0.1),
            new THREE.Vector4(0, -1, 0, 0.1),
            new THREE.Vector4(0, 1, 0, 0.1),
            new THREE.Vector4(0, 2, 0, 0.1),
          ],
          getRightEdgeOfFrontFace(),
        ],
        url: 'static/minecraft/dirt.jpg',
      },
      /**
       * Left face
       */
      left: {
        nsControlPoints: [
          [
            // Left edge of left face from bottom to top
            new THREE.Vector4(-2, -2, -4, 0.1),
            new THREE.Vector4(-2, -1, -4, 0.1),
            new THREE.Vector4(-2, 1, -4, 0.1),
            new THREE.Vector4(-2, 2, -4, 0.1),
          ],
          [
            // Middle edge of left face from bottom to top
            new THREE.Vector4(-2, -2, -2, 0.1),
            new THREE.Vector4(-2, -1, -2, 0.1),
            new THREE.Vector4(-2, 1, -2, 0.1),
            new THREE.Vector4(-2, 2, -2, 0.1),
          ],
          getLeftEdgeOfFrontFace(),
        ],
        url: 'static/minecraft/dirt.jpg',
      },
      /**
       * Right face
       */
      right: {
        nsControlPoints: [
          getRightEdgeOfFrontFace(),
          [
            // Middle edge of right face from bottom to top
            new THREE.Vector4(2, -2, -2, 0.1),
            new THREE.Vector4(2, -1, -2, 0.1),
            new THREE.Vector4(2, 1, -2, 0.1),
            new THREE.Vector4(2, 2, -2, 0.1),
          ],
          [
            // Right edge of right face from bottom to top
            new THREE.Vector4(2, -2, -4, 0.1),
            new THREE.Vector4(2, -1, -4, 0.1),
            new THREE.Vector4(2, 1, -4, 0.1),
            new THREE.Vector4(2, 2, -4, 0.1),
          ],
        ],
        url: 'static/minecraft/dirt.jpg',
      },
      /**
       * Top face
       */
      top: {
        nsControlPoints: [
          [
            new THREE.Vector4(2, 2, -4, 0.1),
            new THREE.Vector4(2, 2, -2, 0.1),
            new THREE.Vector4(2, 2, -1, 0.1),
            new THREE.Vector4(2, 2, 0, 0.1),
          ],
          [
            new THREE.Vector4(0, 2, -4, 0.1),
            new THREE.Vector4(0, 2, -2, 0.1),
            new THREE.Vector4(0, 2, -1, 0.1),
            new THREE.Vector4(0, 2, 0, 0.1),
          ],
          [
            new THREE.Vector4(-2, 2, -4, 0.1),
            new THREE.Vector4(-2, 2, -2, 0.1),
            new THREE.Vector4(-2, 2, -1, 0.1),
            new THREE.Vector4(-2, 2, 0, 0.1),
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
      <Face {...{ ...net.top }} />
      <Face {...{ ...net.bottom }} />
    </group>
  );
};

export default Cube;
