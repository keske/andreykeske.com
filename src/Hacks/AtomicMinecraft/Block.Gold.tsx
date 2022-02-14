import * as React from "react";

import Cube from "./Cube";

import type { Block as BlockProps } from "./@types";

type Props = BlockProps;

const BlockGold: React.FC<Props> = ({ radius, showLines, ...rest }: Props) => (
  <Cube
    {...rest}
    color={0xfb9121}
    density={1000}
    radius={radius}
    showLines={showLines}
  />
);

export default BlockGold;
