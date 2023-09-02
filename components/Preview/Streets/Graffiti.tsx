import {
  OrbitControls,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

const WallModel: React.FC = () => {
  const { nodes } = useGLTF("/gltfs/wall.gltf") as GLTFResult;

  const texture = useTexture("/photos/graffiti/wall.png");

  texture.repeat.set(2.5, 3);

  const mesh = React.useRef<THREE.Mesh>(null!);

  const isDarkTheme = React.useMemo(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
    [],
  );

  const renderMaterial = React.useMemo(
    () =>
      isDarkTheme ? (
        <meshNormalMaterial attach="material" />
      ) : (
        <meshStandardMaterial
          attach="material"
          map={texture}
          metalness={10}
          roughness={0.2}
        />
      ),
    [isDarkTheme, texture],
  );

  return (
    <mesh
      geometry={nodes.box_low.geometry}
      position={[0, -10, 0]}
      ref={mesh}
      rotation={[-11, 0, -22.3]}
    >
      {renderMaterial}
    </mesh>
  );
};

const Wall: React.FC = () => (
  <Canvas
    camera={{ position: [0, 0, -30] }}
    className="h-full w-full"
  >
    <OrbitControls enableZoom={false} />
    <ambientLight intensity={0.2} />
    <spotLight intensity={1.5} position={[20, 20, 30]} />
    <WallModel />
  </Canvas>
);

import { WorkDetails } from "@/components";

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

export const Graffiti = () => (
  <div className="flex flex-col gap-20">
    <div className="flex flex-col">
      <div className="h-screen w-screen">
        <Wall />
      </div>
      <WorkDetails>
        <div className="-mt-28 flex w-full flex-col items-center gap-2 pb-20">
          {peaces.map((peace, index) => (
            <div
              className="flex w-1/3 flex-col gap-1 sm:w-full sm:p-10 md:w-full lg:w-4/6"
              key={index}
            >
              <img
                alt={peace}
                className="w-full"
                src={`/photos/graffiti/${index}.jpg`}
              />
              <p className="text-black dark:text-white">
                {peace},{" "}
                <span className="opacity-30">
                  Yekaterinburg, Russia
                </span>
              </p>
            </div>
          ))}
        </div>
      </WorkDetails>
    </div>
  </div>
);
