/* eslint max-lines: 0 */

import * as React from 'react';
import * as THREE from 'three';

// Components
import Face from './Cube.Face';

const Cube: React.FC = () => {
  const random = React.useCallback(
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    (min = 0, max: number) => Math.random() * (max - min) + min,
    [],
  );

  // const yCoords = React.useMemo(() => [-2, -1, 1, 2], []);

  // const getEdge = React.useCallback(
  //   (x: number, z: number) => [
  //     new THREE.Vector4(x * delta, yCoords[0], z * delta, 0.1),
  //     new THREE.Vector4(x * delta, yCoords[1], z * delta, 0.1),
  //     new THREE.Vector4(x * delta, yCoords[2], z * delta, 0.1),
  //     new THREE.Vector4(x * delta, yCoords[3], z * delta, 0.1),
  //   ],
  //   [delta, yCoords],
  // );

  const x0y0z0 = React.useMemo(() => [-2, -2, 0], []);

  const x0y1z0 = React.useMemo(() => [-2, -1, 0], []);

  const x0y2z0 = React.useMemo(() => [-2, 1, 0], []);

  const x0y3z0 = React.useMemo(() => [-2, 2, 0], []);

  const getLeftEdgeOfFrontFace = React.useMemo(
    () => [
      new THREE.Vector4(...x0y0z0, 0.1),
      new THREE.Vector4(...x0y1z0, 0.1),
      new THREE.Vector4(...x0y2z0, 0.1),
      new THREE.Vector4(...x0y3z0, 0.1),
    ],
    [x0y0z0, x0y1z0, x0y2z0, x0y3z0],
  );

  const x1y0z3 = React.useMemo(() => [0, -2, -4], []);

  const x1y1z3 = React.useMemo(() => [0, -1, -4], []);

  const x1y2z3 = React.useMemo(() => [0, 1, -4], []);

  const x1y3z3 = React.useMemo(() => [0, 2, -4], []);

  const getMiddleEdgeOfBackFace = React.useMemo(
    () => [
      new THREE.Vector4(...x1y0z3, 0.1),
      new THREE.Vector4(...x1y1z3, 0.1),
      new THREE.Vector4(...x1y2z3, 0.1),
      new THREE.Vector4(...x1y3z3, 0.1),
    ],
    [x1y0z3, x1y1z3, x1y2z3, x1y3z3],
  );

  const x1y0z0 = React.useMemo(() => [0, -2, 0], []);

  const x1y1z0 = React.useMemo(() => [0, -1, 0], []);

  const x1y2z0 = React.useMemo(() => [0, 1, 0], []);

  const x1y3z0 = React.useMemo(() => [0, 2, 0], []);

  const getMiddleEdgeOfFrontFace = React.useMemo(
    () => [
      new THREE.Vector4(...x1y0z0, 0.1),
      new THREE.Vector4(...x1y1z0, 0.1),
      new THREE.Vector4(...x1y2z0, 0.1),
      new THREE.Vector4(...x1y3z0, 0.1),
    ],
    [x1y0z0, x1y1z0, x1y2z0, x1y3z0],
  );

  const x2y0z0 = React.useMemo(() => [2, -2, 0], []);

  const x2y1z0 = React.useMemo(() => [2, -1, 0], []);

  const x2y2z0 = React.useMemo(() => [2, 1, 0], []);

  const x2y3z0 = React.useMemo(() => [2, 2, 0], []);

  const getRightEdgeOfFrontFace = React.useMemo(
    () => [
      new THREE.Vector4(...x2y0z0, 0.1),
      new THREE.Vector4(...x2y1z0, 0.1),
      new THREE.Vector4(...x2y2z0, 0.1),
      new THREE.Vector4(...x2y3z0, 0.1),
    ],
    [x2y0z0, x2y1z0, x2y2z0, x2y3z0],
  );

  const x2y0z2 = React.useMemo(() => [2, -2, -2], []);

  const x2y1z2 = React.useMemo(() => [2, -1, -2], []);

  const x2y2z2 = React.useMemo(() => [2, 1, -2], []);

  const x2y3z2 = React.useMemo(() => [2, 2, -2], []);

  const getMiddleEdgeOfRightFace = React.useMemo(
    () => [
      new THREE.Vector4(...x2y0z2, 0.1),
      new THREE.Vector4(...x2y1z2, 0.1),
      new THREE.Vector4(...x2y2z2, 0.1),
      new THREE.Vector4(...x2y3z2, 0.1),
    ],
    [x2y0z2, x2y1z2, x2y2z2, x2y3z2],
  );

  const x2y0z3 = React.useMemo(() => [2, -2, -4], []);

  const x2y1z3 = React.useMemo(() => [2, -1, -4], []);

  const x2y2z3 = React.useMemo(() => [2, 1, -4], []);

  const x2y3z3 = React.useMemo(() => [2, 2, -4], []);

  const x2y3z1 = React.useMemo(() => [2, 2, -1], []);

  const getRightEdgeOfRightFace = React.useMemo(
    () => [
      new THREE.Vector4(...x2y0z3, 0.1),
      new THREE.Vector4(...x2y1z3, 0.1),
      new THREE.Vector4(...x2y2z3, 0.1),
      new THREE.Vector4(...x2y3z3, 0.1),
    ],
    [x2y0z3, x2y1z3, x2y2z3, x2y3z3],
  );

  const x0y0z2 = React.useMemo(() => [-2, -2, -2], []);

  const x0y1z2 = React.useMemo(() => [-2, -1, -2], []);

  const x0y2z2 = React.useMemo(() => [-2, 1, -2], []);

  const x0y3z2 = React.useMemo(() => [-2, 2, -2], []);

  const getMiddleEdgeOfLeftFace = React.useMemo(
    () => [
      new THREE.Vector4(...x0y0z2, 0.1),
      new THREE.Vector4(...x0y1z2, 0.1),
      new THREE.Vector4(...x0y2z2, 0.1),
      new THREE.Vector4(...x0y3z2, 0.1),
    ],
    [x0y0z2, x0y1z2, x0y2z2, x0y3z2],
  );

  const x0y0z3 = React.useMemo(() => [-2, -2, -4], []);

  const x0y1z3 = React.useMemo(() => [-2, -1, -4], []);

  const x0y2z3 = React.useMemo(() => [-2, 1, -4], []);

  const x0y3z3 = React.useMemo(() => [-2, 2, -4], []);

  const getLeftEdgeOfLeftFace = React.useMemo(
    () => [
      new THREE.Vector4(...x0y0z3, 0.1),
      new THREE.Vector4(...x0y1z3, 0.1),
      new THREE.Vector4(...x0y2z3, 0.1),
      new THREE.Vector4(...x0y3z3, 0.1),
    ],
    [x0y0z3, x0y1z3, x0y2z3, x0y3z3],
  );

  const x0y0z1 = React.useMemo(() => [-2, -2, -1], []);

  const getLeftEdgeOfBottomFace = React.useMemo(
    () => [
      new THREE.Vector4(...x0y0z3, 0.1),
      new THREE.Vector4(...x0y0z2, 0.1),
      new THREE.Vector4(...x0y0z1, 0.1),
      new THREE.Vector4(...x0y0z0, 0.1),
    ],
    [x0y0z0, x0y0z1, x0y0z2, x0y0z3],
  );

  const net = React.useMemo(
    () => ({
      /**
       * Back face
       */
      back: {
        nsControlPoints: [
          getRightEdgeOfRightFace,
          getMiddleEdgeOfBackFace,
          getLeftEdgeOfLeftFace,
        ],
        url: 'static/minecraft/dirt.jpg',
      },
      /**
       * Bottom face
       */
      bottom: {
        nsControlPoints: [
          getLeftEdgeOfBottomFace,
          [
            new THREE.Vector4(...x1y0z3, 0.1),
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
          getLeftEdgeOfFrontFace,
          getMiddleEdgeOfFrontFace,
          getRightEdgeOfFrontFace,
        ],
        url: 'static/minecraft/dirt.jpg',
      },
      /**
       * Left face
       */
      left: {
        nsControlPoints: [
          getLeftEdgeOfLeftFace,
          getMiddleEdgeOfLeftFace,
          getLeftEdgeOfFrontFace,
        ],
        url: 'static/minecraft/dirt.jpg',
      },
      /**
       * Right face
       */
      right: {
        nsControlPoints: [
          getRightEdgeOfFrontFace,
          getMiddleEdgeOfRightFace,
          getRightEdgeOfRightFace,
        ],
        url: 'static/minecraft/dirt.jpg',
      },
      /**
       * Top face
       */
      top: {
        nsControlPoints: [
          [
            new THREE.Vector4(...x2y3z3, 0.1),
            new THREE.Vector4(...x2y3z2, 0.1),
            new THREE.Vector4(...x2y3z1, 0.1),
            new THREE.Vector4(...x2y3z0, 0.1),
          ],
          [
            new THREE.Vector4(...x1y3z3, 0.1),
            new THREE.Vector4(0, 2, -2, 0.1),
            new THREE.Vector4(0, 2, -1, 0.1),
            new THREE.Vector4(...x1y3z0, 0.1),
          ],
          [
            new THREE.Vector4(...x0y3z3, 0.1),
            new THREE.Vector4(...x0y3z2, 0.1),
            new THREE.Vector4(-2, 2, -1, 0.1),
            new THREE.Vector4(...x0y3z0, 0.1),
          ],
        ],
        url: 'static/minecraft/dirt.jpg',
      },
    }),
    [
      getLeftEdgeOfBottomFace,
      getLeftEdgeOfFrontFace,
      getLeftEdgeOfLeftFace,
      getMiddleEdgeOfBackFace,
      getMiddleEdgeOfFrontFace,
      getMiddleEdgeOfLeftFace,
      getMiddleEdgeOfRightFace,
      getRightEdgeOfFrontFace,
      getRightEdgeOfRightFace,
      x2y3z0,
      x2y3z1,
      x2y3z2,
      x2y3z3,
    ],
  );

  console.log(net);

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
