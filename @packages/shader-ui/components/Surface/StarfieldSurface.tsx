import { RoundedBox } from "@react-three/drei";
import React from "react";

import {
  StarfieldMaterialOptions,
  useStarfieldMaterial,
} from "@/packages/shader-ui";

export const StarfieldSurface = React.forwardRef<
  React.ElementRef<typeof RoundedBox>,
  StarfieldMaterialOptions
>(({ density = 707, threshold = 0.1, time = 1.05 }) => {
  const material = useStarfieldMaterial({
    density,
    threshold,
    time,
  });

  return (
    <RoundedBox
      args={[3.8, 3.2, 3.1]}
      material={material}
      position={[0, 0, 0]}
      radius={3.1}
    />
  );
});
