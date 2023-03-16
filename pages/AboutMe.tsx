import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

import { NURBSLetter } from "@/components/index";

export const AboutMe: React.FC = () => {
  const warpRatio = 2;

  const renderAlphabet = React.useMemo(() => {
    const renderLetters = () =>
      "Andrey Keske is a digital artist and software engineer"
        .split("")
        .map((letter, index) => (
          <group
            key={letter}
            position={[0.7 * index, 0, 0]}
            scale={[0.1, 0.1, 0.1]}
          >
            <NURBSLetter
              url={`images/helvetica/upper-${letter}.png`}
              warpRatio={warpRatio}
            />
          </group>
        ));

    return renderLetters();
  }, [warpRatio]);

  return (
    <div className="h-screen w-screen">
      <Canvas className="h-screen w-screen bg-[#ccff00]">
        <React.Suspense fallback={null}>
          <PerspectiveCamera fov={35} makeDefault position={[-10, 0, 20]} />
          <OrbitControls />
          {renderAlphabet}
        </React.Suspense>
      </Canvas>
    </div>
  );
};
