import { Transition } from "@headlessui/react";
import clsx from "clsx";
import React from "react";

import type { ButtonProps } from "@/components/index";

import { Button } from "@/components/index";

type CloseButtonProps = ButtonProps<HTMLButtonElement> & {
  isShowing: boolean;
  onClick: () => void;
};

export const CloseButton: React.FC<CloseButtonProps> = ({
  isShowing,
  onClick,
  ...props
}) => {
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
            "fixed right-7 top-7 z-50 p-3 font-black text-black hover:opacity-80 dark:text-white",
            isShowing ? "opacity-100" : "opacity-0",
          )}
          onClick={onClick}
          size={null}
          variant="transparent"
        >
          ⛌
        </Button>
      </Transition.Child>
    </Transition>
  );
};
