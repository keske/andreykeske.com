import clsx from "clsx";
import React from "react";

export type FlexDirection =
  | "col-reverse"
  | "col"
  | "row-reverse"
  | "row";

export type StackProps = React.HTMLAttributes<HTMLDivElement> & {
  direction?: FlexDirection;
  gap?: number;
};

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({
    children,
    className,
    direction = "col",
    gap = 0,
    style,
    ...props
  }) => {
    console.log("style");

    return (
      <div
        {...props}
        style={{ ...style, border: "1px solid red" }}
        // eslint-disable-next-line
        className={clsx(
          className,
          "flex",
          `flex-${direction}`,
          `gap-${gap}`,
        )}
      >
        {children}
      </div>
    );
  },
);
