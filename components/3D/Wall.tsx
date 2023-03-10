import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

const Model: React.FC = () => {
  const { nodes } = useGLTF("/gltfs/wall.gltf") as GLTFResult;

  const texture = useTexture("/photos/graffiti/wall.png");

  texture.repeat.set(2.5, 3);

  const mesh = React.useRef<THREE.Mesh>(null!);

  return (
    <mesh
      geometry={nodes.box_low.geometry}
      position={[0, -10, 0]}
      ref={mesh}
      rotation={[-11, 0, -22.3]}
    >
      <meshStandardMaterial
        attach="material"
        color="white"
        map={texture}
        metalness={10}
        roughness={0.2}
      />
    </mesh>
  );
};

export const Wall: React.FC = () => (
  <Canvas camera={{ position: [0, 0, -30] }} className="h-full w-full">
    <OrbitControls enableZoom={false} />
    <ambientLight intensity={0.2} />
    <spotLight intensity={1.5} position={[20, 20, 30]} />
    <Model />
  </Canvas>
);
