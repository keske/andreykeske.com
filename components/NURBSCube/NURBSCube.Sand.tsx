import React from "react";
import { Group } from "three";

import { NURBSCube } from "@/components/index";

export const NURBSCubeSand = React.forwardRef<
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
        bottom: "textures/minecraft/sand.png",
        side: "textures/minecraft/sand.png",
        top: "textures/minecraft/sand.png",
      },
    }}
  />
));
