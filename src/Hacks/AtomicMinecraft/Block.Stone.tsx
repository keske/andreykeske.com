import * as React from "react";

import Cube from "./Cube";

import type { Block as BlockProps } from "./@types";

type Props = BlockProps;

const BlockStone: React.FC<Props> = ({ radius, showLines, ...rest }: Props) => (
  <Cube
    {...rest}
    color={0xd4d4d4}
    density={500}
    radius={radius}
    showLines={showLines}
  />
);

export default BlockStone;
