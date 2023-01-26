import { Transition } from "@headlessui/react";
import * as R from "ramda";
import React from "react";

import type { Item } from "@/stores/useListItems";

type ItemWithID = Item & { id: string };

type WorkTitleProps = {
  itemsWithId: ItemWithID[];
  selectedCaseId: string | null;
};

export const WorkTitle: React.FC<WorkTitleProps> = ({
  itemsWithId,
  selectedCaseId,
}) => {
  const onUnmount = React.useRef<() => void>();

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
        <div className="fixed top-10 flex w-full justify-center">
          <h3 className="text-4xl">
            {selectedCaseId &&
              itemsWithId.filter((item) => item.id === selectedCaseId)[0].title}
          </h3>
        </div>
      </Transition.Child>
    </Transition>
  );
};
