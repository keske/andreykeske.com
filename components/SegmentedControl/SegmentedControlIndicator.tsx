import React from "react";

export type SegmentedControlIndicatorProps = {
  styles: React.CSSProperties;
};

export const SegmentedControlIndicator = React.forwardRef<
  HTMLDivElement,
  SegmentedControlIndicatorProps
>(({ styles, ...props }, forwardedRef) => (
  <div
    className="absolute rounded-xl bg-white transition-all duration-200"
    ref={forwardedRef}
    style={styles}
    {...props}
  />
));
