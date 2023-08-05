import * as ToggleGroup from "@radix-ui/react-toggle-group";
import clsx from "clsx";
import React from "react";

export type SegmentedControlItemProps =
  ToggleGroup.ToggleGroupItemProps;

export const SegmentedControlItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroup.Item>,
  SegmentedControlItemProps
>(({ children, value, ...toggleGroupItemProps }, forwardedRef) => (
  <ToggleGroup.Item
    className={clsx(
      "relative p-2 text-xs font-black uppercase tracking-widest",
      // `on` state
      // "data-[state=on]:bg-white",
    )}
    ref={forwardedRef}
    value={value}
    {...toggleGroupItemProps}
  >
    {children}
  </ToggleGroup.Item>
));
