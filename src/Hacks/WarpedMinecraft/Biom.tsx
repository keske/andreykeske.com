/* eslint consistent-return: 0 */
/* eslint default-case: 0 */

import * as React from "react";

// Components
import { Dirt, Stone } from "./Blocks";

import useBiom from "./@useBiom";
import useStore from "./@store";

const WarpedMinecraftWorld: React.FC = () => {
  const biom = useBiom();

  const radius = 8;

  const renderBlockDependsOnElevation = React.useCallback(
    (elevation: number) => {
      switch (true) {
        // case elevation < -5:
        //   return <Water radius={radius} showLines={showLines} />;

        // case elevation < -2:
        //   return <Sand radius={radius} showLines={showLines} />;

        // case elevation < 2:
        //   return <Stone radius={radius} showLines={showLines} />;

        case elevation < 9:
          return <Dirt />;
      }
    },
    []
  );

  const renderBiom = React.useMemo(
    () =>
      biom.map((row, x) =>
        row.map((col, y) => (
          <group key={`stone-${x}-${y}`} position={[x * 4, col, y * 4]}>
            {renderBlockDependsOnElevation(col)}
          </group>
        ))
      ),
    [biom, renderBlockDependsOnElevation]
  );

  // console.log("biom", biom);

  return (
    <group>
      <ambientLight intensity={0.2} />

      <spotLight
        angle={Math.PI / 6}
        castShadow
        intensity={0.2}
        position={[20, 20, 30]}
        shadow-bias={-0.00005}
        shadow-mapSize-height={2048}
        shadow-mapSize-width={2048}
      />

      {renderBiom}
    </group>
  );
};

export default WarpedMinecraftWorld;
