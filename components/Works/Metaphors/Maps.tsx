import React from "react";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

const MapsGlobalization = React.lazy(() =>
  import("./Maps.Globalization").then((module) => ({
    default: module.MapsGlobalization,
  })),
);

const MapsVintageGoogleStreetView = React.lazy(() =>
  import("./Maps.VintageGoogleStreetView").then((module) => ({
    default: module.MapsVintageGoogleStreetView,
  })),
);

const MapsWaterOnMars = React.lazy(() =>
  import("./Maps.WaterOnMars").then((module) => ({
    default: module.MapsWaterOnMars,
  })),
);

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
