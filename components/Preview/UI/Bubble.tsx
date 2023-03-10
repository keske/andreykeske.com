import {
  Environment,
  Icosahedron,
  MeshDistortMaterial,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

const useAnimation = (ref: React.MutableRefObject<THREE.Mesh>) => {
  useFrame(({ mouse }) => {
    const node = ref.current;

    if (node) {
      node.rotation.y = THREE.MathUtils.lerp(
        node.rotation.y,
        mouse.x / Math.PI,
        0.01,
      );

      node.rotation.x = THREE.MathUtils.lerp(
        node.rotation.x,
        mouse.y * Math.PI,
        0.01,
      );
    }
  });
};

const CommonMeshDistortMaterial = () => (
  <MeshDistortMaterial
    bumpScale={0.005}
    clearcoat={0.1}
    clearcoatRoughness={0.9}
    color="rgba(255, 255, 255, 0.0)"
    distort={0.59}
    metalness={0.5}
    radius={1.3}
    roughness={0.8}
  />
);

const Ico = () => {
  const ref = React.useRef<THREE.Mesh>(null!);

  useAnimation(ref);

  return (
    <Icosahedron args={[1, 12]} position={[0, 0, 0]} ref={ref}>
      <CommonMeshDistortMaterial />
    </Icosahedron>
  );
};

export const Bubble: React.FC = () => (
  <div className="h-screen w-screen">
    <Canvas className="h-screen w-screen">
      <Environment preset="sunset" />
      <Ico />
    </Canvas>
  </div>
);
