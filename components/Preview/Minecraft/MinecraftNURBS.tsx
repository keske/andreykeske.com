import React from "react";

import { MinecraftNURBSBlocks } from "./MinecraftNURBS.Blocks";
import { MinecraftNURBSDirt } from "./MinecraftNURBS.Dirt";
import { MinecraftNURBSSmallHouse } from "./MinecraftNURBS.SmallHouse";

import { SegmentedControl, WorkDetails } from "@/components/index";

const segmentedControlItems: string[] = [
  "Dirt",
  "Blocks",
  "Small House",
];

export const MinecraftNURBS: React.FC = () => {
  const [segmentedControlAtiveItem, setSegmentedControlAtiveItem] =
    React.useState(segmentedControlItems[0]);

  const renderContent = React.useCallback(() => {
    switch (segmentedControlAtiveItem) {
      case "Dirt":
        return <MinecraftNURBSDirt />;
      case "Blocks":
        return <MinecraftNURBSBlocks />;
      case "Small House":
        return <MinecraftNURBSSmallHouse />;
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
