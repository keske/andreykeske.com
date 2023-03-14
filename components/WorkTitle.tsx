import { Transition } from "@headlessui/react";
import * as R from "ramda";
import React from "react";

import { useListItems } from "@/stores/index";

export const WorkTitle: React.FC = () => {
  const onUnmount = React.useRef<() => void>();

  const { selectedWorkId, works } = useListItems();

  const title = React.useMemo(
    () =>
      selectedWorkId &&
      works.filter((item) => item.id === selectedWorkId)[0].title,
    [works, selectedWorkId],
  );

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
        <div className="fixed top-9 z-10 flex w-full justify-center">
          <h3 className="text-3xl font-black uppercase text-black dark:text-white">
            {title}
          </h3>
        </div>
      </Transition.Child>
    </Transition>
  );
};
