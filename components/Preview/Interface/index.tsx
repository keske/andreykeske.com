import React from "react";

import { Cloth } from "./Cloth";
import { DistortingMirrors } from "./DistortingMirrors";
import { MandelbrotSet } from "./MandelbrotSet";
import { SoftVideoPlayer } from "./SoftVideoPlayer";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

export const Interface: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs({
    initialIndex: 3,
  });

  return (
    <>
      <WorkDetails>
        <div className="fixed top-28 z-50 flex w-screen flex-row justify-center gap-10">
          {renderTabs([
            "Cloth",
            "Distorting Mirrors",
            "Mandelbrot's Set",
            "Soft Video Player",
          ])}
        </div>
      </WorkDetails>
      {renderTabsBody([
        <Cloth />,
        <DistortingMirrors />,
        <MandelbrotSet />,
        <SoftVideoPlayer />,
      ])}
    </>
  );
};
