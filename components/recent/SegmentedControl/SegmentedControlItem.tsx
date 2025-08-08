import * as ToggleGroup from "@radix-ui/react-toggle-group";
import clsx from "clsx";
import React from "react";

export type SegmentedControlItemRef = typeof ToggleGroup.Item;

export type SegmentedControlItemProps =
  ToggleGroup.ToggleGroupItemProps;

export const SegmentedControlItem = React.forwardRef<
  React.ElementRef<SegmentedControlItemRef>,
  SegmentedControlItemProps
>(({ children, className, value, ...props }, forwardedRef) => (
  <ToggleGroup.Item
    className={clsx(
      "relative p-2 px-4 font-mono text-sm text-black",
      // `on` state
      "data-[state=on]:text-black",
      className,
    )}
    ref={forwardedRef}
    value={value}
    {...props}
  >
    {children}
  </ToggleGroup.Item>
));

SegmentedControlItem.displayName = "SegmentedControlItem";
