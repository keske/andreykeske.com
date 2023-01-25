import clsx from "clsx";
import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: React.ElementType;
  size?: "lg" | "md" | "sm" | "xl" | "xs" | null;
  variant?: "primary" | "secondary" | "transparent";
};

export type ButtonRef =
  | HTMLButtonElement
  | HTMLDivElement
  | HTMLLinkElement
  | HTMLSpanElement;

export const Button = React.forwardRef<ButtonRef, ButtonProps>(
  (
    {
      as = "button",
      children,
      className,
      disabled = false,
      size = "md",
      type = "button",
      variant = "primary",
      ...props
    },
    ref,
  ) =>
    React.createElement(
      as,
      {
        className: clsx(
          className,
          "cursor-pointer rounded-full border-none font-bold",
          {
            // variant states
            "bg-black": variant == "secondary",
            "bg-transparent": variant == "transparent",
            "bg-white": variant == "primary",

            // size states
            "p-1 text-xs": size == "xs",
            "p-3 text-sm": size == "sm",
            "p-5 text-lg": size == "lg",
            "text-md p-4": size == "md",
          },
        ),
        disabled,
        ref,
        type,
        ...props,
      },
      children,
    ),
);
