import React from "react";

import { Globalization } from "./Globalization";
import { InvertedManhattan } from "./InvertedManhattan";
import { VintageGoogleStreetView } from "./VintageGoogleStreetView";
import { WaterOnMars } from "./WaterOnMars";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

export const Maps: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs();

  return (
    <div>
      {renderTabsBody([
        <Globalization />,
        <InvertedManhattan />,
        <VintageGoogleStreetView />,
        <WaterOnMars />,
      ])}
      <WorkDetails>
        <div className="fixed top-40 flex w-screen flex-row items-center justify-center gap-10">
          {renderTabs([
            "Globalization",
            "Inverted Manhattan",
            "Vintage Google Street View",
            "Water On Mars",
          ])}
        </div>
      </WorkDetails>
    </div>
  );
};
