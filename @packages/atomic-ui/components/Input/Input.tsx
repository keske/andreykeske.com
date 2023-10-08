import clsx from "clsx";
import React from "react";

import { Canvas } from "..";

import { AtomicSurfaceProps } from "../AtomicSurface";

import { mergeRefs } from "@/packages/ui-kit";

export type InputProps = AtomicSurfaceProps &
  React.InputHTMLAttributes<HTMLInputElement> & {
    endAdornment?: React.ReactNode;
    size?: "lg" | "md" | "sm" | "xs";
    startAdornment?: React.ReactNode;
  };

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      children,
      className,
      disabled,
      endAdornment,
      size = "md",
      startAdornment,
      ...props
    },
    forwardedRef,
  ) => {
    const ref = React.useRef<HTMLInputElement>(null);

    return (
      <div className="relative">
        <input
          className={clsx(
            className,
            "relative z-10 rounded-full border border-white/10 bg-transparent text-black outline-none focus:border-white/30",
            {
              // `size` states
              "text-lg px-10 py-5": size == "lg",
              "text-md px-4 py-2": size == "md",
              "text-sm px-6 py-3": size == "sm",
              "text-xs px-4 py-2": size == "xs",
            },
          )}
          ref={mergeRefs(forwardedRef, ref)}
          {...props}
        />
        <Canvas className="opacity-70" elementRef={ref} />
      </div>
    );
  },
);
