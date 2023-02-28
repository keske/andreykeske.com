import clsx from "clsx";
import React from "react";

type Props = {
  as?: React.ElementType;
  size?: "lg" | "md" | "sm" | "xl" | "xs" | null;
  variant?: "primary" | "secondary" | "transparent";
};

type AsHTMLButtonElement = Props &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

type AsHTMLAnchorElement = Pick<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "disabled"
> &
  Props &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps<T> = T extends HTMLButtonElement
  ? AsHTMLButtonElement
  : AsHTMLAnchorElement;

export type ButtonRef<T extends HTMLElement> = React.Ref<T>;

export const Button = React.forwardRef(function <T extends HTMLElement>(
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
  ref: ButtonRef<T>,
) {
  return React.createElement(
    as,
    {
      ...(as === "button" && { disabled }),
      className: clsx(
        className,
        "cursor-pointer rounded-full border-none",
        {
          // `variant` states
          "bg-black text-white": variant == "primary",
          "bg-transparent": variant == "transparent",
          "bg-white": variant == "secondary",
        },
        {
          // `size` states
          "p-5 text-lg": size == "lg",
          "py-1 text-xs": size == "xs",
          "py-3 px-5 text-sm": size == "sm",
          "text-md px-5 py-4": size == "md",
        },
        {
          // `anchor` styles
          "pointer-events-none": as === "a" && disabled,
        },
      ),
      ref,
      type,
      ...props,
    },
    children,
  );
});
