import React from "react";

import { LOT2046Tattoo } from "./LOT2046Tattoo";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

export const Objects: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs();

  return (
    <>
      <WorkDetails>
        <div className="fixed top-28 z-50 flex w-screen flex-row items-center justify-center gap-10">
          {renderTabs(["LOT2046Tattoo"])}
        </div>
      </WorkDetails>
      {renderTabsBody([<LOT2046Tattoo />])}
    </>
  );
};
