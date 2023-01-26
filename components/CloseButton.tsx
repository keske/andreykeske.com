import { Transition } from "@headlessui/react";
import clsx from "clsx";
import React from "react";

import { Button, ButtonRef } from "./Button";

type CloseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isShowing: boolean;
  onClick: () => void;
};

export const CloseButton = React.forwardRef<ButtonRef, CloseButtonProps>(
  ({ isShowing, onClick, ...props }, ref) => {
    const onUnmount = React.useRef<() => void>();

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

    return (
      <Transition
        afterLeave={() => onUnmount.current?.()}
        appear
        as={React.Fragment}
        show={isShowing}
      >
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Button
            {...props}
            className={clsx(
              isShowing ? "cursor-pointer opacity-100" : "opacity-0",
            )}
            onClick={onClick}
            ref={ref}
            size={null}
            variant="transparent"
          >
            Close
          </Button>
        </Transition.Child>
      </Transition>
    );
  },
);
