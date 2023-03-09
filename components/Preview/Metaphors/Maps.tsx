import React from "react";

import { MapsGlobalization } from "./Maps.Globalization";
import { MapsInvertedManhattan } from "./Maps.InvertedManhattan";
import { MapsVintageGoogleStreetView } from "./Maps.VintageGoogleStreetView";
import { MapsWaterOnMars } from "./Maps.WaterOnMars";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

export const Maps: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs();

  return (
    <div className="h-screen w-screen">
      <WorkDetails>
        <div className="fixed top-36 z-50 flex w-screen flex-row items-center justify-center gap-10">
          {renderTabs([
            "Globalization",
            "Manhattan",
            "Vintage Google Street View",
            "Water on Mars",
          ])}
        </div>
      </WorkDetails>
      {renderTabsBody([
        <MapsGlobalization />,
        <MapsInvertedManhattan />,
        <MapsVintageGoogleStreetView />,
        <MapsWaterOnMars />,
      ])}
    </div>
  );
};
