import React from "react";

import { Desktop } from "./Desktop";
import { Dock } from "./Dock";
import { Finder } from "./Finder";
import { Terminal } from "./Terminal";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

export const MacOS: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs();

  return (
    <>
      <WorkDetails>
        <div className="fixed top-28 z-50 flex w-screen flex-row items-center justify-center gap-10">
          {renderTabs(["Desktop", "Dock", "Finder", "Terminal"])}
        </div>
      </WorkDetails>
      {renderTabsBody([<Desktop />, <Dock />, <Finder />, <Terminal />])}
    </>
  );
};
