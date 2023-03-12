/* eslint-disable */
// @ts-nocheck

import * as React from "react";
import * as THREE from "three";
import { NURBSUtils } from "./NURBSUtils";

import { ParametricGeometry } from "three/addons/geometries/ParametricGeometry.js";

class NURBSSurface {
  constructor(
    degree1,
    degree2,
    knots1,
    knots2 /* arrays of reals */,
    controlPoints /* array^2 of Vector(2|3|4) */,
  ) {
    this.degree1 = degree1;
    this.degree2 = degree2;
    this.knots1 = knots1;
    this.knots2 = knots2;
    this.controlPoints = [];

    const len1 = knots1.length - degree1 - 1;

    const len2 = knots2.length - degree2 - 1;

    // ensure Vector4 for control points
    for (let i = 0; i < len1; ++i) {
      this.controlPoints[i] = [];

      for (let j = 0; j < len2; ++j) {
        const point = controlPoints[i][j];

        this.controlPoints[i][j] = new THREE.Vector4(
          point.x,
          point.y,
          point.z,
          point.w,
        );
      }
    }
  }

  getPoint(t1, t2, target) {
    const u =
      this.knots1[0] +
      t1 * (this.knots1[this.knots1.length - 1] - this.knots1[0]); // linear mapping t1->u

    const v =
      this.knots2[0] +
      t2 * (this.knots2[this.knots2.length - 1] - this.knots2[0]); // linear mapping t2->u

    NURBSUtils.calcSurfacePoint(
      this.degree1,
      this.degree2,
      this.knots1,
      this.knots2,
      this.controlPoints,
      u,
      v,
      target,
    );
  }
}

type Props = {
  nsControlPoints: THREE.Vector4[][];
  url: string;
  videoRef: React.RefObject<any>;
};

const Nurbs: React.FC<Props> = ({ nsControlPoints, url, videoRef }) => {
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

  const getSurfacePoint = (u: any, v: any, target: any) =>
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
};

export default Nurbs;
