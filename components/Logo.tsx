import React from "react";

import { Button } from "./Button";

type LogoProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick: () => void;
};

export const Logo: React.FC<LogoProps> = ({ onClick, ...props }) => (
  <Button
    {...props}
    className="cursor-pointer whitespace-nowrap uppercase"
    onClick={onClick}
    size={null}
    variant="transparent"
  >
    Andrey Keske
  </Button>
);
