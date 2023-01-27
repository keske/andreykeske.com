import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Mesh } from "three";

import { THREEOnMouseRotation } from "@/components/index";

const Model = () => {
  const mesh = React.useRef<Mesh>(null!);

  const { nodes } = useGLTF("/gltfs/wall.gltf") as GLTFResult;

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

export const Graffiti = () => {
  const peaces = [
    "Keske, Kaze, 2007",
    "Keske, Kaze, 2007",
    "Keske, Kaze, 2007",
    "Keske, Kaze, 2007",
    "Kaze (Aru), Keske, 2007",
    "Keske, Zebo (Bird), 2010",
    "Keske, 2007",
    "Keske (Skull and right thing), Kaze, 2007",
    "Keske, Kaze (Aru), 2009",
    "Keske, Keske, 2009",
    "Ksenia, Keske, 2009",
    "Keske, 2009",
    "Keske, 2009",
    "Kaze, Keske, 2007",
    "Ksenia, Keske, 2009",
  ];

  return (
    <>
      <div className="flex flex-col items-center gap-10 py-40">
        {peaces.map((peace, index) => (
          <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/3" key={index}>
            <img
              alt={peace}
              className="w-full"
              src={`/photos/graffiti/${index}.jpg`}
            />
            <p>
              {peace}, <span className="opacity-30">Yekaterinburg, Russia</span>
            </p>
          </div>
        ))}
      </div>
      <div className="fixed top-0 z-10 h-[100px] w-[100px]">
        <Canvas
          gl={{
            alpha: true,
            antialias: true,
            depth: false,
            powerPreference: "high-performance",
          }}
        >
          <spotLight angle={1} intensity={0.2} position={[20, 20, 30]} />
          <Model />
        </Canvas>
      </div>
    </>
  );
};
