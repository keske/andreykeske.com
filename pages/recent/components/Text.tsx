import clsx from "clsx";
import React from "react";

type TextColor = "primary" | "secondary";

type TextVariant = "body" | "headline" | "title";

export type TextRef = HTMLDivElement;

export type TextProps = Pick<
  React.HTMLAttributes<TextRef>,
  "children" | "className" | "style"
> & {
  as?: React.ElementType;
  color?: TextColor;
  variant?: TextVariant;
};

export const Text = React.forwardRef<TextRef, TextProps>(
  (
    { as, className, color = "primary", variant = "body", ...props },
    forwardedRef,
  ) =>
    React.createElement(
      as || "div",
      {
        ...props,
        className: clsx(
          className,
          "font-mono",
          {
            // `color` states
            "text-black": color == "primary",
            "text-white": color == "secondary",
          },
          {
            // `variant` states
            "text-2xl": variant == "title",
            "text-md": variant == "body",
            "text-sm": variant == "headline",
          },
        ),
        ref: forwardedRef,
      },
      props.children,
    ),
);

Text.displayName = "Text";
