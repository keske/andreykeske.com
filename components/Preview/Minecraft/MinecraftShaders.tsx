import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as R from "ramda";
import React from "react";
import SimplexNoise from "simplex-noise";
import * as THREE from "three";

import { MinecraftShaderCube } from "./MinecraftShader.Cube";

import { WorkDetails } from "@/components";
import { useControls } from "@/packages/controls";
import { useListItems } from "@/stores";

export const MinecraftShaders: React.FC = () => {
  const { selectedWorkId } = useListItems();

  const { size } = useControls(
    {
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

  const radius = 1;

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

  const frequency = React.useCallback(
    (value: number = 113.9) => ({ x: value, y: value, z: value }),
    [],
  );

  const renderBlockDependsOnElevation = React.useCallback(
    (elevation: number) => {
      switch (true) {
        // Water
        case elevation < -5:
          return (
            <MinecraftShaderCube
              colors={[
                new THREE.Color("#0F235E"),
                new THREE.Color("#223168"),
              ]}
              frequency={frequency()}
              radius={radius}
            />
          );

        // Sand
        case elevation < -2:
          return (
            <MinecraftShaderCube
              colors={[
                new THREE.Color("#C3BE8A"),
                new THREE.Color("#CFC29D"),
                new THREE.Color("#737052"),
                new THREE.Color("#7B725B"),
              ]}
              frequency={frequency()}
              intensivity={100}
              radius={radius}
            />
          );

        // Stone
        case elevation < 2:
          return (
            <MinecraftShaderCube
              colors={[
                new THREE.Color("#444643"),
                new THREE.Color("#323330"),
                new THREE.Color("#4C4D4B"),
                new THREE.Color("#3E403D"),
              ]}
              frequency={frequency()}
              intensivity={300}
              radius={radius}
            />
          );

        // Dirt
        case elevation < 9:
          return (
            <MinecraftShaderCube
              colors={[
                new THREE.Color("#2F2115"),
                new THREE.Color("#513A2A"),
                new THREE.Color("#563E28"),
                new THREE.Color("#422D1D"),
              ]}
              frequency={frequency()}
              radius={radius}
            />
          );
      }
    },
    [frequency],
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
      <Canvas
        camera={{
          position: [3, 2, 7],
        }}
        className="h-full w-full"
      >
        <React.Suspense fallback={null}>
          <OrbitControls />
          {renderBiom}
        </React.Suspense>
      </Canvas>

      <div className="absolute top-48 w-screen">
        <WorkDetails>
          <div className="flex w-full flex-col items-center gap-2">
            <h3>Minecraft with Shaders</h3>
            <small className="w-1/2 text-center">TODO</small>
            <time dateTime="2023">2023</time>
          </div>
        </WorkDetails>
      </div>
    </div>
  );
};
