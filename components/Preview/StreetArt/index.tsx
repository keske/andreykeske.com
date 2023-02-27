import { Transition } from "@headlessui/react";
import * as R from "ramda";
import React from "react";

import { Graffiti } from "./Graffiti";
import { Installations } from "./Installations";
import { Stickers } from "./Stickers";

import { useTabs } from "@/hooks/index";
import { useListItems } from "@/stores/index";

export const StreetArt: React.FC = () => {
  const onUnmount = React.useRef<() => void>();

  const { renderTabs, renderTabsBody } = useTabs();

  const { selectedCaseId } = useListItems();

  return (
    <div className="py-80">
      {renderTabsBody([<Graffiti />, <Installations />, <Stickers />])}
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
          <div className="fixed top-40 flex w-screen flex-row items-center justify-center gap-10">
            {renderTabs(["Graffiti", "Installations", "Stickers"])}
          </div>
        </Transition.Child>
      </Transition>
    </div>
  );
};
