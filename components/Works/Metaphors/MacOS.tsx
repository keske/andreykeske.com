import React from "react";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

const MacOSDesktop = React.lazy(() =>
  import("./MacOS.Desktop").then((module) => ({
    default: module.MacOSDesktop,
  })),
);

const MacOSDock = React.lazy(() =>
  import("./MacOS.Dock").then((module) => ({
    default: module.MacOSDock,
  })),
);

const MacOSFinder = React.lazy(() =>
  import("./MacOS.Finder").then((module) => ({
    default: module.MacOSFinder,
  })),
);

const MacOSTerminal = React.lazy(() =>
  import("./MacOS.Terminal").then((module) => ({
    default: module.MacOSTerminal,
  })),
);

export const MacOS: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs();

  return (
    <div className="h-screen w-screen">
      <WorkDetails>
        <div className="fixed top-40 z-50 flex w-screen flex-row justify-center gap-10">
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
