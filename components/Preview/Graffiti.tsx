import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Mesh } from "three";

import { THREEOnMouseRotation } from "@/components/index";

const Wall = () => {
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

const Graffiti = () => {
  const peaces = [
    "Keske, Kaze, 2007",
    "Keske, Kaze, 2007",
    "Keske, Kaze, 2007",
    "Keske, Kaze, 2007",
    "Kaze, Keske,  2007",
    "Keske, Zebo (Bird), 2010",
    "Keske, 2007",
    "Keske (Skull and right thing), Kaze, 2007",
    "Keske, Kaze, 2009",
    "Ksenia, Keske, 2009",
    "Ksenia, Keske, 2009",
    "Keske, 2009",
  ];

  return (
    <div className="absolute top-0 left-0 h-screen w-screen">
      <div className="fixed bottom-5 right-5 z-10 h-1/3 w-1/3">
        <Canvas
          gl={{
            alpha: true,
            antialias: true,
            depth: false,
            powerPreference: "high-performance",
          }}
        >
          <group>
            <spotLight angle={1} intensity={0.2} position={[20, 20, 30]} />
            <Wall />
          </group>
        </Canvas>
      </div>
      <div className="flex flex-col items-center gap-10 p-20">
        {peaces.map((peace, index) => (
          <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/3" key={index}>
            <img alt={peace} src={`/photos/graffiti/${index + 1}.jpg`} />
            <p>{peace}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Graffiti;
