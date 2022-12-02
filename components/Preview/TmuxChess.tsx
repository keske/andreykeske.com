import { useVideoTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Mesh } from "three";

import { THREEOnMouseRotation } from "@/components/index";

const Video = () => {
  const mesh = React.useRef<Mesh>(null!);

  const texture = useVideoTexture("/videos/tmux-chess.mp4", {
    loop: true,
    start: true,
  });

  return (
    <THREEOnMouseRotation ref={mesh}>
      <mesh ref={mesh} rotation={[-0.8, 0, 0]} scale={1}>
        <planeGeometry args={[6, 6, 1]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
    </THREEOnMouseRotation>
  );
};

const TmuxChess = () => (
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
      <Video />
    </Canvas>
  </div>
);

export default TmuxChess;
