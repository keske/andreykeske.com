import * as React from "react";

import Cube from "./Cube";

import type { Block as BlockProps } from "./@types";
import useStore from "./@store";

type Props = BlockProps;

const Block: React.FC<Props> = ({ radius, showLines, ...rest }: Props) => {
  const { enableColor } = useStore();

  const color = React.useMemo(
    () => (enableColor ? "rgba(255, 255, 255, 0.5)" : "#FFFFFF"),
    [enableColor],
  );

  return (
    <Cube
      {...rest}
      color={color}
      density={1}
      radius={radius}
      showLines={showLines}
    />
  );
};

export default Block;
