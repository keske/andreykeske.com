import React from "react";

import { SegmentedControl, WorkDetails } from "@/components";

const MinecraftAtomic = React.lazy(() =>
  import("./MinecraftAtomic").then((module) => ({
    default: module.MinecraftAtomic,
  })),
);

const MinecraftNURBS = React.lazy(() =>
  import("./MinecraftNURBS").then((module) => ({
    default: module.MinecraftNURBS,
  })),
);

const segmentedControlItems: string[] = ["Atomic", "NURBS"];

export const Minecraft: React.FC = () => {
  const [segmentedControlAtiveItem, setSegmentedControlAtiveItem] =
    React.useState(segmentedControlItems[0]);

  const renderContent = React.useCallback(() => {
    switch (segmentedControlAtiveItem) {
      case "Atomic":
        return <MinecraftAtomic />;

      case "NURBS":
        return <MinecraftNURBS />;
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
