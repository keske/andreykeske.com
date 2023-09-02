import { useVideoTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Mesh } from "three";

const DesktopVideo = () => {
  const mesh = React.useRef<Mesh>(null!);

  const texture = useVideoTexture("/videos/tmux-chess.mp4", {
    loop: true,
    start: true,
  });

  return (
    <mesh ref={mesh} rotation={[-0.8, 0, 0]} scale={1}>
      <planeGeometry args={[6, 6, 1]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
};

export const MacOSTerminal = () => (
  <div className="h-screen w-screen overflow-hidden bg-black pt-60">
    <h4 className="z-10 text-center text-3xl text-white">
      Tmux Chess
    </h4>
    <Canvas
      gl={{
        alpha: true,
        antialias: true,
        depth: false,
        powerPreference: "high-performance",
        stencil: false,
      }}
    >
      <DesktopVideo />
    </Canvas>
  </div>
);
