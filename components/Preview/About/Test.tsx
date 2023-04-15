import { Decal, OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

const Model: React.FC = () => {
  const { nodes } = useGLTF("/gltfs/wall.gltf") as GLTFResult;

  const [texture] = useTexture([`/photos/graffiti/${1}.jpg`]);

  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.repeat = new THREE.Vector2(1, 2);

  return (
    <>
      <mesh
        geometry={nodes.box_low.geometry}
        position={[0, -10, 0]}
        rotation={[1.7, 0, 0]}
      >
        <meshPhongMaterial color={0xffffff} side={THREE.FrontSide} />
        <Decal position={[0, 0, -22]} rotation={[-2.0, 0, 0]} scale={40}>
          <meshPhysicalMaterial
            alphaTest={0}
            depthTest={false}
            map={texture}
            polygonOffset={true}
            polygonOffsetFactor={-10}
            roughness={0.2}
            side={THREE.FrontSide}
            transparent
          />
        </Decal>
      </mesh>
    </>
  );
};

export const Test = () => (
  <div className="h-screen w-screen">
    <Canvas camera={{ position: [0, 0, 50] }}>
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 30]} />
      <OrbitControls />
      <Model />
    </Canvas>
  </div>
);
