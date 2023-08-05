import {
  Bounds,
  Environment,
  Icosahedron,
  MeshDistortMaterial,
  OrbitControls,
  RoundedBox,
} from "@react-three/drei";
import { Canvas, CanvasProps, useFrame } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

type BubbleProps = {
  indicatorPositionStyles: React.CSSProperties;
};

const Buble: React.FC<BubbleProps> = ({
  indicatorPositionStyles,
}) => {
  const ref = React.useRef<THREE.Mesh>(null!);

  console.log("indicatorPositionStyles", indicatorPositionStyles);

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
    <RoundedBox
      args={[
        indicatorPositionStyles.width / 10,
        indicatorPositionStyles.height / 10,
        indicatorPositionStyles.height / 10,
        // 2, 1, 1,
      ]}
      radius={0.1}
      ref={ref}
    >
      <MeshDistortMaterial
        clearcoat={1.1}
        clearcoatRoughness={0.9}
        // color="rgba(0, 0, 0, 1)"
        color="rgba(255, 255, 255, 1)"
        distort={0.5}
        metalness={1.1}
        roughness={0.7}
      />
    </RoundedBox>
  );
};

export type SegmentedControlIndicatorProps = Partial<CanvasProps> & {
  indicatorPositionStyles: React.CSSProperties;
};

export const SegmentedControlIndicator = React.forwardRef<
  HTMLCanvasElement,
  SegmentedControlIndicatorProps
>(({ indicatorPositionStyles, ...canvasProps }, forwardedRef) => (
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
    style={indicatorPositionStyles}
    {...canvasProps}
  >
    <Environment preset="sunset" />
    <OrbitControls />
    <Bounds clip fit margin={1.5}>
      <Buble indicatorPositionStyles={indicatorPositionStyles} />
    </Bounds>
  </Canvas>
));
