import React from "react";

import { SegmentedControl, WorkDetails } from "@/components";

const Graffiti = React.lazy(() =>
  import("./Graffiti").then((module) => ({
    default: module.Graffiti,
  })),
);

const Installations = React.lazy(() =>
  import("./Installations").then((module) => ({
    default: module.Installations,
  })),
);

const Stickers = React.lazy(() =>
  import("./Stickers").then((module) => ({
    default: module.Stickers,
  })),
);

const segmentedControlItems: string[] = [
  "Graffiti",
  "Installations",
  "Stickers",
];

export const Streets: React.FC = () => {
  const [segmentedControlAtiveItem, setSegmentedControlAtiveItem] =
    React.useState(segmentedControlItems[0]);

  const renderContent = React.useCallback(() => {
    switch (segmentedControlAtiveItem) {
      case "Graffiti":
        return <Graffiti />;

      case "Installations":
        return <Installations />;

      case "Stickers":
        return <Stickers />;
    }
  }, [segmentedControlAtiveItem]);

  return (
    <>
      <WorkDetails>
        <div className="fixed top-28 z-50 flex w-screen flex-row justify-center gap-10">
          <SegmentedControl
            items={segmentedControlItems}
            onValueChange={setSegmentedControlAtiveItem}
          />
        </div>
      </WorkDetails>
      {renderContent()}
    </>
  );
};
