import { animated, config, useTransition } from "@react-spring/web";
import clsx from "clsx";
import React from "react";

import { Button, ButtonProps } from "@/packages/ui-kit";

type CloseButtonProps = ButtonProps<HTMLButtonElement> & {
  isShowing: boolean;
  onClick: () => void;
};

export const CloseButton: React.FC<CloseButtonProps> = ({
  isShowing,
  onClick,
  ...props
}) => {
  const transitions = useTransition(isShowing, {
    config: config.stiff,
    enter: { opacity: 1 },
    from: { opacity: 0 },
    leave: { opacity: 0 },
  });

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

  return transitions((styles, item) =>
    item ? (
      <animated.div
        style={{
          opacity: styles.opacity,
        }}
      >
        <Button
          {...props}
          className={clsx(
            "fixed right-7 top-7 z-50 p-3 font-black text-black dark:text-white",
          )}
          onClick={onClick}
          size={null}
          variant="transparent"
        >
          ⛌
        </Button>
      </animated.div>
    ) : null,
  );
};
