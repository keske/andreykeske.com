import * as React from "react";
import { useFrame } from "react-three-fiber";

// Local
import Cube from "./Cube";

// Store
import useStore from "./@store";

import type { Data } from "./@types";

type Props = {
  blocks: Data;
  height: number;
  width: number;
};

const Scene: React.FC<Props> = ({ blocks, height, width }: Props) => {
  const ref = React.useRef<THREE.Scene>();

  const { showLines } = useStore();

  const radius = React.useMemo(() => 0.1, []);

  const photo = React.useMemo(
    () =>
      blocks.map(({ x, y, density }) => (
        <group
          key={`cube-${x}-${y}`}
          position={[x * radius, -density * radius, y * radius]}
        >
          <Cube
            color={0xffffff}
            density={density}
            radius={radius}
            showLines={showLines}
          />
        </group>
      )),
    [blocks, radius, showLines],
  );

  useFrame(() => {
    // ref.current.rotation.x += 0.005;
  });

  return (
    <group
      ref={ref}
      position={[-((width / 2) * radius), 0, -((height / 2) * radius)]}
    >
      {photo}
    </group>
  );
};

export default Scene;
