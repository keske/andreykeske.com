import React from "react";

import { WorkDetails } from "@/components";
import { SegmentedControl } from "@/packages/ui-kit";

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

const segmentedControlItems: string[] = [
  "Globalization",
  "Vintage Google Street View",
  "Water on Mars",
];

export const Maps: React.FC = () => {
  const [segmentedControlAtiveItem, setSegmentedControlAtiveItem] =
    React.useState(segmentedControlItems[0]);

  const renderContent = React.useCallback(() => {
    switch (segmentedControlAtiveItem) {
      case "Globalization":
        return <MapsGlobalization />;

      case "Vintage Google Street View":
        return <MapsVintageGoogleStreetView />;

      case "Water on Mars":
        return <MapsWaterOnMars />;
    }
  }, [segmentedControlAtiveItem]);

  return (
    <div className="h-screen w-screen">
      <WorkDetails>
        <div className="fixed top-40 z-50 flex w-screen flex-row justify-center gap-10">
          <SegmentedControl
            items={segmentedControlItems}
            onValueChange={setSegmentedControlAtiveItem}
          />
        </div>
      </WorkDetails>
      {renderContent()}
    </div>
  );
};
