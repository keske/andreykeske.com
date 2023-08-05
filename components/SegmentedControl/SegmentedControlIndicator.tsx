import {
  Environment,
  Icosahedron,
  MeshDistortMaterial,
} from "@react-three/drei";
import { Canvas, CanvasProps, useFrame } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

const Buble = () => {
  const ref = React.useRef<THREE.Mesh>(null!);

  useFrame(({ mouse }) => {
    const node = ref.current;

    if (node) {
      node.rotation.y = THREE.MathUtils.lerp(
        node.rotation.y,
        mouse.x / Math.PI,
        0.01,
      );

      node.rotation.x = THREE.MathUtils.lerp(
        node.rotation.x,
        mouse.y * Math.PI,
        0.01,
      );
    }
  });

  return (
    <Icosahedron args={[1, 12]} position={[0, 0, 0]} ref={ref}>
      <MeshDistortMaterial
        clearcoat={1.1}
        clearcoatRoughness={0.9}
        // color="rgba(0, 0, 0, 1)"
        color="rgba(255, 255, 255, 1)"
        distort={0.3}
        metalness={1.1}
        radius={2.3}
        roughness={0.7}
      />
    </Icosahedron>
  );
};

export type SegmentedControlIndicatorProps = Partial<CanvasProps>;

export const SegmentedControlIndicator = React.forwardRef<
  HTMLCanvasElement,
  SegmentedControlIndicatorProps
>(({ ...canvasProps }, forwardedRef) => (
  <Canvas
    className="h-full w-full"
    gl={{
      alpha: true,
      antialias: true,
      depth: false,
      powerPreference: "high-performance",
      stencil: false,
    }}
    ref={forwardedRef}
    {...canvasProps}
  >
    <Environment preset="sunset" />
    <Buble />
  </Canvas>
));
