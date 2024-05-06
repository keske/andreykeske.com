import React from "react";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

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
