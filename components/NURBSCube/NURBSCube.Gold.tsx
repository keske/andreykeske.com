import React from "react";
import { Group } from "three";

import { NURBSCube } from "@/components/index";

export const NURBSCubeGold = React.forwardRef<
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
        bottom: "textures/minecraft/gold.jpg",
        side: "textures/minecraft/gold.jpg",
        top: "textures/minecraft/gold.jpg",
      },
    }}
  />
));
