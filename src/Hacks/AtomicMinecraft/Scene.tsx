import * as React from "react";
import * as R from "ramda";

// Blocks
import Air from "./Block.Air";
import Dirt from "./Block.Dirt";
// import Glass from './Block.Glass';
// import Gold from './Block.Gold';
import Stone from "./Block.Stone";
import Torch from "./Block.Torch";

// Structures
import SmallHouse from "./Structure.SmallHouse";
import Tree from "./Structure.Tree";

// Store
import useStore from "./@store";

const Scene: React.FC = () => {
  const { showAir, showLines } = useStore();

  const radius = React.useMemo(() => 0.5, []);

  const airMatrix = React.useMemo<number[]>(() => [-7, 7], []);

  const surfaceMatrix = React.useMemo<number[]>(() => [-7, 7], []);

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

  const earthSurface = React.useMemo(
    () =>
      R.range(surfaceMatrix[0], surfaceMatrix[1]).map((x) =>
        R.range(surfaceMatrix[0], surfaceMatrix[1]).map((z) => (
          <group key={`dirt-${x}-${z}`} position={[x * radius, 0, z * radius]}>
            <Dirt radius={radius} showLines={showLines} />
          </group>
        ))
      ),
    [radius, showLines, surfaceMatrix]
  );

  const stoneSurface = React.useMemo(
    () =>
      R.range(surfaceMatrix[0], surfaceMatrix[1]).map((x) =>
        R.range(surfaceMatrix[0], surfaceMatrix[1]).map((z) => (
          <group
            key={`stone-${x}-${z}`}
            position={[x * radius, -radius, z * radius]}
          >
            <Stone radius={radius} showLines={showLines} />
          </group>
        ))
      ),
    [radius, showLines, surfaceMatrix]
  );

  return (
    <group>
      {/* {airSurface} */}
      {/* {earthSurface} */}
      {/* {stoneSurface} */}

      <group position={[0, 0, 0]}>
        <SmallHouse radius={radius} showLines={showLines} />
      </group>

      {/* <group position={[radius, radius / 2, 0]}>
        <Torch radius={radius} showLines={showLines} />
      </group>

      <group position={[0, radius, 0]}>
        <Tree radius={radius} showLines={showLines} />
      </group> */}
    </group>
  );
};

export default Scene;
