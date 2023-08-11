import React from "react";
import { Group } from "three";

import { NURBSCube } from "@/components";

export const NURBSCubeSand = React.forwardRef<
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
        bottom: "textures/minecraft/sand.png",
        side: "textures/minecraft/sand.png",
        top: "textures/minecraft/sand.png",
      },
    }}
  />
));
