import clsx from "clsx";
import React from "react";

import { Button } from "@/components/index";
import { useHeader } from "@/stores/index";

type LogoProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Logo: React.FC<LogoProps> = ({ ...props }) => {
  const { scheme } = useHeader();

  return (
    <Button
      {...props}
      className={clsx("whitespace-nowrap uppercase", `text-${scheme.text}`)}
      size={null}
      variant="transparent"
    >
      Andrey Keske
    </Button>
  );
};
