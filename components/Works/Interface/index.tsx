import React from "react";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

const Cloth = React.lazy(() =>
  import("./Cloth").then((module) => ({
    default: module.Cloth,
  })),
);

// const MandelbrotSet = React.lazy(() =>
//   import("./MandelbrotSet").then((module) => ({
//     default: module.MandelbrotSet,
//   })),
// );

const SoftVideoPlayer = React.lazy(() =>
  import("./SoftVideoPlayer").then((module) => ({
    default: module.SoftVideoPlayer,
  })),
);

export const Interface: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs({
    initialIndex: 1,
  });

  return (
    <>
      <WorkDetails>
        <div className="fixed top-28 z-50 flex w-screen flex-row justify-center gap-10">
          {renderTabs([
            "Cloth",
            // "Mandelbrot's Set",
            "Soft Video Player",
          ])}
        </div>
      </WorkDetails>
      {renderTabsBody([
        <Cloth />,
        // <MandelbrotSet />,
        <SoftVideoPlayer />,
      ])}
    </>
  );
};
