import React from "react";

import { MacOSDesktop } from "./MacOS.Desktop";
import { MacOSDock } from "./MacOS.Dock";
import { MacOSFinder } from "./MacOS.Finder";
import { MacOSTerminal } from "./MacOS.Terminal";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

export const MacOS: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs();

  return (
    <div className="h-screen w-screen">
      <WorkDetails>
        <div className="fixed top-36 z-50 flex w-screen flex-row items-center justify-center gap-10">
          {renderTabs(["Desktop", "Dock", "Finder", "Terminal"])}
        </div>
      </WorkDetails>
      {renderTabsBody([
        <MacOSDesktop />,
        <MacOSDock />,
        <MacOSFinder />,
        <MacOSTerminal />,
      ])}
    </div>
  );
};
