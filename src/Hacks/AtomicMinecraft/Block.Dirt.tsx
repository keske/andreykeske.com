import * as React from "react";

import Cube from "./Cube";

import type { Block as BlockProps } from "./@types";

type Props = BlockProps;

const BlockDirt: React.FC<Props> = ({ radius, showLines, ...rest }: Props) => (
  <Cube
    {...rest}
    color={0x464d22}
    density={100}
    radius={radius}
    showLines={showLines}
  />
);

export default BlockDirt;
