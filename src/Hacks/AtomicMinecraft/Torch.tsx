import * as React from "react";

import Air from "./Block.Air";
import TorchOuter from "./Torch.Outer";
import TorchParticles from "./Torch.Particles";

import type { Cube as CubeProps } from "./@types";

type Props = CubeProps;

const Torch: React.FC<Props> = ({
  color,
  density,
  radius,
  showLines,
}: Props) => (
  <group>
    <Air radius={radius} showLines={showLines} />
    <TorchOuter radius={radius} showLines={showLines} />
    <TorchParticles color={color} density={density} radius={radius} />
  </group>
);

export default Torch;
