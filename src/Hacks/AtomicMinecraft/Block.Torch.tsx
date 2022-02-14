import * as React from "react";

import Torch from "./Torch";

import type { Block as BlockProps } from "./@types";

type Props = BlockProps;

const BlockTorch: React.FC<Props> = ({ radius, showLines, ...rest }: Props) => (
  <Torch
    {...rest}
    color={0x464d22}
    density={800}
    radius={radius}
    showLines={showLines}
  />
);

export default BlockTorch;
