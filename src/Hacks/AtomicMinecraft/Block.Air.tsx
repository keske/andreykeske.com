import * as React from "react";

import Cube from "./Cube";

import type { Block as BlockProps } from "./@types";

type Props = BlockProps;

const BlockAir: React.FC<Props> = ({ radius, showLines, ...rest }: Props) => (
  <Cube
    {...rest}
    color={0x464d22}
    density={1}
    radius={radius}
    showLines={showLines}
  />
);

export default BlockAir;
