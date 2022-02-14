import * as React from "react";

import Cube from "./Cube";

import type { Block as BlockProps } from "./@types";

type Props = BlockProps;

const BlockLeaves: React.FC<Props> = ({
  radius,
  showLines,
  ...rest
}: Props) => (
  <Cube
    {...rest}
    color={0xe6e6fa}
    density={50}
    radius={radius}
    showLines={showLines}
  />
);

export default BlockLeaves;
