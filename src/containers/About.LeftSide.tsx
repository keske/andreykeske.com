/* eslint max-lines: 0 */

import * as React from 'react';
import * as THREE from 'three';

// Libs
import styled, { css } from 'styled-components';
import { Canvas as FiberCanvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';

// Components
import { Nurbs } from '../components/NURBS';
import { mediaQuery } from '../utils';

const Root = styled.div`
  cursor: grab;
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: 70vw;
  z-index: 1;

  ${mediaQuery(
    'phone',
    css`
      display: none;
    `,
  )}
`;

const StyledCanvas = styled(FiberCanvas)`
  cursor: grab;
  height: 100%;
  width: 100%;
`;

const AboutLeftSide: React.FC = (): JSX.Element => {
  const warpRatio = 0.5;

  const random = React.useCallback(
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    (min = 0, max: number) => Math.random() * (max - min) + min,
    [],
  );

  const getRandomCoords = React.useCallback(
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    (x: number, y: number, z: number) => [
      random(x - warpRatio, x + warpRatio),
      random(y - warpRatio, y + warpRatio),
      random(z - warpRatio, z + warpRatio),
    ],
    [random, warpRatio],
  );

  const x0y0z0 = React.useMemo(
    () => getRandomCoords(-2, -2, 0),
    [getRandomCoords],
  );

  const x0y1z0 = React.useMemo(
    () => getRandomCoords(-2, -1, 0),
    [getRandomCoords],
  );

  const x0y2z0 = React.useMemo(
    () => getRandomCoords(-2, 1, 0),
    [getRandomCoords],
  );

  const x0y3z0 = React.useMemo(
    () => getRandomCoords(-2, 2, 0),
    [getRandomCoords],
  );

  const x1y0z0 = React.useMemo(
    () => getRandomCoords(0, -2, 0),
    [getRandomCoords],
  );

  const x1y1z0 = React.useMemo(
    () => getRandomCoords(0, -1, 0),
    [getRandomCoords],
  );

  const x1y2z0 = React.useMemo(
    () => getRandomCoords(0, 1, 0),
    [getRandomCoords],
  );

  const x1y3z0 = React.useMemo(
    () => getRandomCoords(0, 2, 0),
    [getRandomCoords],
  );

  const x2y0z0 = React.useMemo(
    () => getRandomCoords(2, -2, 0),
    [getRandomCoords],
  );

  const x2y1z0 = React.useMemo(
    () => getRandomCoords(2, -1, 0),
    [getRandomCoords],
  );

  const x2y2z0 = React.useMemo(
    () => getRandomCoords(2, 1, 0),
    [getRandomCoords],
  );

  const x2y3z0 = React.useMemo(
    () => getRandomCoords(2, 2, 0),
    [getRandomCoords],
  );

  const nurbs = React.useMemo(
    () => ({
      nsControlPoints: [
        [
          new THREE.Vector4(...x0y0z0, 0.1),
          new THREE.Vector4(...x0y1z0, 0.1),
          new THREE.Vector4(...x0y2z0, 0.1),
          new THREE.Vector4(...x0y3z0, 0.1),
        ],
        [
          new THREE.Vector4(...x1y0z0, 0.1),
          new THREE.Vector4(...x1y1z0, 0.1),
          new THREE.Vector4(...x1y2z0, 0.1),
          new THREE.Vector4(...x1y3z0, 0.1),
        ],
        [
          new THREE.Vector4(...x2y0z0, 0.1),
          new THREE.Vector4(...x2y1z0, 0.1),
          new THREE.Vector4(...x2y2z0, 0.1),
          new THREE.Vector4(...x2y3z0, 0.1),
        ],
      ],
      url: 'static/about/me.jpg',
    }),
    [
      x0y0z0,
      x0y1z0,
      x0y2z0,
      x0y3z0,
      x1y0z0,
      x1y1z0,
      x1y2z0,
      x1y3z0,
      x2y0z0,
      x2y1z0,
      x2y2z0,
      x2y3z0,
    ],
  );

  return (
    <Root>
      <StyledCanvas
        camera={{ position: [0, 3, 2] }}
        colorManagement
        gl={{
          alpha: true,
          antialias: true,
          depth: false,
          powerPreference: 'high-performance',
          stencil: false,
        }}
      >
        <React.Suspense fallback={null}>
          <OrbitControls enableZoom={false} />

          <group>
            <ambientLight intensity={0.3} />

            <spotLight
              angle={Math.PI / 6}
              castShadow
              intensity={0.2}
              position={[20, 20, 30]}
              shadow-bias={-0.00005}
              shadow-mapSize-height={2048}
              shadow-mapSize-width={2048}
            />

            <Nurbs {...nurbs} />
          </group>
        </React.Suspense>
      </StyledCanvas>
    </Root>
  );
};

export default AboutLeftSide;
