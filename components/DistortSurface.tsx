import {
  Bounds,
  Environment,
  MeshDistortMaterial,
  OrbitControls,
  RoundedBox,
  useBounds,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import clsx from "clsx";
import React from "react";

import type { ButtonProps, ButtonRef } from "@/components/Button";

import { Button } from "@/components/Button";
import { useSize } from "@/hooks/index";
import { htmlSizeToMeshSize } from "@/utils/index";

type DistortPaneProps = {
  htmlButtonRef: React.RefObject<ButtonRef>;
};

type DistortPaneRef = THREE.Mesh<
  THREE.BufferGeometry,
  THREE.Material | THREE.Material[]
>;

const DistortPane = React.forwardRef<DistortPaneRef, DistortPaneProps>(
  ({ htmlButtonRef }, forwardedRef) => {
    const gl = useThree((state) => state.gl);

    const materialRef = React.useRef<React.Ref<unknown> | undefined>(null!);

    const roundedBoxRef = React.useRef<DistortPaneRef>(null!);

    const [roundedBoxArgs, setRoundedBoxArgs] = React.useState<
      [width: number, height: number, depth: number]
    >([0, 0, 0]);

    // useFrame((state, delta) => {
    //   if (materialRef) {
    //     materialRef.current.distort += delta * 100;
    //   }
    //   // ref.current.rotation.x += delta;
    // });

    React.useEffect(() => {
      if (htmlButtonRef.current) {
        setRoundedBoxArgs(
          htmlSizeToMeshSize(
            htmlButtonRef.current.offsetWidth,
            htmlButtonRef.current.offsetHeight,
            gl.domElement.offsetWidth,
            gl.domElement.offsetHeight,
          ),
        );
      }
    }, [gl.domElement.offsetHeight, gl.domElement.offsetWidth, htmlButtonRef]);

    React.useImperativeHandle(forwardedRef, () => roundedBoxRef.current);

    return (
      <RoundedBox args={roundedBoxArgs} ref={roundedBoxRef} scale={4.3}>
        <MeshDistortMaterial
          distort={0.13}
          factor={1}
          metalness={1.5}
          ref={materialRef}
          roughness={3}
          speed={2.5}
        />
      </RoundedBox>
    );
  },
);

export type DistortSurfaceProps = ButtonProps &
  React.HTMLAttributes<HTMLDivElement>;

export type DistortSurfaceRef = DistortPaneRef;

export const DistortSurface = React.forwardRef<
  DistortSurfaceRef,
  DistortSurfaceProps
>(({ children, className, ...props }, forwardedRef) => {
  const [canvasSize, setCanvasSize] = useSize();

  const distorPaneRef = React.useRef<DistortPaneRef>(null!);

  const htmlButtonRef = React.useRef<ButtonRef>(null)!;

  React.useLayoutEffect(() => {
    if (htmlButtonRef.current) {
      setCanvasSize({
        height: htmlButtonRef.current.offsetHeight,
        width: htmlButtonRef.current.offsetWidth,
      });
    }
  }, [htmlButtonRef, setCanvasSize]);

  React.useImperativeHandle(forwardedRef, () => distorPaneRef.current);

  return (
    <div>
      <Button
        {...props}
        className={clsx(className, "absolute left-[-9999px] top-[-9999px]")}
        ref={htmlButtonRef}
      >
        {children}
      </Button>
      <div className={className} style={canvasSize}>
        <Canvas className="h-full w-full">
          <Environment preset="sunset" />
          <DistortPane htmlButtonRef={htmlButtonRef} ref={distorPaneRef} />
        </Canvas>
      </div>
    </div>
  );
});
