import React from "react";

import { WorkDetails } from "@/components";
import { SegmentedControl } from "@/packages/ui-kit";

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

const MinecraftShaders = React.lazy(() =>
  import("./MinecraftShaders").then((module) => ({
    default: module.MinecraftShaders,
  })),
);

const segmentedControlItems: string[] = [
  "Atomic",
  "NURBS",
  "Shaders",
];

export const Minecraft: React.FC = () => {
  const [segmentedControlAtiveItem, setSegmentedControlAtiveItem] =
    React.useState(segmentedControlItems[0]);

  const renderContent = React.useCallback(() => {
    switch (segmentedControlAtiveItem) {
      case "Atomic":
        return <MinecraftAtomic />;

      case "NURBS":
        return <MinecraftNURBS />;

      case "Shaders":
        return <MinecraftShaders />;
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
