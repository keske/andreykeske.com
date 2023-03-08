import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as R from "ramda";
import React from "react";

import { NURBSLetter } from "@/components/index";
import { useControls } from "@/hooks/index";
import { useListItems } from "@/stores/index";

export const TypographyNURBSLetter: React.FC = () => {
  const { selectedWorkId } = useListItems();

  const { warpRatio } = useControls(
    {
      warpRatio: {
        max: 100,
        min: 1,
        step: 1,
        value: 10.4,
      },
    },
    {
      hidden: R.isNil(selectedWorkId),
    },
  );

  return (
    <div className="h-screen w-screen">
      <Canvas
        camera={{
          position: [0, 0, 30],
        }}
        className="h-screen w-screen bg-[#ccff00]"
      >
        <React.Suspense fallback={null}>
          <PerspectiveCamera fov={35} makeDefault position={[0, 0, 30]} />
          <OrbitControls />
          <ambientLight intensity={0.3} />
          <NURBSLetter
            url={`images/helvetica/upper-a.png`}
            warpRatio={warpRatio.value}
          />
        </React.Suspense>
      </Canvas>
    </div>
  );
};
