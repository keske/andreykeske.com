import React from "react";

import { LOT2046Tattoo } from "./LOT2046Tattoo";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

export const Objects: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs();

  return (
    <>
      {renderTabsBody([<LOT2046Tattoo />])}
      <WorkDetails>
        <div className="fixed top-40 flex w-screen flex-row items-center justify-center gap-10">
          {renderTabs(["LOT2046Tattoo"])}
        </div>
      </WorkDetails>
    </>
  );
};
