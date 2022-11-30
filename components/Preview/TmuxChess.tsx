import { useVideoTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMove } from "@use-gesture/react";
import React from "react";
import { Mesh } from "three";

const Video = () => {
  const mesh = React.useRef<Mesh>(null!);

  const texture = useVideoTexture("/tmux-chess.mp4", {
    loop: true,
    start: true,
  });

  useMove(
    (state) => {
      mesh.current.rotation.y += state.delta[0] * 0.001;
      mesh.current.rotation.x += state.delta[1] * 0.001;
    },
    { target: document },
  );

  return (
    <mesh ref={mesh} rotation={[-0.8, 0, 0]} scale={1}>
      <planeGeometry args={[6, 6, 1]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
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
