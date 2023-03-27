import clsx from "clsx";
import React from "react";

type AsHTMLButtonElement = React.ButtonHTMLAttributes<HTMLButtonElement>;

type AsHTMLAnchorElement = Pick<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "disabled"
> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

type AsElement<T> = T extends "a" ? AsHTMLAnchorElement : AsHTMLButtonElement;

export type ButtonProps<T> = AsElement<T> & {
  as?: React.ElementType;
  size?: "lg" | "md" | "sm" | "xl" | "xs" | null;
  variant?: "primary" | "secondary" | "transparent";
};

export type ButtonRef<T> = T extends "a"
  ? HTMLAnchorElement
  : HTMLButtonElement;

export const Button = React.forwardRef(
  <T extends React.ElementType>(
    {
      as = "button",
      children,
      className,
      disabled = false,
      size = "md",
      type = "button",
      variant = "primary",
      ...props
    }: ButtonProps<T>,
    ref: React.ForwardedRef<ButtonRef<T>>,
  ) =>
    React.createElement(
      as,
      {
        ...(as === "button" && { disabled }),
        className: clsx(
          className,
          "monospace cursor-pointer rounded-full border-none duration-100",
          {
            // `variant` states
            "bg-black text-white dark:bg-white dark:text-black dark:bg-white":
              variant == "primary",
            "bg-transparent": variant == "transparent",
            "bg-white text-black dark:bg-black dark:text-white":
              variant == "secondary",
          },
          {
            // `size` states
            "p-5 text-lg": size == "lg",
            "py-1 px-3 text-xs": size == "xs",
            "py-3 px-5 text-sm": size == "sm",
            "text-md px-5 py-4": size == "md",
          },
          {
            // `anchor` styles
            "inline-block": as === "a",
            "pointer-events-none": as === "a" && disabled,
          },
          {
            // `disabled` styles
            "opacity-50": disabled,
          },
        ),
        ref,
        type,
        ...props,
      },
      children,
    ),
);
