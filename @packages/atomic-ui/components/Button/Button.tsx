import { Canvas as FiberCanvas } from "@react-three/fiber";
import clsx from "clsx";
import React from "react";

import { AtomicSurface, AtomicSurfaceProps } from "../AtomicSurface";

import { mergeRefs } from "@/packages/ui-kit";

export type ButtonProps = AtomicSurfaceProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: "lg" | "md" | "sm" | "xs";
  };

export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ children, className, size = "md", ...props }, forwardedRef) => {
  const ref = React.useRef<HTMLButtonElement>(null);

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
      <button
        className={clsx(
          className,
          "relative z-10",
          "font-medium leading-none text-white",
          {
            // `size` states
            "text-lg px-10 py-5": size == "lg",
            "text-md px-8 py-4": size == "md",
            "text-sm px-6 py-3": size == "sm",
            "text-xs px-4 py-2": size == "xs",
          },
        )}
        ref={mergeRefs(forwardedRef, ref)}
        {...props}
      >
        {children}
      </button>
      <div
        className="f-full absolute left-0 top-0 z-0 h-full overflow-hidden rounded-full opacity-70"
        style={style}
      >
        <FiberCanvas className="h-full w-full">
          <AtomicSurface radius={style?.width} />
        </FiberCanvas>
      </div>
    </div>
  );
});
