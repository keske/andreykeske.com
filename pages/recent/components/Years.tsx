import React from "react";

import { Text, TextProps } from "./Text";

export const Years = React.forwardRef<HTMLDivElement, TextProps>(
  ({ children, ...props }, forwardedRef) => (
    <Text
      className="self-start rounded-lg border-[1.7px] border-black/50 px-2 text-sm font-bold"
      ref={forwardedRef}
      {...props}
    >
      {children}
    </Text>
  ),
);
