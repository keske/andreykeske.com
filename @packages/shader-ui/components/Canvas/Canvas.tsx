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
>(({ children, className, ...props }, forwardedRef) => {
  const ref = React.useRef<HTMLButtonElement>(null);

  const [rootSize, setRootSize] = React.useState<React.CSSProperties>(
    {},
  );

  const calculateStyles = React.useCallback(() => {
    if (!ref.current) {
      return;
    }

    const { height, width } = ref.current.getBoundingClientRect();

    setRootSize({ height, width });
  }, [ref]);

  React.useEffect(() => {
    calculateStyles();
  }, [calculateStyles]);

  return (
    <FiberCanvas
      className={clsx(className)}
      ref={forwardedRef}
      style={rootSize}
      {...props}
    >
      <Bounds clip fit margin={0.23}>
        {children}
      </Bounds>
    </FiberCanvas>
  );
});
