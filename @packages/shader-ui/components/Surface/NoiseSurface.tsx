import { RoundedBox } from "@react-three/drei";
import React from "react";

import {
  NoiseMaterialOptions,
  useNoiseMaterial,
} from "@/packages/shader-ui";

export const NoiseSurface = React.forwardRef<
  React.ElementRef<typeof RoundedBox>,
  NoiseMaterialOptions
>(({ density = 0.0000005, time = 0.1 }) => {
  const material = useNoiseMaterial({
    density,
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
