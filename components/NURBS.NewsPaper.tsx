import React from "react";
import * as THREE from "three";
// @ts-expect-error WIP
import { ParametricGeometry } from "three/addons/geometries/ParametricGeometry.js";
import { NURBSSurface } from "three/examples/jsm/curves/NURBSSurface";

import { useNSControlPoints } from "@/hooks/index";

interface Props {
  side?: THREE.Side;
  url?: string;
}

export const NURBSNewsPaper: React.FC<Props> = ({
  side = THREE.BackSide,
  url,
}) => {
  const nsControlPoints = useNSControlPoints();

  const nurbsSurface = React.useMemo(() => {
    const degree1 = 2;

    const degree2 = 3;

    const knots1 = [0, 0, 0, 1, 1, 1];

    const knots2 = [0, 0, 0, 0, 1, 1, 1, 1];

    return new NURBSSurface(degree1, degree2, knots1, knots2, nsControlPoints);
  }, [nsControlPoints]);

  const map = React.useMemo(
    () => url && new THREE.TextureLoader().load(url),
    [url],
  );

  const getSurfacePoint = React.useMemo(
    () => (u: number, v: number, target: THREE.Vector3) => {
      const point = nurbsSurface.getPoint(u, v, target);

      const noise = new THREE.Vector3(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
      );

      noise.multiplyScalar(0.05);

      return point;
    },
    [nurbsSurface],
  );

  const geometry = React.useMemo(
    () => new ParametricGeometry(getSurfacePoint, 20, 20),
    [getSurfacePoint],
  );

  const material = React.useMemo(
    () =>
      new THREE.MeshLambertMaterial({
        ...(map && url && { map }),
        color: "#ffffff",
        side,
      }),
    [map, side, url],
  );

  const mesh = React.useMemo(
    () => new THREE.Mesh(geometry, material),
    [geometry, material],
  );

  React.useEffect(() => {
    if (material?.map) {
      material.map.repeat.x = -1;
    }
  }, [material]);

  React.useEffect(() => {
    if (map && url) {
      map.anisotropy = 32;

      map.wrapS = THREE.RepeatWrapping;
      map.wrapT = THREE.RepeatWrapping;
    }
  }, [map, url]);

  React.useEffect(() => {
    const positions = geometry.attributes.position.array;

    for (let i = 0; i < positions.length; i += 3) {
      const noise = new THREE.Vector3(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
      );

      noise.multiplyScalar(0.2);
      const scale = 0.3 + Math.abs(Math.sin(59 * 4 + i));

      positions[i] += noise.x * scale;
      positions[i + 1] += noise.y * scale;
      positions[i + 2] += noise.z * scale;
    }
    geometry.attributes.position.needsUpdate = true;
  }, [geometry.attributes.position]);

  return (
    <group>
      <primitive object={mesh} />
    </group>
  );
};
