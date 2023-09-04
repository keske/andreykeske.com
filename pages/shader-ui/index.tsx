import { OrbitControls, RoundedBox, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

import type { NextPage } from "next";

import {
  usePlasmaMaterial,
  useStarfieldMaterial,
} from "@/packages/shader-ui";

const Scene: React.FC = () => {
  const starfieldMaterial = useStarfieldMaterial({
    density: 1000,
    threshold: 0.9,
  });

  const plasmaMaterial = usePlasmaMaterial({
    frequency: { x: 10.0, y: 100.0, z: 10.0 },
  });

  return (
    <group>
      <group position={[0, -1, 0]}>
        {/* <RoundedBox
          args={[3, 2, 1]}
          material={plasmaMaterial}
          position={[0, 0, -1]}
        /> */}
        {/* <Text material={starfieldMaterial}>HELLO</Text> */}
      </group>
      <group position={[0, 1, 0]}>
        <RoundedBox
          args={[0.8, 0.2, 0.1]}
          material={plasmaMaterial}
          radius={0.1}
        />
        {/* <Text material={starfieldMaterial}>HELLO</Text> */}
      </group>
    </group>
  );
};

const AtomicUI: NextPage = () => (
  <div className="w-scree h-screen">
    <Canvas
      camera={{
        position: [3, 2, 7],
      }}
      className="h-screen w-screen"
    >
      <OrbitControls />
      <Scene />
    </Canvas>
  </div>
);

export default AtomicUI;
