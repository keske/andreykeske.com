import clsx from "clsx";
import React from "react";

type Sizes = "lg" | "md" | "sm" | "xs";
type Variants = "primary" | "secondary" | "transparent";

type OwnProps<T extends React.ElementType> = {
  as?: T;
  disabled?: boolean;
  size?: Sizes | null;
  variant?: Variants;
};

type PropsOf<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T>;

type PolymorphicRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>["ref"];

type PolymorphicProps<T extends React.ElementType> = OwnProps<T> &
  Omit<PropsOf<T>, keyof OwnProps<T>>;

const sizeCls: Record<Exclude<Sizes, null>, string> = {
  lg: "text-lg px-6 py-3",
  md: "text-md px-5 py-3",
  sm: "text-sm px-4 py-2",
  xs: "text-xs px-2 py-1",
};

const variantCls: Record<Variants, string> = {
  primary: "bg-black text-white dark:bg-white dark:text-black",
  secondary: "bg-white text-black dark:bg-black dark:text-white",
  transparent: "bg-transparent",
};

export type ButtonProps<T extends React.ElementType = "button"> =
  PolymorphicProps<T>;

export type ButtonRef<T extends React.ElementType = "button"> =
  PolymorphicRef<T>;

export const Button = React.forwardRef(
  <T extends React.ElementType = "button">(
    {
      as,
      children,
      className,
      disabled = false,
      onClick,
      size = "md",
      variant = "primary",
      ...rest
    }: ButtonProps<T>,
    ref: ButtonRef<T>,
  ) => {
    const Component = (as || "button") as React.ElementType;

    const isButton = Component === "button";

    const handleClick: React.MouseEventHandler<any> = (e) => {
      if (!isButton && disabled) {
        e.preventDefault();
        e.stopPropagation();

        return;
      }

      onClick?.(e);
    };

    return (
      <Component
        ref={ref}
        {...(isButton
          ? { disabled, type: (rest as any).type ?? "button" }
          : {
              "aria-disabled": disabled || undefined,
              tabIndex: disabled ? -1 : (rest as any).tabIndex,
            })}
        className={clsx(
          "inline-flex items-center justify-center rounded-full border-none transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "select-none",
          className,
          disabled
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer",
          size && sizeCls[size],
          variantCls[variant],
          !isButton && disabled ? "pointer-events-none" : null,
        )}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);
