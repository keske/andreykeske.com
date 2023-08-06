/**
 * Work in Progress
 *
 * PoC of some distorted surface
 */

import {
  Bounds,
  MeshDistortMaterial,
  RoundedBox,
} from "@react-three/drei";
import { Canvas, CanvasProps } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

type BubbleProps = {
  indicatorPositionStyles: React.CSSProperties;
};

const Buble: React.FC<BubbleProps> = ({
  indicatorPositionStyles,
}) => {
  const ref = React.useRef<THREE.Mesh>(null!);

  return (
    <RoundedBox
      args={[
        indicatorPositionStyles.width as number,
        indicatorPositionStyles.height as number,
        indicatorPositionStyles.height as number,
      ]}
      radius={3}
      ref={ref}
    >
      <MeshDistortMaterial
        color="rgba(100, 100, 100, 1)"
        distort={0.3}
        metalness={1.1}
        speed={0.7}
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
    <ambientLight intensity={10.9} />
    <spotLight
      angle={Math.PI / 6}
      intensity={0.1}
      position={[20, 20, 30]}
    />
    <Bounds clip fit margin={0.75}>
      <Buble indicatorPositionStyles={indicatorPositionStyles} />
    </Bounds>
  </Canvas>
));
