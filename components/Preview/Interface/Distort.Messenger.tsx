import {
  Environment,
  MeshDistortMaterial,
  OrbitControls,
  RoundedBox,
  Text,
} from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import React from "react";

/**
 * ---------------------------------------------------------------------
 */

type CommonMeshDistortMaterialProps = {
  color?: string;
  distort?: number;
  speed?: number;
};

const CommonMeshDistortMaterial = React.forwardRef<
  unknown | undefined,
  CommonMeshDistortMaterialProps
>(
  (
    { color = "white", distort = 0.1, speed = 1, ...props },
    forwardedRef,
  ) => (
    <MeshDistortMaterial
      {...props}
      color={color}
      distort={distort}
      factor={1}
      metalness={1.5}
      ref={forwardedRef}
      roughness={3}
      speed={speed}
    />
  ),
);

/**
 * ---------------------------------------------------------------------
 */

export const DistortMessenger: React.FC = () => (
  <div className="flex h-screen w-screen flex-col items-center justify-center gap-20 pb-20 pt-56">
    <div className="flex h-5/6 w-1/3 flex-row">
      <Canvas className="h-full w-full">
        <OrbitControls />
        <Environment preset="sunset" />

        <RoundedBox args={[3.1, 6.8, 1]} scale={0.9}>
          <CommonMeshDistortMaterial distort={0.13} />
        </RoundedBox>

        <group position={[0.8, 2.3, 0]}>
          <RoundedBox
            args={[1, 0.3, 1.7]}
            // position={[0.8, 2.3, 0]}
            radius={0.15}
            scale={0.7}
          >
            <CommonMeshDistortMaterial
              color="blue"
              distort={0.3}
              speed={2}
            />
          </RoundedBox>
          <Text
            // args={[1, 0.3, 1.7]}
            position={[1, 1, 1]}
            // radius={0.15}
            scale={0.7}
          >
            Hiiiiii
            <CommonMeshDistortMaterial
              color="red"
              distort={0.3}
              speed={2}
            />
          </Text>
        </group>
      </Canvas>
    </div>
  </div>
);
