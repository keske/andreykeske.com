import React from "react";
import { Group } from "three";

import { NURBSCube } from "@/components/index";

export const NURBSCubeGlass = React.forwardRef<
  Group,
  JSX.IntrinsicElements["group"]
>(({ ...props }, ref) => (
  <NURBSCube
    ref={ref}
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
