import React from "react";
import { Group } from "three";

import { NURBSCube } from "@/components/index";

export const NURBSCubeLeaves = React.forwardRef<
  Group,
  JSX.IntrinsicElements["group"] & {
    warpRatio: number;
  }
>(({ ...props }, ref) => (
  <NURBSCube
    ref={ref}
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
