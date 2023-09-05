import { Bounds } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React from "react";

import {
  PlasmaMaterialOptions,
  PlasmaRoundedBox,
} from "@/packages/shader-ui";
import { mergeRefs } from "@/packages/ui-kit";

export type PlasmaButtonProps = PlasmaMaterialOptions &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: "lg" | "md" | "sm" | "xs";
  };

export const PlasmaButton = React.forwardRef<
  HTMLButtonElement,
  PlasmaButtonProps
>(({ children, className, size = "md", ...props }, forwardedRef) => {
  const ref = React.useRef<HTMLButtonElement>(null);

  const [rootStyles, setRootStyles] =
    React.useState<React.CSSProperties>({});

  const calculateIndicatorStyles = React.useCallback(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const rect = element.getBoundingClientRect();

    setRootStyles({
      height: rect.height,
      left: element.offsetLeft,
      top: element.offsetTop,
      width: rect.width,
    });
  }, [ref]);

  React.useEffect(() => {
    calculateIndicatorStyles();
  }, [calculateIndicatorStyles]);

  return (
    <div
      className={clsx("relative", {
        // `size` states
        "-translate-x-0.5": size == "xs",
        "-translate-x-2": size == "sm",
        "-translate-x-3": size == "md",
        "-translate-x-4": size == "lg",
      })}
    >
      <button
        className={clsx(
          className,
          "relative z-10",
          "font-medium leading-none text-white",
          {
            // `size` states
            "text-lg px-8 py-4": size == "lg",
            "text-md px-6 py-3": size == "md",
            "text-sm px-4 py-2": size == "sm",
            "text-xs px-4 py-1": size == "xs",
          },
        )}
        ref={mergeRefs(forwardedRef, ref)}
        {...props}
      >
        {children}
      </button>
      <div className="f-full absolute left-0 top-0 h-full overflow-hidden rounded-full">
        <Canvas className="f-full h-full" style={rootStyles}>
          <Bounds clip fit margin={0.23}>
            <PlasmaRoundedBox />
          </Bounds>
        </Canvas>
      </div>
    </div>
  );
});
