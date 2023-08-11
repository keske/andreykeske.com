import React from "react";
import { Group } from "three";

import { NURBSCube } from "@/components";

export const NURBSCubeLeaves = React.forwardRef<
  Group,
  JSX.IntrinsicElements["group"] & {
    warpRatio: number;
  }
>(({ ...props }, forwardedRef) => (
  <NURBSCube
    ref={forwardedRef}
    {...{
      ...props,
      map: {
        bottom: "textures/minecraft/leaves.png",
        side: "textures/minecraft/leaves.png",
        top: "textures/minecraft/leaves.png",
      },
    }}
  />
));
