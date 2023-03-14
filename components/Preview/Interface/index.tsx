import React from "react";

import { Cloth } from "./Cloth";
import { DistortingMirrors } from "./DistortingMirrors";
import { EsherSwitchButton } from "./EsherSwitchButton";
import { MandelbrotSet } from "./MandelbrotSet";
import { SoftVideoPlayer } from "./SoftVideoPlayer";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

export const Interface: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs();

  return (
    <>
      <WorkDetails>
        <div className="fixed top-28 z-50 flex w-screen flex-row justify-center gap-10">
          {renderTabs([
            "Cloth",
            "Distorting Mirrors",
            "Esher's Switch Button",
            "Mandelbrot's Set",
            "Soft Video Player",
          ])}
        </div>
      </WorkDetails>
      {renderTabsBody([
        <Cloth />,
        <DistortingMirrors />,
        <EsherSwitchButton />,
        <MandelbrotSet />,
        <SoftVideoPlayer />,
      ])}
    </>
  );
};
