import React from "react";

import { Stack, StackProps } from "./Stack";

export const ResponsiveTextWrapper = React.forwardRef<
  HTMLDivElement,
  StackProps
>(({ children, ...props }, forwardedRef) => (
  <Stack
    className="xl:w-10/12 2xl:w-6/12"
    ref={forwardedRef}
    {...props}
  >
    {children}
  </Stack>
));
