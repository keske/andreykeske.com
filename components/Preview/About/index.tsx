import React from "react";

import { Awards } from "./Awards";
import { Contacts } from "./Contacts";
import { Description } from "./Description";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

export const About: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs({
    initialIndex: 2,
  });

  return (
    <>
      <WorkDetails>
        <div className="fixed top-28 z-50 flex w-screen flex-row justify-center gap-10">
          {renderTabs(["Awards", "Contacts", "Description"])}
        </div>
      </WorkDetails>
      {renderTabsBody([<Awards />, <Contacts />, <Description />])}
    </>
  );
};
