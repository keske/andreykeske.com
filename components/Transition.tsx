import { Transition as HUTransition } from "@headlessui/react";
import React from "react";

type TransitionProps = React.PropsWithChildren;

export const Transition: React.FC<TransitionProps> = ({
  children,
  ...props
}) => {
  const onUnmount = React.useRef<() => void>();

  return (
    <HUTransition
      {...props}
      afterLeave={() => onUnmount.current?.()}
      as={React.Fragment}
    >
      <HUTransition.Child
        as={React.Fragment}
        enter="ease-out duration-700"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {children}
      </HUTransition.Child>
    </HUTransition>
  );
};
