import React from "react";

import { ResponsiveTextWrapper } from "./ResponsiveTextWrapper";
import { Stack, StackProps } from "./Stack";
import { Text } from "./Text";
import { Years } from "./Years";

export const WorkDescription = React.forwardRef<
  HTMLDivElement,
  StackProps & {
    description: React.ReactNode;
    techStack?: string[];
    years: string;
  }
>(
  (
    { children, description, techStack, years, ...props },
    forwardedRef,
  ) => (
    <Stack gap={16} ref={forwardedRef} {...props}>
      <Years>{years}</Years>
      <ResponsiveTextWrapper gap={10}>
        {description}
      </ResponsiveTextWrapper>
      <Text variant="headline">Stack: {techStack?.join(", ")}</Text>
      {children}
    </Stack>
  ),
);
