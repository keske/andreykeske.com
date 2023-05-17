import {
  Environment,
  MeshDistortMaterial,
  OrbitControls,
  RoundedBox,
  Text,
} from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import clsx from "clsx";
import React from "react";
import * as THREE from "three";

import type { ButtonProps, ButtonRef } from "@/components/Button";

import { Button } from "@/components/Button";
import { useSize, useVector3 } from "@/hooks/index";
import { htmlSizeToMeshSize } from "@/utils/index";

type CommonMeshDistortMaterialProps = {
  distort?: number;
};

const CommonMeshDistortMaterial = React.forwardRef<
  unknown | undefined,
  CommonMeshDistortMaterialProps
>(({ distort = 0.4, ...props }, forwardedRef) => (
  <MeshDistortMaterial
    {...props}
    distort={distort}
    factor={1}
    metalness={1.5}
    ref={forwardedRef}
    roughness={3}
    // TODO: random
    speed={2.5}
  />
));

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

    const [roundedBoxArgs, setRoundedBoxArgs] = useVector3();

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
    }, [
      gl.domElement.offsetHeight,
      gl.domElement.offsetWidth,
      htmlButtonRef,
      setRoundedBoxArgs,
    ]);

    return (
      <RoundedBox
        args={roundedBoxArgs}
        radius={roundedBoxArgs[0] / 5}
        ref={forwardedRef}
        scale={4.5}
      >
        <CommonMeshDistortMaterial />
      </RoundedBox>
    );
  },
);

type DistortTextProps = {
  children: string;
};

const DistortText = React.forwardRef<unknown | undefined, DistortTextProps>(
  ({ children }, forwardedRef) => (
    <Text color="black" position={[0, 0, 3]} ref={forwardedRef}>
      {children}
      <CommonMeshDistortMaterial distort={0.4} />
    </Text>
  ),
);

export type DistortSurfaceProps = Omit<ButtonProps, "children"> &
  Omit<React.HTMLAttributes<HTMLDivElement>, "children"> & {
    children: string;
  };

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
    <div className="cursor-pointer">
      <Button
        {...props}
        className={clsx(className, "absolute left-[-9999px] top-[-9999px]")}
        ref={htmlButtonRef}
      >
        {children}
      </Button>
      <Canvas className={className} style={canvasSize}>
        <Environment preset="sunset" />
        <OrbitControls />
        <DistortPane htmlButtonRef={htmlButtonRef} ref={distorPaneRef} />
        <DistortText>{children}</DistortText>
      </Canvas>
    </div>
  );
});
