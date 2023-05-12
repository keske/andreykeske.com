import { Transition } from "@headlessui/react";
import * as R from "ramda";
import React from "react";

import { useListItems } from "@/stores/index";

type WorkDetailsProps = React.PropsWithChildren;

export const WorkDetails: React.FC<WorkDetailsProps> = ({ children }) => {
  const onUnmount = React.useRef<() => void>();

  const { selectedWorkId } = useListItems();

  if (R.isNil(selectedWorkId)) {
    return <></>;
  }

  return (
    <Transition
      afterLeave={() => onUnmount.current?.()}
      appear
      as={React.Fragment}
      show={R.not(R.isNil(selectedWorkId))}
    >
      <Transition.Child
        as={React.Fragment}
        enter="ease-out duration-700"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {children}
      </Transition.Child>
    </Transition>
  );
};
