import React from "react";

import { Ikea } from "./Ikea";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

export const AR: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs();

  return (
    <>
      <WorkDetails>
        <div className="fixed top-24 z-10 flex w-screen flex-row items-center justify-center gap-10">
          {renderTabs(["Ikea"])}
        </div>
      </WorkDetails>
      {renderTabsBody([<Ikea />])}
    </>
  );
};
