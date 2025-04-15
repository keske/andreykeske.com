import { Text } from "@react-three/drei";

import * as React from "react";
import * as THREE from "three";

export type TextWithShaderProps = {
  material: THREE.ShaderMaterial;
  value: string;
};

export const TextWithShader: React.FC<TextWithShaderProps> = ({
  material,
  value,
}) => (
  <Text
    anchorX="left"
    children={value}
    font={"/Inter-Bold.woff"}
    fontSize={1.3}
    material={material}
    position={[0, 0, 0]}
  />
);
