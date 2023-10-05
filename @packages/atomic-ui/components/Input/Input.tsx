import { Canvas as FiberCanvas } from "@react-three/fiber";
import clsx from "clsx";
import React from "react";

import { AtomicSurface, AtomicSurfaceProps } from "../AtomicSurface";

import { mergeRefs } from "@/packages/ui-kit";

export type InputProps = AtomicSurfaceProps &
  React.InputHTMLAttributes<HTMLInputElement> & {
    size?: "lg" | "md" | "sm" | "xs";
  };

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ children, className, size = "md", ...props }, forwardedRef) => {
    const ref = React.useRef<HTMLInputElement>(null);

    const [style, setStyle] = React.useState<React.CSSProperties>({});

    const calculateStyles = React.useCallback(() => {
      if (!ref.current) {
        return;
      }

      const { height, width } = ref.current.getBoundingClientRect();

      setStyle({ height, width });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref, size]);

    React.useEffect(() => {
      calculateStyles();
    }, [calculateStyles]);

    return (
      <div className="relative">
        <input
          className={clsx(
            className,
            "relative z-10 rounded-full border border-white/10 bg-transparent text-black outline-none",
            {
              // `size` states
              "text-lg px-10 py-5": size == "lg",
              "text-md px-4 py-2": size == "md",
              "text-sm px-6 py-3": size == "sm",
              "text-xs px-4 py-2": size == "xs",
            },
          )}
          ref={forwardedRef}
          {...props}
        />
        <div
          className="f-full absolute left-0 top-0 z-0 h-full opacity-70"
          style={style}
        >
          <FiberCanvas className="h-full w-full">
            <AtomicSurface radius={style?.width} />
          </FiberCanvas>
        </div>
      </div>
    );
  },
);
