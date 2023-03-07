import React from "react";

import { MinecraftNURBS } from "./MinecraftNURBS";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

export const Minecraft: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs();

  return (
    <>
      <WorkDetails>
        <div className="fixed top-28 z-50 flex w-screen flex-row items-center justify-center gap-10">
          {renderTabs(["NURBS"])}
        </div>
      </WorkDetails>
      {renderTabsBody([<MinecraftNURBS />])}
    </>
  );
};
