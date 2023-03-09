import React from "react";

import { MinecraftNURBSBlocks } from "./MinecraftNURBS.Blocks";
import { MinecraftNURBSSmallHouse } from "./MinecraftNURBS.SmallHouse";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

export const MinecraftNURBS: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs();

  return (
    <div className="h-screen w-screen">
      <WorkDetails>
        <div className="fixed top-36 z-50 flex w-screen flex-row items-center justify-center gap-10">
          {renderTabs(["Blocks", "Small House"])}
        </div>
      </WorkDetails>
      {renderTabsBody([<MinecraftNURBSBlocks />, <MinecraftNURBSSmallHouse />])}
    </div>
  );
};
