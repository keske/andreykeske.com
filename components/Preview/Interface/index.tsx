import React from "react";

import { SegmentedControl, WorkDetails } from "@/components/index";

const Cloth = React.lazy(() =>
  import("./Cloth").then((module) => ({
    default: module.Cloth,
  })),
);

const DistortingMirrors = React.lazy(() =>
  import("./DistortingMirrors").then((module) => ({
    default: module.DistortingMirrors,
  })),
);

const SoftVideoPlayer = React.lazy(() =>
  import("./SoftVideoPlayer").then((module) => ({
    default: module.SoftVideoPlayer,
  })),
);

const segmentedControlItems: string[] = [
  "Cloth",
  "Distorting Mirrors",
  "Soft Video Player",
];

export const Interface: React.FC = () => {
  const [segmentedControlAtiveItem, setSegmentedControlAtiveItem] =
    React.useState(segmentedControlItems[0]);

  const renderContent = React.useCallback(() => {
    switch (segmentedControlAtiveItem) {
      case "Cloth":
        return <Cloth />;

      case "Distorting Mirrors":
        return <DistortingMirrors />;

      case "Soft Video Player":
        return <SoftVideoPlayer />;
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
