import React from "react";

import { MinecraftNURBSBlocks } from "./MinecraftNURBS.Blocks";
import { MinecraftNURBSDirt } from "./MinecraftNURBS.Dirt";
import { MinecraftNURBSSmallHouse } from "./MinecraftNURBS.SmallHouse";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

export const MinecraftNURBS: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs();

  return (
    <div className="h-screen w-screen">
      <WorkDetails>
        <div className="fixed top-40 z-50 flex w-screen flex-row justify-center gap-10">
          {renderTabs(["Dirt", "Blocks", "Small House"])}
        </div>
      </WorkDetails>
      {renderTabsBody([
        <MinecraftNURBSDirt />,
        <MinecraftNURBSBlocks />,
        <MinecraftNURBSSmallHouse />,
      ])}
    </div>
  );
};
