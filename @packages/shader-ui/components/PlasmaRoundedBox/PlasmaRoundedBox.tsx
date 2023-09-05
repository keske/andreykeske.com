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
      // new THREE.Color("yellow"),
      new THREE.Color("green"),
      new THREE.Color("#062E20"),
      new THREE.Color("red"),
      new THREE.Color("black"),
      new THREE.Color("blue"),
    ],
    frequency = { x: 10.0, y: 10.0, z: 10.0 },
    intensivity = 200,
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
        args={[3.8, 3.2, 3.1]}
        material={material}
        position={[0, 0, 0]}
        radius={3.1}
      />
    );
  },
);
