import * as React from "react";
import * as THREE from "three";

import type { Cube as CubeProps } from "./@types";

type Props = Pick<CubeProps, "color" | "radius" | "showLines">;

const CubeOuter: React.FC<Props> = ({ color, radius, showLines }: Props) => {
  const object = React.useMemo(() => {
    const cubeGeometry = new THREE.BoxGeometry(radius, radius, radius);

    const cubeMaterial = new THREE.MeshLambertMaterial({
      blending: THREE.AdditiveBlending,
      color: 0x101010,
      transparent: true,
    });

    const mesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

    return showLines ? new THREE.BoxHelper(mesh, color) : mesh;
  }, [color, radius, showLines]);

  return <primitive object={object} />;
};

export default CubeOuter;
