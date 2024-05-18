import { Canvas } from "@react-three/fiber";
import * as R from "ramda";
import React from "react";

import { MinecraftNURBSEnvironment } from "./MinecraftNURBS.Environment";

import {
  Loading,
  NURBSCubeStructureSmallHouse,
} from "@/components/index";
import { useControls } from "@/hooks/index";
import { useListItems } from "@/stores/index";

export const MinecraftNURBSSmallHouse: React.FC = () => {
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
    <Canvas className="size-full">
      <React.Suspense fallback={<Loading />}>
        <MinecraftNURBSEnvironment
          orbitControlsProps={{
            enableRotate: true,
          }}
        />
        <mesh position={[0, -13, -150]}>
          <NURBSCubeStructureSmallHouse warpRatio={warpRatio.value} />
        </mesh>
      </React.Suspense>
    </Canvas>
  );
};
