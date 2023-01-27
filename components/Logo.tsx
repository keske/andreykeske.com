import clsx from "clsx";
import React from "react";

import { Button } from "@/components/index";
import { useHeader } from "@/stores/index";

type LogoProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick: () => void;
};

export const Logo: React.FC<LogoProps> = ({ onClick, ...props }) => {
  const { textColor } = useHeader();

  return (
    <Button
      {...props}
      className={clsx("cursor-pointer whitespace-nowrap uppercase", textColor)}
      onClick={onClick}
      size={null}
      variant="transparent"
    >
      Andrey Keske
    </Button>
  );
};
