import React from "react";

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
        <div className="fixed top-24 flex w-screen flex-row items-center justify-center gap-10">
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
