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
    <>
      <WorkDetails>
        <div className="fixed top-28 z-50 flex w-screen flex-row items-center justify-center gap-10">
          {renderTabs([
            "Globalization",
            "Inverted Manhattan",
            "Vintage Google Street View",
            "Water On Mars",
          ])}
        </div>
      </WorkDetails>
      {renderTabsBody([
        <Globalization />,
        <InvertedManhattan />,
        <VintageGoogleStreetView />,
        <WaterOnMars />,
      ])}
    </>
  );
};
