import React from "react";

import { Button } from "@/components/index";

type LogoProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Logo: React.FC<LogoProps> = ({ ...props }) => (
  <Button
    {...props}
    className="fixed top-10 left-10 z-50 text-lg font-black uppercase tracking-widest text-black dark:text-white"
    size={null}
    variant="transparent"
  >
    Andrey Keske
  </Button>
);
