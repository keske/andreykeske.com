import React from "react";
import { Group } from "three";

import { NURBSCube } from "@/components";

export const NURBSCubeGlass = React.forwardRef<
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
        bottom: "textures/minecraft/glass.png",
        side: "textures/minecraft/glass.png",
        top: "textures/minecraft/glass.png",
      },
    }}
  />
));
