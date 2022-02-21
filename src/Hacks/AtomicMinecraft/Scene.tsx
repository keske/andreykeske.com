/* eslint consistent-return: 0 */
/* eslint default-case: 0 */

import * as React from "react";
import * as R from "ramda";

// Blocks
import Air from "./Block.Air";
import Dirt from "./Block.Dirt";
import Sand from "./Block.Sand";
import Stone from "./Block.Stone";
import Water from "./Block.Water";

import useBiom from "./@useBiom";
import useStore from "./@store";

const Scene: React.FC = () => {
  const biom = useBiom();

  const { showAir, showLines } = useStore();

  const radius = React.useMemo(() => 0.1, []);

  const airMatrix = React.useMemo<number[]>(() => [-10, 10], []);

  const airSurface = React.useMemo(
    () =>
      showAir &&
      R.range(airMatrix[0], airMatrix[1]).map((x) =>
        R.range(airMatrix[0], airMatrix[1]).map((y) =>
          R.range(airMatrix[0], airMatrix[1]).map((z) => (
            <group
              key={`stone-${x}-${y}-${z}`}
              position={[x * radius, y * radius, z * radius]}
            >
              <Air radius={radius} showLines={showLines} />
            </group>
          ))
        )
      ),
    [airMatrix, radius, showAir, showLines]
  );

  const renderBlockDependsOnElevation = React.useCallback(
    (elevation: number) => {
      switch (true) {
        case elevation < -5:
          return <Water radius={radius} showLines={showLines} />;

        case elevation < -2:
          return <Sand radius={radius} showLines={showLines} />;

        case elevation < 2:
          return <Stone radius={radius} showLines={showLines} />;

        case elevation < 9:
          return <Dirt radius={radius} showLines={showLines} />;
      }
    },
    [radius, showLines]
  );

  const rednerBiom = React.useMemo(
    () =>
      biom.map((row, x) =>
        row.map((col, z) => (
          <group
            key={`stone-${x}-${z}`}
            position={[x * radius, col * radius, z * radius]}
          >
            {renderBlockDependsOnElevation(col)}
          </group>
        ))
      ),
    [biom, radius, renderBlockDependsOnElevation]
  );

  return (
    <group>
      {rednerBiom}
      {/* {airSurface} */}
    </group>
  );
};

export default Scene;
