import React from "react";
import { Group } from "three";

import { NURBSCube } from "@/components";

export const NURBSCubeLava = React.forwardRef<
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
        bottom: "textures/minecraft/lava.jpg",
        side: "textures/minecraft/lava.jpg",
        top: "textures/minecraft/lava.jpg",
      },
    }}
  />
));
