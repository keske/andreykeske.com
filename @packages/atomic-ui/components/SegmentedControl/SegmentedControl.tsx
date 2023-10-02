import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Canvas as FiberCanvas } from "@react-three/fiber";
import React from "react";

import { AtomicSurface, AtomicSurfaceProps } from "../AtomicSurface";

import {
  SegmentedControl as UIKitSegmentedControl,
  SegmentedControlProps as UIKitSegmentedControlProps,
} from "@/packages/ui-kit";

export type SegmentedControlProps = UIKitSegmentedControlProps;

export const SegmentedControl = React.forwardRef<
  React.ElementRef<typeof ToggleGroup.Root>,
  SegmentedControlProps
>(({ ...props }, forwardedRef) => (
  <UIKitSegmentedControl
    ref={forwardedRef}
    {...props}
    // indicatorElement={
    //   <FiberCanvas className="h-full w-full rounded-full">
    //     <AtomicSurface />
    //   </FiberCanvas>
    // }
    rootElement={
      <FiberCanvas className="h-full w-full rounded-full">
        <AtomicSurface />
      </FiberCanvas>
    }
  />
));
