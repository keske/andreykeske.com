import clsx from "clsx";
import React from "react";

type AsHTMLButtonElement = React.ButtonHTMLAttributes<HTMLButtonElement>;

type AsHTMLAnchorElement = Pick<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "disabled"
> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

type AsElement<T> = T extends "a" ? AsHTMLAnchorElement : AsHTMLButtonElement;

export type ButtonProps<T = HTMLButtonElement> = AsElement<T> & {
  as?: React.ElementType;
  size?: "lg" | "md" | "sm" | "xs" | null;
  variant?: "primary" | "secondary" | "transparent";
};

export type ButtonRef<T = "button"> = T extends "a"
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
            "text-lg px-6 py-3": size == "lg",
            "text-md px-5 py-3": size == "md",
            "text-sm px-4 py-2": size == "sm",
            "text-xs px-2 py-1": size == "xs",
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
