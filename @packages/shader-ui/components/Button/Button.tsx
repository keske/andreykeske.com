import { Bounds } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React from "react";

import {
  NoiseMaterialOptions,
  NoiseSurface,
  PlasmaMaterialOptions,
  PlasmaSurface,
  StarfieldMaterialOptions,
  StarfieldSurface,
} from "@/packages/shader-ui";
import { mergeRefs } from "@/packages/ui-kit";

type Shader = "noise" | "plasma" | "starfield";

export type ButtonProps<S extends Shader> =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    materialOptions?: S extends "plasma"
      ? PlasmaMaterialOptions
      : S extends "starfield"
      ? StarfieldMaterialOptions
      : NoiseMaterialOptions;
    shader?: Shader;
    size?: "lg" | "md" | "sm" | "xs";
  };

export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps<Shader>
>(
  (
    {
      children,
      className,
      materialOptions,
      shader = "plasma",
      size = "md",
      ...props
    },
    forwardedRef,
  ) => {
    const ref = React.useRef<HTMLButtonElement>(null);

    const surface = React.useMemo(() => {
      switch (shader) {
        case "noise":
          return <NoiseSurface {...materialOptions} />;

        case "plasma":
          return <PlasmaSurface {...materialOptions} />;

        case "starfield":
          return <StarfieldSurface {...materialOptions} />;
      }
    }, [materialOptions, shader]);

    const [rootSize, setRootSize] =
      React.useState<React.CSSProperties>({});

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
      <div className="absolute">
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
        <div className="f-full absolute left-0 top-0 h-full overflow-hidden rounded-full">
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
