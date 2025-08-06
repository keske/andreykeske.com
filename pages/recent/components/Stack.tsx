import clsx from "clsx";
import React from "react";

export type StackRef = HTMLDivElement;

export type StackProps = React.HTMLAttributes<StackRef> & {
  as?: React.ElementType;
  direction?: "column-reverse" | "column" | "row-reverse" | "row";
  gap?: number;
};

export const Stack = React.forwardRef<StackRef, StackProps>(
  (
    {
      as = "div",
      children,
      className,
      direction = "column",
      gap = 2,
      style,
      ...props
    },
    forwardedRef,
  ) =>
    React.createElement(
      as,
      {
        className: clsx(className, "flex", {
          // `direction` states
          "flex-col": direction == "column",
          "flex-col-reverse": direction == "column-reverse",
          "flex-row": direction == "row",
          "flex-row-reverse": direction == "row-reverse",
        }),
        ref: forwardedRef,
        style: { ...style, gap: gap * 2 },
        ...props,
      },
      children,
    ),
);

Stack.displayName = "Stack";
