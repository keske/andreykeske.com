import { MeshWobbleMaterial, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Mesh } from "three";

import { THREEOnMouseRotation } from "@/components/index";

type BrickProps = {
  color: string;
};

const Brick: React.FC<BrickProps> = ({ color }) => {
  const mesh = React.useRef<Mesh>(null!);

  const { nodes } = useGLTF("/gltfs/lego.gltf") as GLTFResult;

  return (
    <THREEOnMouseRotation ref={mesh}>
      <mesh geometry={nodes.Cube128.geometry} position={[0, 0, 3]} ref={mesh}>
        <meshStandardMaterial metalness={3} roughness={3} />
        <MeshWobbleMaterial
          bumpScale={0.005}
          color={color}
          factor={14}
          metalness={3}
          roughness={0.3}
          speed={0.1}
        />
      </mesh>
    </THREEOnMouseRotation>
  );
};

const Lego = () => (
  <div className="absolute top-0 left-0 h-screen w-screen">
    <Canvas
      gl={{
        alpha: true,
        antialias: true,
        depth: false,
        powerPreference: "high-performance",
        stencil: false,
      }}
    >
      <group>
        <ambientLight intensity={0.2} />
        <spotLight
          angle={Math.PI / 6}
          castShadow
          intensity={0.1}
          position={[20, 20, 30]}
          shadow-bias={-0.00005}
          shadow-mapSize-height={2048}
          shadow-mapSize-width={2048}
        />
        <mesh position={[-0.5, -0.1, 0]} rotation={[0, 0, 0.1]}>
          <Brick color="#d01012" />
        </mesh>
        <mesh position={[0.5, 0.1, 0]} rotation={[0, 0, -0.3]}>
          <Brick color="#0017FF" />
        </mesh>
      </group>
    </Canvas>
  </div>
);

export default Lego;