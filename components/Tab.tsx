import clsx from "clsx";
import React from "react";

import { Button } from "@/components/index";

type TabProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isActive: boolean;
};

export const Tab: React.FC<TabProps> = ({ children, isActive, ...props }) => (
  <Button
    {...props}
    className={clsx(
      "uppercase hover:bg-white",
      isActive ? "bg-white" : "bg-black",
    )}
    size="sm"
    variant="transparent"
  >
    {children}
  </Button>
);
