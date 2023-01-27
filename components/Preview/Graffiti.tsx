import { animated, useSpring } from "@react-spring/web";
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useGesture } from "@use-gesture/react";

import React from "react";
import { Mesh } from "three";

import { THREEOnMouseRotation } from "@/components/index";

const random =
  // eslint-disable-next-line @typescript-eslint/default-param-last
  (min = 0, max: number) => Math.random() * (max - min) + min;

const Model = () => {
  const mesh = React.useRef<Mesh>(null!);

  const { nodes } = useGLTF("/gltfs/wall.gltf") as GLTFResult;

  return (
    <THREEOnMouseRotation ref={mesh} strength={0.0001}>
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

type PhotoProps = React.PropsWithChildren & {
  index: number;
};

const Photo: React.FC<PhotoProps> = ({ children, index }) => {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useGesture(
    {
      onDrag: ({ offset: [ox, oy] }) => {
        api.start({
          immediate: true,
          x: ox,
          y: oy,
        });
      },
    },
    { drag: { preventDefault: true } },
  );

  return (
    <animated.div
      {...bind()}
      className="absolute flex w-1/4 cursor-grab flex-col gap-1 bg-slate-300 p-1"
      style={{
        left: random(0, window.innerWidth),
        top: random(0, window.innerHeight),
        x,
        y,
        zIndex: index,
      }}
    >
      {children}
    </animated.div>
  );
};

export const Graffiti = () => {
  const peaces = React.useMemo(
    () => [
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
    ],
    [],
  );

  const renderPeaces = React.useMemo(
    () =>
      peaces.map((peace, index) => (
        <div
          key={index}
          style={{
            left: random(0, window.innerWidth),
            top: random(0, window.innerHeight),
            zIndex: index,
          }}
        >
          <Photo index={index}>
            <img
              alt={peace}
              className="w-full"
              src={`/photos/graffiti/${index}.jpg`}
            />
            <p className="text-black">
              {peace}, <span className="opacity-30">Yekaterinburg, Russia</span>
            </p>
          </Photo>
        </div>
      )),
    [peaces],
  );

  return (
    <>
      <div className="h-screen w-screen bg-slate-800">{renderPeaces}</div>
      <div className="fixed top-0 z-0 h-screen w-screen">
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
