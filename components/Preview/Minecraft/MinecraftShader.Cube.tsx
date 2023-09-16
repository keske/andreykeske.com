import { Box } from "@react-three/drei";
import React from "react";

import {
  PlasmaMaterialOptions,
  usePlasmaMaterial,
} from "@/packages/shader-ui";

type ShaderCubeProps = PlasmaMaterialOptions & {
  /**
   * Radius of the cube
   */
  radius: number;
};

export const MinecraftShaderCube: React.FC<ShaderCubeProps> = ({
  radius,
  ...plasmaMaterialOptions
}) => {
  const material = usePlasmaMaterial(plasmaMaterialOptions);

  return <Box args={[radius, radius, radius]} material={material} />;
};
