import clsx from "clsx";
import React from "react";

import { Canvas } from "..";

import { AtomicSurfaceProps } from "../AtomicSurface";

import { mergeRefs } from "@/packages/ui-kit";

export type ButtonProps = AtomicSurfaceProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    endIcon?: React.ReactNode;
    size?: "lg" | "md" | "sm" | "xs";
    startIcon?: React.ReactNode;
    variant?:
      | "ghost"
      | "primary"
      | "secondary"
      | "tertiary"
      | "white";
  };

export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      children,
      className,
      endIcon,
      size = "md",
      startIcon,
      variant = "primary",
      ...props
    },
    forwardedRef,
  ) => {
    const ref = React.useRef<HTMLButtonElement>(null);

    console.log("startIcon", startIcon);

    return (
      <div className="relative">
        <button
          className={clsx(
            className,
            "row relative z-10 flex items-center gap-2 rounded-full border border-white/10",
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
          {startIcon}
          {children}
          {endIcon}
        </button>
        <Canvas
          className={clsx({
            // `variant` states
            "opacity-50": variant === "secondary",
            "opacity-70": variant === "primary",
          })}
          elementRef={ref}
        />
      </div>
    );
  },
);
