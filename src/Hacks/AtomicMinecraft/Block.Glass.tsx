import * as React from "react";

import Cube from "./Cube";

import type { Block as BlockProps } from "./@types";

type Props = BlockProps;

const BlockGlass: React.FC<Props> = ({ radius, showLines, ...rest }: Props) => (
  <Cube
    {...rest}
    color={0xe6e6fa}
    density={10}
    radius={radius}
    showLines={showLines}
  />
);

export default BlockGlass;
