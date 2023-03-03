import { Transition } from "@headlessui/react";
import clsx from "clsx";
import * as R from "ramda";
import React from "react";

import { useHeader, useListItems } from "@/stores/index";

export const WorkTitle: React.FC = () => {
  const onUnmount = React.useRef<() => void>();

  const { scheme } = useHeader();

  const { items, selectedCaseId } = useListItems();

  const title = React.useMemo(
    () =>
      selectedCaseId &&
      items.filter((item) => item.id === selectedCaseId)[0].title,
    [items, selectedCaseId],
  );

  return (
    <Transition
      afterLeave={() => onUnmount.current?.()}
      appear
      as={React.Fragment}
      show={R.not(R.isNil(selectedCaseId))}
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
          <div className={clsx("uppercase", `text-${scheme.text}`)}>
            <h3 className="text-3xl font-black">{title}</h3>
          </div>
        </div>
      </Transition.Child>
    </Transition>
  );
};
