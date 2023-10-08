import * as RadixSwitch from "@radix-ui/react-switch";
import clsx from "clsx";
import React from "react";

import { Canvas } from "..";

import { AtomicSurfaceProps } from "../AtomicSurface";

import { mergeRefs } from "@/packages/ui-kit";

export type SwitchProps = AtomicSurfaceProps &
  WithLoading & {
    size?: "lg" | "md" | "sm" | "xs";
  };

export const Switch = React.forwardRef<
  React.ElementRef<typeof RadixSwitch.Root>,
  SwitchProps
>(({ className, disabled, loading, ...props }, forwardedRef) => {
  const ref = React.useRef(null);

  return (
    <div className="relative">
      <RadixSwitch.Root
        className="relative z-10 h-[25px] w-[42px] cursor-default overflow-hidden rounded-full border-white outline-none"
        ref={mergeRefs(forwardedRef, ref)}
      >
        <RadixSwitch.Thumb className="block h-[21px] w-[21px] translate-x-0.5 rounded-full bg-white transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]" />
        <Canvas elementRef={ref} />
      </RadixSwitch.Root>
    </div>
  );
});
