import { Bounds } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React from "react";

import {
  PlasmaMaterialOptions,
  PlasmaSurface,
  StarfieldMaterialOptions,
  StarfieldSurface,
} from "@/packages/shader-ui";
import { mergeRefs } from "@/packages/ui-kit";

type Variant = "plasma" | "starfield";

export type ButtonProps<V extends Variant> =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    materialOptions?: V extends "plasma"
      ? PlasmaMaterialOptions
      : StarfieldMaterialOptions;
    size?: "lg" | "md" | "sm" | "xs";
    variant?: Variant;
  };

export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps<Variant>
>(
  (
    {
      children,
      className,
      materialOptions,
      size = "md",
      variant = "plasma",
      ...props
    },
    forwardedRef,
  ) => {
    const ref = React.useRef<HTMLButtonElement>(null);

    const surface = React.useMemo(() => {
      switch (variant) {
        case "plasma":
          return <PlasmaSurface {...materialOptions} />;

        case "starfield":
          return <StarfieldSurface {...materialOptions} />;
      }
    }, [materialOptions, variant]);

    const [rootSize, setRootSize] =
      React.useState<React.CSSProperties>({});

    const calculateStyles = React.useCallback(() => {
      const element = ref.current;

      if (!element) {
        return;
      }

      const { height, width } = element.getBoundingClientRect();

      setRootSize({ height, width });
    }, [ref]);

    React.useEffect(() => {
      calculateStyles();
    }, [calculateStyles]);

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
          className="f-full absolute left-0 top-0 h-full overflow-hidden rounded-full"
          // style={{ border: "1px solid rgba(255, 255, 255, 0.7)" }}
        >
          <Canvas className="f-full h-full" style={{ ...rootSize }}>
            <Bounds clip fit margin={0.23}>
              {surface}
            </Bounds>
          </Canvas>
        </div>
      </div>
    );
  },
);
