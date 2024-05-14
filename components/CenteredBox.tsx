import clsx from "clsx";
import React from "react";

import { Stack } from "@/components/index";

export type CenteredBoxRef = HTMLDivElement;

export type CenteredBoxProps = React.HTMLAttributes<CenteredBoxRef>;

export const CenteredBox = React.forwardRef<
  CenteredBoxRef,
  CenteredBoxProps
>(({ children, className, ...props }, forwardedRef) => (
  <Stack
    className={clsx(className, "items-center justify-center")}
    ref={forwardedRef}
    {...props}
  >
    {children}
  </Stack>
));

CenteredBox.displayName = "CenteredBox";
