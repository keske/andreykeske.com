import { OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { createNoise2D } from "simplex-noise";

import { NURBSCube } from "@/components/index";

const useBiom = (): number[][] => {
  const width = 10;

  const height = 10;

  const [biom, setBiom] = React.useState<number[][]>([]);

  React.useEffect(() => {
    const noise2D = createNoise2D();

    const noise = noise2D(width, height);
    // const gen = createNoise2D();

    // function noise(nx: number, ny: number): number {
    //   return gen.noise2D(nx, ny);
    // }

    const value = [];

    for (let y = -height; y < height; y++) {
      value[y] = [];
      for (let x = -width; x < width; x++) {
        const nx = x / width;

        const ny = y / height;

        value[y][x] = noise(nx, ny).toFixed(1) * 10;
      }
    }

    setBiom(value);
  }, [height, width]);

  return biom;
};

export const MinecraftWarped: React.FC = () => {
  const biom = useBiom();

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
          return <NURBSCube />;
      }
    },
    [],
  );

  const renderBiom = React.useMemo(
    () =>
      biom.map((row, x) =>
        row.map((col, y) => (
          <group key={`stone-${x}-${y}`} position={[x * 4, col, y * 4]}>
            {renderBlockDependsOnElevation(col)}
          </group>
        )),
      ),
    [biom, renderBlockDependsOnElevation],
  );

  return (
    <div className="h-screen w-screen">
      <Canvas>
        <React.Suspense fallback={null}>
          <OrbitControls />
          <Sky
            {...{
              azimuth: 180,
              distance: 13000,
              mieCoefficient: 0.005,
              mieDirectionalG: 0.7,
              rayleigh: 3,
              turbidity: 10,
            }}
          />
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
        </React.Suspense>
      </Canvas>
    </div>
  );
};
