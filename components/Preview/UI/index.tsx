import React from "react";

import { Bubble } from "./Bubble";
import { Cloth } from "./Cloth";
import { DistortingMirrors } from "./DistortingMirrors";
import { EsherSwitchButton } from "./EsherSwitchButton";
import { MandelbrotSet } from "./MandelbrotSet";
import { SoftVideoPlayer } from "./SoftVideoPlayer";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

export const UI: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs();

  return (
    <>
      <WorkDetails>
        <div className="fixed top-24 z-10 flex w-screen flex-row items-center justify-center gap-10">
          {renderTabs([
            "Bubble",
            "Cloth",
            "Distorting Mirrors",
            "Esher's Switch Button",
            "Mandelbrot's Set",
            "Soft Video Player",
          ])}
        </div>
      </WorkDetails>
      {renderTabsBody([
        <Bubble />,
        <Cloth />,
        <DistortingMirrors />,
        <EsherSwitchButton />,
        <MandelbrotSet />,
        <SoftVideoPlayer />,
      ])}
    </>
  );
};
