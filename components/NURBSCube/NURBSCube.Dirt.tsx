import React from "react";
import { Group } from "three";

import { NURBSCube } from "@/components/index";

export const NURBSCubeDirt = React.forwardRef<
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
        bottom: "textures/minecraft/dirt-bottom.png",
        side: "textures/minecraft/dirt-side.png",
        top: "textures/minecraft/dirt-top.png",
      },
    }}
  />
));