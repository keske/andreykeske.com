import React from "react";

import { SegmentedControl, WorkDetails } from "@/components";

const Icons = React.lazy(() =>
  import("./Icons").then((module) => ({
    default: module.Icons,
  })),
);

const Piano = React.lazy(() =>
  import("./Piano").then((module) => ({
    default: module.Piano,
  })),
);

const segmentedControlItems: string[] = ["Piano", "iPad icons"];

export const Mimicry: React.FC = () => {
  const [segmentedControlAtiveItem, setSegmentedControlAtiveItem] =
    React.useState(segmentedControlItems[0]);

  const renderContent = React.useCallback(() => {
    switch (segmentedControlAtiveItem) {
      case "Piano":
        return <Piano />;

      case "iPad icons":
        return <Icons />;
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
