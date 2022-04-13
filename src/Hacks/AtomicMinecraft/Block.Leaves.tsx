import * as React from "react";

import Cube from "./Cube";

import type { Block as BlockProps } from "./@types";
import useStore from "./@store";

type Props = BlockProps;

const Block: React.FC<Props> = ({ radius, showLines, ...rest }: Props) => {
  const { enableColor } = useStore();

  const color = React.useMemo(
    () => (enableColor ? "#00AA00" : "#FFFFFF"),
    [enableColor],
  );

  return (
    <Cube
      {...rest}
      color={color}
      density={7}
      radius={radius}
      showLines={showLines}
    />
  );
};

export default Block;
