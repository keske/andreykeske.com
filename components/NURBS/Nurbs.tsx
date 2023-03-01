import * as React from "react";
import * as THREE from "three";
import { ParametricGeometry } from "three/addons/geometries/ParametricGeometry.js";

import { NURBSSurface } from "./NURBSSurface";

type Props = {
  nsControlPoints: THREE.Vector4[][];
  side?:
    | typeof THREE.BackSide
    | typeof THREE.DoubleSide
    | typeof THREE.FrontSide;
  url: string;
};

const Nurbs = React.forwardRef<THREE.Group, Props>(
  ({ nsControlPoints, side = THREE.FrontSide, url }) => {
    const degree1 = 2;

    const degree2 = 3;

    const knots1 = [0, 0, 0, 1, 1, 1];

    const knots2 = [0, 0, 0, 0, 1, 1, 1, 1];

    const nurbsSurface = new NURBSSurface(
      degree1,
      degree2,
      knots1,
      knots2,
      nsControlPoints,
    );

    const map = new THREE.TextureLoader().load(url);

    map.wrapS = THREE.RepeatWrapping;
    map.wrapT = THREE.RepeatWrapping;
    map.anisotropy = 32;

    const getSurfacePoint = (u, v, target) =>
      // eslint-disable-next-line
      nurbsSurface.getPoint(u, v, target);

    const geometry = new ParametricGeometry(getSurfacePoint, 20, 20);

    const material = new THREE.MeshLambertMaterial({
      map,
      side,
      transparent: true,
    });

    const mesh = new THREE.Mesh(geometry, material);

    return (
      <group>
        <primitive object={mesh} />
      </group>
    );
  },
);

export default Nurbs;
