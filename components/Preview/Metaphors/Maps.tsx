import React from "react";

import { MapsGlobalization } from "./Maps.Globalization";
import { MapsVintageGoogleStreetView } from "./Maps.VintageGoogleStreetView";
import { MapsWaterOnMars } from "./Maps.WaterOnMars";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

export const Maps: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs();

  return (
    <div className="h-screen w-screen">
      <WorkDetails>
        <div className="fixed top-40 z-50 flex w-screen flex-row justify-center gap-10">
          {renderTabs([
            "Globalization",
            "Vintage Google Street View",
            "Water on Mars",
          ])}
        </div>
      </WorkDetails>
      {renderTabsBody([
        <MapsGlobalization />,
        <MapsVintageGoogleStreetView />,
        <MapsWaterOnMars />,
      ])}
    </div>
  );
};
