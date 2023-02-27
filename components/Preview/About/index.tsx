import React from "react";

import { CV } from "./CV";
import { Description } from "./Description";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

export const About: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs();

  return (
    <div className="py-80">
      {renderTabsBody([<Description />, <CV />])}
      <WorkDetails>
        <div className="fixed top-40 flex w-screen flex-row items-center justify-center gap-10">
          {renderTabs(["Description", "CV"])}
        </div>
      </WorkDetails>
    </div>
  );
};
