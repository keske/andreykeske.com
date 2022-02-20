import * as React from "react";

import CubeOuter from "./Cube.Outer";
import CubeParticles from "./Cube.Particles";

import type { Cube as CubeProps } from "./@types";

type Props = CubeProps;

const Cube: React.FC<Props> = ({
  color,
  density,
  radius,
  showLines,
}: Props) => (
  <group>
    <CubeOuter color={color} radius={radius} showLines={showLines} />
    <CubeParticles color={color} density={density} radius={radius} />
  </group>
);

export default Cube;
