import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Mesh } from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

import { THREEOnMouseRotation } from "@/components/index";

type GLTFResult = GLTF & {
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
  nodes: Record<string, THREE.Mesh>;
};

const Wall = () => {
  const { nodes } = useGLTF("/gltfs/wall.gltf") as GLTFResult;

  const mesh = React.useRef<Mesh>(null!);

  /**
   * How to use texture:
   *
   * import { useTexture } from "@react-three/drei";
   *
   * ...
   * const map = useTexture("/photos/graffiti/2.jpg");
   * ...
   * <meshLambertMaterial color="white" map={map} />
   * ...
   */

  return (
    <THREEOnMouseRotation ref={mesh}>
      <mesh
        geometry={nodes.box_low.geometry}
        position={[0, 0, -40]}
        ref={mesh}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshPhysicalMaterial color="white" roughness={0.2} />
      </mesh>
    </THREEOnMouseRotation>
  );
};

const Lego = () => (
  <div className="absolute top-0 left-0 h-screen w-screen">
    <div className="fixed bottom-5 right-5 z-10 h-1/3 w-1/3">
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
            angle={1}
            castShadow
            intensity={0.2}
            position={[20, 20, 30]}
          />
          <Wall />
        </group>
      </Canvas>
    </div>
    <div className="flex flex-col items-center gap-10 p-20">
      <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/3">
        <img
          alt="Keske, Kaze, 2007"
          className="w-full"
          src="/photos/graffiti/1.jpg"
        />
        <p>Keske, Kaze, 2007</p>
      </div>
      <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/3">
        <img
          alt="Keske, Kaze, 2007"
          className="w-full"
          src="/photos/graffiti/2.jpg"
        />
        <p>Keske, Kaze, 2007</p>
      </div>
      <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/3">
        <img
          alt="Keske, Kaze, 2007"
          className="w-full"
          src="/photos/graffiti/3.jpg"
        />
        <p>Keske, Kaze, 2007</p>
      </div>
      <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/3">
        <img
          alt="Keske, Kaze, 2007"
          className="w-full"
          src="/photos/graffiti/4.jpg"
        />
        <p>Keske, Kaze, 2007</p>
      </div>
      <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/3">
        <img
          alt="Keske, Kaze, 2007"
          className="w-full"
          src="/photos/graffiti/5.jpg"
        />
        <p>Keske, Kaze, 2007</p>
      </div>
      <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/3">
        <img
          alt="Keske, Zebo (Bird), 2010"
          className="w-full"
          src="/photos/graffiti/6.jpg"
        />
        <p>Keske, Zebo (Bird), 2010</p>
      </div>
      <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/3">
        <img
          alt="Keske, 2007"
          className="w-full"
          src="/photos/graffiti/7.jpg"
        />
        <p>Keske, 2007</p>
      </div>
      <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/3">
        <img
          alt="Keske (Skull and right thing), Kaze, 2007"
          className="w-full"
          src="/photos/graffiti/8.jpg"
        />
        <p>Keske (Skull and right thing), Kaze, 2007</p>
      </div>
      <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/3">
        <img
          alt="Keske, Ksenia, 2009"
          className="w-full"
          src="/photos/graffiti/10.jpg"
        />
        <p>Keske, Ksenia, 2009</p>
      </div>
      <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/3">
        <img
          alt="Ksenia, Keske, 2009"
          className="w-full"
          src="/photos/graffiti/11.jpg"
        />
        <p>Ksenia, Keske, 2009</p>
      </div>
      <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/3">
        <img
          alt="Keske, 2009"
          className="w-full"
          src="/photos/graffiti/12.jpg"
        />
        <p>Keske, 2009</p>
      </div>
    </div>
  </div>
);

export default Lego;
