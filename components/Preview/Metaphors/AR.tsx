import React from "react";

import { ARIkea } from "./AR.Ikea";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

export const AR: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs();

  return (
    <div className="h-screen w-screen">
      <WorkDetails>
        <div className="fixed top-40 z-50 flex w-screen flex-row items-center justify-center gap-10">
          {renderTabs(["Ikea"])}
        </div>
      </WorkDetails>
      {renderTabsBody([<ARIkea />])}
    </div>
  );
};
