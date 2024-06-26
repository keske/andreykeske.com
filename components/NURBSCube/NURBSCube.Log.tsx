import React from "react";
import { Group } from "three";

import { NURBSCube } from "@/components/index";

export const NURBSCubeLog = React.forwardRef<
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
        bottom: "textures/minecraft/log.png",
        side: "textures/minecraft/log.png",
        top: "textures/minecraft/log.png",
      },
    }}
  />
));
