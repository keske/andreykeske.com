import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as R from "ramda";
import React from "react";
import SimplexNoise from "simplex-noise";

import { MinecraftAtomicCube } from "./MinecraftAtomic.Cube";

export const MinecraftAtomic: React.FC = () => {
  const enableColor = true;

  const showLines = true;

  const biom = React.useMemo(() => {
    const size = 70;

    const gen = new SimplexNoise();

    function noise(nx: number, ny: number): number {
      return gen.noise2D(nx, ny);
    }

    const value = [];

    for (let y = -size; y < size; y++) {
      value[y] = [];
      for (let x = -size; x < size; x++) {
        const nx = x / size - 0.5;

        const ny = y / size - 0.5;

        // @ts-expect-error wip
        value[y][x] = noise(nx, ny).toFixed(1) * 10;
      }
    }

    return value;
  }, []);

  const radius = React.useMemo(() => 0.1, []);

  // const airMatrix = React.useMemo<number[]>(() => [-10, 10], []);

  // const airSurface = React.useMemo(
  //   () =>
  //     showAir &&
  //     R.range(airMatrix[0], airMatrix[1]).map((x) =>
  //       R.range(airMatrix[0], airMatrix[1]).map((y) =>
  //         R.range(airMatrix[0], airMatrix[1]).map((z) => (
  //           <group
  //             key={`stone-${x}-${y}-${z}`}
  //             position={[x * radius, y * radius, z * radius]}
  //           >
  //             <Air radius={radius} showLines={showLines} />
  //           </group>
  //         )),
  //       ),
  //     ),
  //   [airMatrix, radius, showAir, showLines],
  // );

  const renderBlockDependsOnElevation = React.useCallback(
    (elevation: number) => {
      switch (true) {
        // Water
        case elevation < -5:
          return (
            <MinecraftAtomicCube
              color={enableColor ? "rgba(255, 255, 255, 0.5)" : "#FFFFFF"}
              density={5}
              radius={radius}
              showLines={showLines}
            />
          );

        // Sand
        case elevation < -2:
          return (
            <MinecraftAtomicCube
              color={enableColor ? "#d7d8ab" : "#FFFFFF"}
              density={25}
              radius={radius}
              showLines={showLines}
            />
          );

        // Stone
        case elevation < 2:
          return (
            <MinecraftAtomicCube
              color={enableColor ? "#AAAAAA" : "#FFFFFF"}
              density={250}
              radius={radius}
              showLines={showLines}
            />
          );

        // Dirt
        case elevation < 9:
          return (
            <MinecraftAtomicCube
              color={enableColor ? "#9b7653" : "#FFFFFF"}
              density={10}
              radius={radius}
              showLines={showLines}
            />
          );
      }
    },
    [enableColor, radius, showLines],
  );

  const renderBiom = React.useMemo(
    () =>
      biom.map((row, x) =>
        row.map((col, z) => (
          <group
            key={`stone-${x}-${z}`}
            position={[x * radius, col * radius, z * radius]}
          >
            {renderBlockDependsOnElevation(col)}
          </group>
        )),
      ),
    [biom, radius, renderBlockDependsOnElevation],
  );

  return (
    <div className="h-screen w-screen">
      <Canvas>
        <React.Suspense fallback={null}>
          <OrbitControls />
          <group>
            {renderBiom}
            {/* {airSurface} */}
          </group>
        </React.Suspense>
      </Canvas>
    </div>
  );
};
