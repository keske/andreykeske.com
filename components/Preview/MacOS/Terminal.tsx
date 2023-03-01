import { MapControls, useVideoTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Parallax } from "react-scroll-parallax";
import { Mesh } from "three";

import { THREEOnMouseRotation } from "@/components/index";
import { useHeader, useListItems } from "@/stores/index";
import { interpolate } from "@/utils/index";

const DesktopVideo = () => {
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

const Desktop: React.FC = () => {
  const { setScheme } = useHeader();

  const { selectedCaseId } = useListItems();

  React.useEffect(() => {
    setScheme({
      bg: "black",
      text: "white",
    });
  }, [selectedCaseId, setScheme]);

  return (
    <div className="h-screen w-screen overflow-hidden bg-black py-40">
      <h4 className="z-10 text-center text-3xl text-white">Tmux Chess</h4>
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
};

const MobileVideo = () => {
  const mesh = React.useRef<Mesh>(null!);

  const texture = useVideoTexture("/videos/tmux-chess.mp4", {
    loop: true,
    start: true,
  });

  return (
    <THREEOnMouseRotation ref={mesh}>
      <mesh ref={mesh} rotation={[-0.1, 0, 0]} scale={1}>
        <planeGeometry args={[6, 6, 1]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
    </THREEOnMouseRotation>
  );
};

const Mobile = () => {
  const [zoom, setZoom] = React.useState(1);

  const handleProgress = React.useCallback((progress: number) => {
    const newZoom = Math.round(interpolate([0.3, 0.5], [1, 10], progress));

    setZoom(newZoom);
  }, []);

  return (
    <div className="h-screen w-full bg-red-900">
      <Parallax onProgressChange={handleProgress}>
        <Canvas camera={{ position: [0, 0, 20] }}>
          <MobileVideo />
          <MapControls />
        </Canvas>
      </Parallax>
    </div>
  );
};

export const Terminal = () =>
  typeof window !== "undefined" && window.innerWidth > 768 ? (
    <Desktop />
  ) : (
    <Mobile />
  );
