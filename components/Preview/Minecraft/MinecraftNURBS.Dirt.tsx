import {
  OrbitControls,
  PerspectiveCamera,
  Sky,
  Stars,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as R from "ramda";
import React from "react";

import { NURBSCubeDirt } from "@/components";
import { useControls } from "@/hooks";
import { useListItems } from "@/stores";

const Environment: React.FC = () => {
  const isDarkTheme = React.useMemo(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
    [],
  );

  return (
    <>
      {isDarkTheme ? <Stars /> : <Sky />}
      <OrbitControls autoRotate autoRotateSpeed={0.3} />
      <ambientLight intensity={0.3} />
      <PerspectiveCamera fov={15} makeDefault position={[0, 0, 70]} />
    </>
  );
};

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
