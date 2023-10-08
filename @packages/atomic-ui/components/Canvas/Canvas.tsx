import {
  Canvas as FiberCanvas,
  CanvasProps as FiberCanvasProps,
} from "@react-three/fiber";
import clsx from "clsx";
import React from "react";

import { AtomicSurface, AtomicSurfaceProps } from "../AtomicSurface";

export type CanvasProps = AtomicSurfaceProps &
  Omit<FiberCanvasProps, "children"> & {
    elementRef: React.RefObject<HTMLElement>;
  };

export const Canvas = React.forwardRef<
  HTMLCanvasElement,
  CanvasProps
>(({ className, elementRef, radius, ...props }, forwardedRef) => {
  const [style, setStyle] = React.useState<React.CSSProperties>({});

  const calculateStyles = React.useCallback(() => {
    if (!elementRef || !elementRef.current) {
      return;
    }

    const { height, width } =
      elementRef.current.getBoundingClientRect();

    setStyle({ height, width });
  }, [elementRef]);

  React.useEffect(() => {
    calculateStyles();
  }, [calculateStyles]);

  return (
    <div
      className={clsx(
        "f-full absolute left-0 top-0 z-0 h-full",
        className,
      )}
      style={style}
      {...props}
    >
      <FiberCanvas className="h-full w-full" ref={forwardedRef}>
        <AtomicSurface radius={style?.width} />
      </FiberCanvas>
    </div>
  );
});
