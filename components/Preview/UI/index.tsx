import { Transition } from "@headlessui/react";
import * as R from "ramda";
import React from "react";

import { Cloth } from "./Cloth";
import { DistortingMirrors } from "./DistortingMirrors";
import { EsherSwitchButton } from "./EsherSwitchButton";
import { MandelbrotSet } from "./MandelbrotSet";
import { SoftVideoPlayer } from "./SoftVideoPlayer";

import { useTabs } from "@/hooks/index";
import { useListItems } from "@/stores/index";

export const UI: React.FC = () => {
  const onUnmount = React.useRef<() => void>();

  const { renderTabs, renderTabsBody } = useTabs();

  const { selectedCaseId } = useListItems();

  return (
    <div className="">
      {renderTabsBody([
        <Cloth />,
        <DistortingMirrors />,
        <EsherSwitchButton />,
        <MandelbrotSet />,
        <SoftVideoPlayer />,
      ])}
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
            {renderTabs([
              "Cloth",
              "Distorting Mirrors",
              "Esher's Switch Button",
              "Mandelbrot's Set",
              "Soft Video Player",
            ])}
          </div>
        </Transition.Child>
      </Transition>
    </div>
  );
};
