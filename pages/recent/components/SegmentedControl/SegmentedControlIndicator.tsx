import React from "react";

export type SegmentedControlIndicatorRef = HTMLDivElement;

export type SegmentedControlIndicatorProps = {
  style?: React.CSSProperties;
};

export const SegmentedControlIndicator = React.forwardRef<
  SegmentedControlIndicatorRef,
  SegmentedControlIndicatorProps
>((props, forwardedRef) => (
  <div
    className="absolute rounded-[14px] bg-white transition-all duration-200"
    ref={forwardedRef}
    {...props}
  />
));

SegmentedControlIndicator.displayName = "SegmentedControlIndicator";
