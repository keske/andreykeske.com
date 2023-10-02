import { Canvas as FiberCanvas } from "@react-three/fiber";
import clsx from "clsx";
import React from "react";

import { AtomicSurface, AtomicSurfaceProps } from "../AtomicSurface";

import { mergeRefs } from "@/packages/ui-kit";

export type ViewProps = AtomicSurfaceProps &
  React.ButtonHTMLAttributes<HTMLDivElement>;

export const View = React.forwardRef<HTMLDivElement, ViewProps>(
  ({ children, className, ...props }, forwardedRef) => {
    const ref = React.useRef<HTMLDivElement>(null);

    const [style, setStyle] = React.useState<React.CSSProperties>({});

    const calculateStyles = React.useCallback(() => {
      if (!ref.current) {
        return;
      }

      const { height, width } = ref.current.getBoundingClientRect();

      setStyle({ height, width });
    }, [ref]);

    React.useEffect(() => {
      calculateStyles();
    }, [calculateStyles]);

    return (
      <div className="relative">
        <div
          className={clsx(
            className,
            "relative z-10 overflow-hidden rounded-lg border border-white/10",
          )}
          ref={mergeRefs(forwardedRef, ref)}
          {...props}
        >
          {children}
        </div>
        <div
          className="f-full absolute left-0 top-0 z-0 h-full opacity-70"
          style={style}
        >
          <FiberCanvas className="h-full w-full">
            <AtomicSurface density={9000} radius={style.width} />
          </FiberCanvas>
        </div>
      </div>
    );
  },
);
