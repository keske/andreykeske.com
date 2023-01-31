import React from "react";
import { Group } from "three";

import { NURBSCube } from "@/components/index";

export const NURBSCubeStone = React.forwardRef<
  Group,
  JSX.IntrinsicElements["group"]
>(({ ...props }, ref) => (
  <NURBSCube
    ref={ref}
    {...{
      ...props,
      map: {
        bottom: "textures/minecraft/stone.png",
        side: "textures/minecraft/stone.png",
        top: "textures/minecraft/stone.png",
      },
    }}
  />
));
