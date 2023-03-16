import React from "react";

import { MinecraftAtomic } from "./MinecraftAtomic";
import { MinecraftNURBS } from "./MinecraftNURBS";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

export const Minecraft: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs({
    initialIndex: 1,
  });

  return (
    <>
      <WorkDetails>
        <div className="fixed top-28 z-50 flex w-screen flex-row justify-center gap-10">
          {renderTabs(["Atomic", "NURBS"])}
        </div>
      </WorkDetails>
      {renderTabsBody([<MinecraftAtomic />, <MinecraftNURBS />])}
    </>
  );
};
