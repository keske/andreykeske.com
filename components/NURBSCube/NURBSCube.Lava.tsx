import React from "react";
import { Group } from "three";

import { NURBSCube } from "@/components/index";

export const NURBSCubeLava = React.forwardRef<
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
        bottom: "textures/minecraft/lava.jpg",
        side: "textures/minecraft/lava.jpg",
        top: "textures/minecraft/lava.jpg",
      },
    }}
  />
));