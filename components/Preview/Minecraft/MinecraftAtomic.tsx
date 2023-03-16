import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as R from "ramda";
import React from "react";
import SimplexNoise from "simplex-noise";

import { MinecraftAtomicCube } from "./MinecraftAtomic.Cube";

import { WorkDetails } from "@/components/index";
import { useControls } from "@/hooks/index";
import { useListItems } from "@/stores/index";

export const MinecraftAtomic: React.FC = () => {
  const { selectedWorkId } = useListItems();

  const { animation, enableColor, showLines, size } = useControls(
    {
      animation: {
        value: true,
      },
      enableColor: {
        value: true,
      },
      showLines: {
        value: true,
      },
      size: {
        max: 10000,
        min: 1,
        step: 1,
        value: 70,
      },
    },
    {
      hidden: R.isNil(selectedWorkId),
    },
  );

  const biom = React.useMemo(() => {
    const gen = new SimplexNoise();

    function noise(nx: number, ny: number): number {
      return gen.noise2D(nx, ny);
    }

    const value = [];

    for (let y = -size.value; y < size.value; y++) {
      value[y] = [];
      for (let x = -size.value; x < size.value; x++) {
        const nx = x / size.value - 0.5;

        const ny = y / size.value - 0.5;

        // @ts-expect-error wip
        value[y][x] = noise(nx, ny).toFixed(1) * 10;
      }
    }

    return value;
  }, [size.value]);

  const radius = React.useMemo(() => 0.1, []);

  const renderBlockDependsOnElevation = React.useCallback(
    (elevation: number) => {
      switch (true) {
        // Water
        case elevation < -5:
          return (
            <MinecraftAtomicCube
              animation={animation.value}
              color={enableColor.value ? "rgba(255, 255, 255, 0.5)" : "#FFFFFF"}
              density={5}
              radius={radius}
              showLines={showLines.value}
            />
          );

        // Sand
        case elevation < -2:
          return (
            <MinecraftAtomicCube
              animation={animation.value}
              color={enableColor.value ? "#d7d8ab" : "#FFFFFF"}
              density={25}
              radius={radius}
              showLines={showLines.value}
            />
          );

        // Stone
        case elevation < 2:
          return (
            <MinecraftAtomicCube
              animation={animation.value}
              color={enableColor.value ? "#AAAAAA" : "#FFFFFF"}
              density={250}
              radius={radius}
              showLines={showLines.value}
            />
          );

        // Dirt
        case elevation < 9:
          return (
            <MinecraftAtomicCube
              animation={animation.value}
              color={enableColor.value ? "#9b7653" : "#FFFFFF"}
              density={10}
              radius={radius}
              showLines={showLines.value}
            />
          );
      }
    },
    [animation, enableColor.value, radius, showLines.value],
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
      <Canvas className="h-full w-full">
        <React.Suspense fallback={null}>
          <OrbitControls />
          {renderBiom}
        </React.Suspense>
      </Canvas>

      <div className="absolute top-48 w-screen">
        <WorkDetails>
          <div className="flex w-full flex-col items-center gap-2">
            <h3>Atomic Minecraft</h3>
            <small className="w-1/2 text-center">
              Atomic Minecraft is a world created with the blocs as the basic
              structure where inside of each of them are atoms exist. In this
              world, atoms play the main role where their amount affects the
              material of the block. More atoms mean that the block is strong
              and heavy. Actually, like electrons in the real world.
            </small>
            <time dateTime="2022">2022</time>
          </div>
        </WorkDetails>
      </div>
    </div>
  );
};
