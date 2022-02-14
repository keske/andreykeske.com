import * as React from "react";

import Cube from "./Cube";

import type { Block as BlockProps } from "./@types";

type Props = BlockProps;

const BlockLog: React.FC<Props> = ({
  position,
  radius,
  showLines,
  ...rest
}: Props) => (
  <Cube
    {...rest}
    color={0xe6e6fa}
    density={2500}
    position={position}
    radius={radius}
    showLines={showLines}
  />
);

export default BlockLog;
