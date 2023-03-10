import React from "react";

import { Contacts } from "./Contacts";
import { Description } from "./Description";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

export const About: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs();

  return (
    <>
      <WorkDetails>
        <div className="fixed top-28 z-50 flex w-screen flex-row justify-center gap-10">
          {renderTabs(["Description", "Contacts"])}
        </div>
      </WorkDetails>
      {renderTabsBody([<Description />, <Contacts />])}
    </>
  );
};
