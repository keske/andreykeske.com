import * as React from "react";
import * as THREE from "three";
import { ParametricGeometry } from "three/addons/geometries/ParametricGeometry.js";

import { NURBSSurface } from "./NURBSSurface";

type Props = {
  nsControlPoints: THREE.Vector4[][];
  url: string;
  videoRef: React.RefObject<any>;
};

const Nurbs = React.forwardRef<THREE.Group, Props>(
  ({ nsControlPoints, url, videoRef }) => {
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
      nurbsSurface.getPoint(u, v, target);

    const geometry = new ParametricGeometry(getSurfacePoint, 20, 20);

    const texture = new THREE.VideoTexture(videoRef.current);

    const material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.FrontSide,
      toneMapped: false,
    });

    const mesh = new THREE.Mesh(geometry, material);

    return <primitive object={mesh} />;
  },
);

export default Nurbs;