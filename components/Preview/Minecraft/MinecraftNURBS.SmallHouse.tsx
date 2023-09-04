import { Canvas } from "@react-three/fiber";
import * as R from "ramda";
import React from "react";

import { MinecraftNURBSEnvironment } from "./MinecraftNURBS.Environment";

import { NURBSCubeStructureSmallHouse } from "@/components";
import { useControls } from "@/packages/controls";
import { Loading } from "@/packages/ui-kit";
import { useListItems } from "@/stores";

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
    <Canvas className="h-full w-full">
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
