import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import SimplexNoise from "simplex-noise";
import * as THREE from "three";

import { MinecraftShaderCube } from "./MinecraftShader.Cube";

import { WorkDetails } from "@/components";

export const MinecraftShaders: React.FC = () => {
  const radius = 10;

  const biomSize = 70;

  const biom = React.useMemo(() => {
    const gen = new SimplexNoise();

    function noise(nx: number, ny: number): number {
      return gen.noise2D(nx, ny);
    }

    const value = [];

    for (let y = -biomSize; y < biomSize; y++) {
      value[y] = [];
      for (let x = -biomSize; x < biomSize; x++) {
        const nx = x / biomSize - 0.5;

        const ny = y / biomSize - 0.5;

        // @ts-expect-error wip
        value[y][x] = noise(nx, ny).toFixed(1) * 10;
      }
    }

    return value;
  }, [biomSize]);

  const renderBlockDependsOnElevation = React.useCallback(
    (elevation: number) => {
      switch (true) {
        // Water
        case elevation < -5:
          return (
            <MinecraftShaderCube
              colors={[
                new THREE.Color("#000"),
                new THREE.Color("blue"),
                new THREE.Color("aqua"),
                new THREE.Color("purple"),
              ]}
              frequency={{ x: 100.0, y: 300.0, z: 100.0 }}
              radius={radius}
            />
          );

        // Sand
        case elevation < -2:
          return (
            <MinecraftShaderCube
              colors={[
                new THREE.Color("#000"),
                new THREE.Color("yellow"),
                new THREE.Color("red"),
                new THREE.Color("green"),
              ]}
              frequency={{ x: 100.0, y: 300.0, z: 100.0 }}
              radius={radius}
            />
          );

        // Stone
        case elevation < 2:
          return (
            <MinecraftShaderCube
              colors={[
                new THREE.Color("#000"),
                new THREE.Color("gray"),
              ]}
              frequency={{ x: 100.0, y: 300.0, z: 100.0 }}
              radius={radius}
            />
          );

        // Dirt
        case elevation < 9:
          return (
            <MinecraftShaderCube
              colors={[
                new THREE.Color("#000"),
                new THREE.Color("brown"),
              ]}
              frequency={{ x: 100.0, y: 300.0, z: 100.0 }}
              radius={radius}
            />
          );
      }
    },
    [radius],
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
