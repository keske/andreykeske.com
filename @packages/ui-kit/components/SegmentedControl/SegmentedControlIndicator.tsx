import React from "react";

export type SegmentedControlIndicatorProps = {
  style?: React.CSSProperties;
};

export const SegmentedControlIndicator = React.forwardRef<
  HTMLDivElement,
  SegmentedControlIndicatorProps
>((props, forwardedRef) => (
  <div
    className="absolute rounded-2xl bg-white transition-all duration-200"
    ref={forwardedRef}
    {...props}
  />
));
