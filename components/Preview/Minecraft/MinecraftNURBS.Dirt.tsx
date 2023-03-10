import { OrbitControls, PerspectiveCamera, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as R from "ramda";
import React from "react";

import { NURBSCubeDirt } from "@/components/index";
import { useControls } from "@/hooks/index";
import { useListItems } from "@/stores/index";

const Environment: React.FC = () => (
  <>
    <Sky />
    <OrbitControls autoRotate autoRotateSpeed={0.3} />
    <ambientLight intensity={0.3} />
    <PerspectiveCamera fov={15} makeDefault position={[0, 0, 70]} />
  </>
);

export const MinecraftNURBSDirt: React.FC = () => {
  const { selectedWorkId } = useListItems();

  const { warpRatio } = useControls(
    {
      warpRatio: {
        max: 10,
        min: 0.1,
        step: 0.1,
        value: 0.4,
      },
    },
    {
      hidden: R.isNil(selectedWorkId),
    },
  );

  return (
    <Canvas className="h-screen w-screen">
      <React.Suspense fallback={null}>
        <Environment />
        <NURBSCubeDirt warpRatio={warpRatio.value} />
      </React.Suspense>
    </Canvas>
  );
};
