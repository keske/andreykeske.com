import React from "react";
import { Group } from "three";

import { NURBSCube } from "@/components/index";

export const NURBSCubeRedStone = React.forwardRef<
  Group,
  JSX.IntrinsicElements["group"]
>(({ ...props }, ref) => (
  <NURBSCube
    ref={ref}
    {...{
      ...props,
      map: {
        bottom: "textures/minecraft/redstone.png",
        side: "textures/minecraft/redstone.png",
        top: "textures/minecraft/redstone.png",
      },
    }}
  />
));
