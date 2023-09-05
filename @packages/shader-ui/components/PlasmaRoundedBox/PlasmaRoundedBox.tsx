import { RoundedBox } from "@react-three/drei";
import React from "react";
import * as THREE from "three";

import {
  PlasmaMaterialOptions,
  usePlasmaMaterial,
} from "@/packages/shader-ui";

export const PlasmaRoundedBox = React.forwardRef<
  React.ElementRef<typeof RoundedBox>,
  PlasmaMaterialOptions
>(
  ({
    colors = [
      new THREE.Color("#000"),
      new THREE.Color("#191050"),
      new THREE.Color("#501036"),
      new THREE.Color("#062E20"),
      new THREE.Color("black"),
      new THREE.Color("blue"),
    ],
    frequency = { x: 10.0, y: 100.0, z: 10.0 },
    intensivity = 700,
    time = 0.7,
  }) => {
    const material = usePlasmaMaterial({
      colors,
      frequency,
      intensivity,
      time,
    });

    return (
      <RoundedBox
        args={[0.8, 0.2, 0.1]}
        material={material}
        position={[0, 0, 0]}
        radius={0.1}
      />
    );
  },
);
