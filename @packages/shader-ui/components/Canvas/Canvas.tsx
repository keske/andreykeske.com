import { Bounds } from "@react-three/drei";
import {
  Canvas as FiberCanvas,
  CanvasProps as FiberCanvasProps,
} from "@react-three/fiber";
import clsx from "clsx";
import React from "react";

export type CanvasProps = FiberCanvasProps;

export const Canvas = React.forwardRef<
  HTMLCanvasElement,
  CanvasProps
>(({ children, className, ...props }, forwardedRef) => (
  <FiberCanvas
    className={clsx(className)}
    ref={forwardedRef}
    {...props}
  >
    <Bounds clip fit margin={0.23}>
      {children}
    </Bounds>
  </FiberCanvas>
));
