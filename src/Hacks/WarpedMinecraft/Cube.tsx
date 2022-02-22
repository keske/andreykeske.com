/* eslint max-lines: 0 */

import * as React from "react";
import * as THREE from "three";
import * as R from "ramda";

// Components
import { Nurbs } from "../../components/NURBS";

// Store
import useStore from "./@store";

type Props = JSX.IntrinsicElements["group"] & {
  map: {
    bottom: string;
    side: string;
    top: string;
  };
  transparent?: boolean;
};

const WarpedMinecraftCube: React.FC<Props> = ({
  map,
  transparent = false,
  ...rest
}: Props) => {
  const { warpRatio } = useStore();

  const random = React.useCallback(
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    (min = 0, max: number) => Math.random() * (max - min) + min,
    []
  );

  const getRandomCoords = React.useCallback(
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    (x: number, y: number, z: number) => [
      random(x - warpRatio, x + warpRatio),
      random(y - warpRatio, y + warpRatio),
      random(z - warpRatio, z + warpRatio),
    ],
    [random, warpRatio]
  );

  const x0y0z0 = React.useMemo(
    () => getRandomCoords(-2, -2, 0),
    [getRandomCoords]
  );

  const x0y1z0 = React.useMemo(
    () => getRandomCoords(-2, -1, 0),
    [getRandomCoords]
  );

  const x0y2z0 = React.useMemo(
    () => getRandomCoords(-2, 1, 0),
    [getRandomCoords]
  );

  const x0y3z0 = React.useMemo(
    () => getRandomCoords(-2, 2, 0),
    [getRandomCoords]
  );

  const getLeftEdgeOfFrontFace = React.useMemo(
    () => [
      new THREE.Vector4(...x0y0z0, 0.1),
      new THREE.Vector4(...x0y1z0, 0.1),
      new THREE.Vector4(...x0y2z0, 0.1),
      new THREE.Vector4(...x0y3z0, 0.1),
    ],
    [x0y0z0, x0y1z0, x0y2z0, x0y3z0]
  );

  const x1y0z3 = React.useMemo(
    () => getRandomCoords(0, -2, -4),
    [getRandomCoords]
  );

  const x1y3z2 = React.useMemo(
    () => getRandomCoords(0, 2, -2),
    [getRandomCoords]
  );

  const x1y3z1 = React.useMemo(
    () => getRandomCoords(0, 2, -1),
    [getRandomCoords]
  );

  const x1y1z3 = React.useMemo(
    () => getRandomCoords(0, -1, -4),
    [getRandomCoords]
  );

  const x1y2z3 = React.useMemo(
    () => getRandomCoords(0, 1, -4),
    [getRandomCoords]
  );

  const x1y3z3 = React.useMemo(
    () => getRandomCoords(0, 2, -4),
    [getRandomCoords]
  );

  const getMiddleEdgeOfBackFace = React.useMemo(
    () => [
      new THREE.Vector4(...x1y0z3, 0.1),
      new THREE.Vector4(...x1y1z3, 0.1),
      new THREE.Vector4(...x1y2z3, 0.1),
      new THREE.Vector4(...x1y3z3, 0.1),
    ],
    [x1y0z3, x1y1z3, x1y2z3, x1y3z3]
  );

  const x1y0z0 = React.useMemo(
    () => getRandomCoords(0, -2, 0),
    [getRandomCoords]
  );

  const x1y0z2 = React.useMemo(
    () => getRandomCoords(0, -2, -2),
    [getRandomCoords]
  );

  const x1y0z1 = React.useMemo(
    () => getRandomCoords(0, -2, -1),
    [getRandomCoords]
  );

  const x1y1z0 = React.useMemo(
    () => getRandomCoords(0, -1, 0),
    [getRandomCoords]
  );

  const x1y2z0 = React.useMemo(
    () => getRandomCoords(0, 1, 0),
    [getRandomCoords]
  );

  const x1y3z0 = React.useMemo(
    () => getRandomCoords(0, 2, 0),
    [getRandomCoords]
  );

  const getMiddleEdgeOfFrontFace = React.useMemo(
    () => [
      new THREE.Vector4(...x1y0z0, 0.1),
      new THREE.Vector4(...x1y1z0, 0.1),
      new THREE.Vector4(...x1y2z0, 0.1),
      new THREE.Vector4(...x1y3z0, 0.1),
    ],
    [x1y0z0, x1y1z0, x1y2z0, x1y3z0]
  );

  const x2y0z0 = React.useMemo(
    () => getRandomCoords(2, -2, 0),
    [getRandomCoords]
  );

  const x2y1z0 = React.useMemo(
    () => getRandomCoords(2, -1, 0),
    [getRandomCoords]
  );

  const x2y2z0 = React.useMemo(
    () => getRandomCoords(2, 1, 0),
    [getRandomCoords]
  );

  const x2y3z0 = React.useMemo(
    () => getRandomCoords(2, 2, 0),
    [getRandomCoords]
  );

  const getRightEdgeOfFrontFace = React.useMemo(
    () => [
      new THREE.Vector4(...x2y0z0, 0.1),
      new THREE.Vector4(...x2y1z0, 0.1),
      new THREE.Vector4(...x2y2z0, 0.1),
      new THREE.Vector4(...x2y3z0, 0.1),
    ],
    [x2y0z0, x2y1z0, x2y2z0, x2y3z0]
  );

  const x2y0z2 = React.useMemo(
    () => getRandomCoords(2, -2, -2),
    [getRandomCoords]
  );

  const x2y1z2 = React.useMemo(
    () => getRandomCoords(2, -1, -2),
    [getRandomCoords]
  );

  const x2y2z2 = React.useMemo(
    () => getRandomCoords(2, 1, -2),
    [getRandomCoords]
  );

  const x2y3z2 = React.useMemo(
    () => getRandomCoords(2, 2, -2),
    [getRandomCoords]
  );

  const getMiddleEdgeOfRightFace = React.useMemo(
    () => [
      new THREE.Vector4(...x2y0z2, 0.1),
      new THREE.Vector4(...x2y1z2, 0.1),
      new THREE.Vector4(...x2y2z2, 0.1),
      new THREE.Vector4(...x2y3z2, 0.1),
    ],
    [x2y0z2, x2y1z2, x2y2z2, x2y3z2]
  );

  const x2y0z3 = React.useMemo(
    () => getRandomCoords(2, -2, -4),
    [getRandomCoords]
  );

  const x2y0z1 = React.useMemo(
    () => getRandomCoords(2, -2, -1),
    [getRandomCoords]
  );

  const x2y1z3 = React.useMemo(
    () => getRandomCoords(2, -1, -4),
    [getRandomCoords]
  );

  const x2y2z3 = React.useMemo(
    () => getRandomCoords(2, 1, -4),
    [getRandomCoords]
  );

  const x2y3z3 = React.useMemo(
    () => getRandomCoords(2, 2, -4),
    [getRandomCoords]
  );

  const x2y3z1 = React.useMemo(
    () => getRandomCoords(2, 2, -1),
    [getRandomCoords]
  );

  const getRightEdgeOfRightFace = React.useMemo(
    () => [
      new THREE.Vector4(...x2y0z3, 0.1),
      new THREE.Vector4(...x2y1z3, 0.1),
      new THREE.Vector4(...x2y2z3, 0.1),
      new THREE.Vector4(...x2y3z3, 0.1),
    ],
    [x2y0z3, x2y1z3, x2y2z3, x2y3z3]
  );

  const x0y0z2 = React.useMemo(
    () => getRandomCoords(-2, -2, -2),
    [getRandomCoords]
  );

  const x0y1z2 = React.useMemo(
    () => getRandomCoords(-2, -1, -2),
    [getRandomCoords]
  );

  const x0y2z2 = React.useMemo(
    () => getRandomCoords(-2, 1, -2),
    [getRandomCoords]
  );

  const x0y3z2 = React.useMemo(
    () => getRandomCoords(-2, 2, -2),
    [getRandomCoords]
  );

  const getMiddleEdgeOfLeftFace = React.useMemo(
    () => [
      new THREE.Vector4(...x0y0z2, 0.1),
      new THREE.Vector4(...x0y1z2, 0.1),
      new THREE.Vector4(...x0y2z2, 0.1),
      new THREE.Vector4(...x0y3z2, 0.1),
    ],
    [x0y0z2, x0y1z2, x0y2z2, x0y3z2]
  );

  const x0y0z3 = React.useMemo(
    () => getRandomCoords(-2, -2, -4),
    [getRandomCoords]
  );

  const x0y3z1 = React.useMemo(
    () => getRandomCoords(-2, 2, -1),
    [getRandomCoords]
  );

  const x0y1z3 = React.useMemo(
    () => getRandomCoords(-2, -1, -4),
    [getRandomCoords]
  );

  const x0y2z3 = React.useMemo(
    () => getRandomCoords(-2, 1, -4),
    [getRandomCoords]
  );

  const x0y3z3 = React.useMemo(
    () => getRandomCoords(-2, 2, -4),
    [getRandomCoords]
  );

  const getLeftEdgeOfLeftFace = React.useMemo(
    () => [
      new THREE.Vector4(...x0y0z3, 0.1),
      new THREE.Vector4(...x0y1z3, 0.1),
      new THREE.Vector4(...x0y2z3, 0.1),
      new THREE.Vector4(...x0y3z3, 0.1),
    ],
    [x0y0z3, x0y1z3, x0y2z3, x0y3z3]
  );

  const x0y0z1 = React.useMemo(() => [-2, -2, -1], []);

  const getLeftEdgeOfBottomFace = React.useMemo(
    () => [
      new THREE.Vector4(...x0y0z3, 0.1),
      new THREE.Vector4(...x0y0z2, 0.1),
      new THREE.Vector4(...x0y0z1, 0.1),
      new THREE.Vector4(...x0y0z0, 0.1),
    ],
    [x0y0z0, x0y0z1, x0y0z2, x0y0z3]
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
        url: map.side,
      },
      /**
       * Bottom face
       */
      bottom: {
        nsControlPoints: [
          getLeftEdgeOfBottomFace,
          [
            new THREE.Vector4(...x1y0z3, 0.1),
            new THREE.Vector4(...x1y0z2, 0.1),
            new THREE.Vector4(...x1y0z1, 0.1),
            new THREE.Vector4(...x1y0z0, 0.1),
          ],
          [
            new THREE.Vector4(...x2y0z3, 0.1),
            new THREE.Vector4(...x2y0z2, 0.1),
            new THREE.Vector4(...x2y0z1, 0.1),
            new THREE.Vector4(...x2y0z0, 0.1),
          ],
        ],
        url: map.bottom,
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
        url: map.side,
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
        url: map.side,
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
        url: map.side,
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
            new THREE.Vector4(...x1y3z2, 0.1),
            new THREE.Vector4(...x1y3z1, 0.1),
            new THREE.Vector4(...x1y3z0, 0.1),
          ],
          [
            new THREE.Vector4(...x0y3z3, 0.1),
            new THREE.Vector4(...x0y3z2, 0.1),
            new THREE.Vector4(...x0y3z1, 0.1),
            new THREE.Vector4(...x0y3z0, 0.1),
          ],
        ],
        url: map.top,
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
      map.bottom,
      map.side,
      map.top,
      x0y3z0,
      x0y3z1,
      x0y3z2,
      x0y3z3,
      x1y0z0,
      x1y0z1,
      x1y0z2,
      x1y0z3,
      x1y3z0,
      x1y3z1,
      x1y3z2,
      x1y3z3,
      x2y0z0,
      x2y0z1,
      x2y0z2,
      x2y0z3,
      x2y3z0,
      x2y3z1,
      x2y3z2,
      x2y3z3,
    ]
  );

  return (
    <group {...rest}>
      {R.values(net).map((obj, index) => (
        <Nurbs
          {...obj}
          key={index}
          side={transparent ? THREE.DoubleSide : THREE.FrontSide}
        />
      ))}
    </group>
  );
};

export default WarpedMinecraftCube;
