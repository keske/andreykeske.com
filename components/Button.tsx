import clsx from "clsx";
import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  (React.LinkHTMLAttributes<HTMLLinkElement> & {
    as?: React.ElementType;
    size?: "lg" | "md" | "sm" | "xl" | "xs" | null;
    variant?: "primary" | "secondary" | "transparent";
  });

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
            /**
             * Variant states
             */
            "bg-black text-white": variant == "primary",
            "bg-transparent": variant == "transparent",
            "bg-white": variant == "secondary",

            /**
             * Size states
             */
            "p-5 text-lg": size == "lg",
            "py-1 text-xs": size == "xs",
            "py-2 px-3 text-sm": size == "sm",
            "text-md px-5 py-4": size == "md",
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
