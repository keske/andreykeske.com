import * as React from 'react';
import * as R from 'ramda';

// Components
import { Dirt, Stone } from './Blocks';
import { Tree } from './Structures';

const WarpedMinecraftWorld: React.FC = () => {
  const surfaceMatrix = React.useMemo<number[]>(() => [-3, 3], []);

  const earthSurface = React.useMemo(
    () =>
      R.range(surfaceMatrix[0], surfaceMatrix[1]).map((x) =>
        R.range(surfaceMatrix[0], surfaceMatrix[1]).map((z) => (
          <group key={`dirt-${x}-${z}`} position={[x * 4, 0, z * 4]}>
            <Dirt />
          </group>
        )),
      ),
    [surfaceMatrix],
  );

  const stoneSurface = React.useMemo(
    () =>
      R.range(surfaceMatrix[0], surfaceMatrix[1]).map((x) =>
        R.range(surfaceMatrix[0], surfaceMatrix[1]).map((z) => (
          <group
            key={`stone-${x}-${z}`}
            position={[x * 4, -4, z * 4]}
          >
            <Stone />
          </group>
        )),
      ),
    [surfaceMatrix],
  );

  return (
    <group>
      {earthSurface}
      {stoneSurface}

      <group position={[0, 4, 0]}>
        <Tree />
      </group>
    </group>
  );
};

export default WarpedMinecraftWorld;
