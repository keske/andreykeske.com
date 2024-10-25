import React from "react";

import { Button } from "@/components/index";

type LogoProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Logo: React.FC<LogoProps> = ({ ...props }) => (
  <Button
    {...props}
    className="fixed left-10 top-10 z-50 text-lg font-black uppercase tracking-widest text-white hover:opacity-90"
    size={null}
    variant="transparent"
  >
    Andrey Keske
  </Button>
);
