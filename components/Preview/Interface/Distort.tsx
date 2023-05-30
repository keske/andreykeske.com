import React from "react";

import { DistortMessenger } from "./Distort.Messenger";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

export const Distort: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs();

  return (
    <div className="h-screen w-screen">
      <WorkDetails>
        <div className="fixed top-40 z-50 flex w-screen flex-row justify-center gap-10">
          {renderTabs(["Messenger"])}
        </div>
      </WorkDetails>
      {renderTabsBody([<DistortMessenger />])}
    </div>
  );
};
