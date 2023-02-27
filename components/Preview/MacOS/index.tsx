import { Transition } from "@headlessui/react";
import * as R from "ramda";
import React from "react";

import { Dock } from "./Dock";
import { Finder } from "./Finder";
import { Terminal } from "./Terminal";

import { useTabs } from "@/hooks/index";
import { useListItems } from "@/stores/index";

export const MacOS: React.FC = () => {
  const onUnmount = React.useRef<() => void>();

  const { renderTabs, renderTabsBody } = useTabs();

  const { selectedCaseId } = useListItems();

  return (
    <div className="py-80">
      {renderTabsBody([<Dock />, <Finder />, <Terminal />])}
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
            {renderTabs(["Dock", "Finder", "Terminal"])}
          </div>
        </Transition.Child>
      </Transition>
    </div>
  );
};
