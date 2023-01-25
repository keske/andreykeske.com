import React from "react";

import { Button } from "./Button";

type CloseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isShowing: boolean;
  onClick: () => void;
};

export const CloseButton = React.forwardRef<
  HTMLButtonElement,
  CloseButtonProps
>(({ isShowing, onClick, ...props }, ref) => {
  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClick();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClick]);

  if (!isShowing) {
    return null;
  }

  return (
    <Button
      {...props}
      className="fixed top-10 right-10 cursor-pointer uppercase"
      onClick={onClick}
      ref={ref}
      size={null}
      variant="transparent"
    >
      Close
    </Button>
  );
});
