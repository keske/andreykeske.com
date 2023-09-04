import React from "react";

import { WorkDetails } from "@/components";
import { SegmentedControl } from "@/packages/ui-kit";

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

const segmentedControlItems: string[] = [
  "Desktop",
  "Dock",
  "Finder",
  "Terminal",
];

export const MacOS: React.FC = () => {
  const [segmentedControlAtiveItem, setSegmentedControlAtiveItem] =
    React.useState(segmentedControlItems[0]);

  const renderContent = React.useCallback(() => {
    switch (segmentedControlAtiveItem) {
      case "Desktop":
        return <MacOSDesktop />;

      case "Dock":
        return <MacOSDock />;

      case "Finder":
        return <MacOSFinder />;

      case "Terminal":
        return <MacOSTerminal />;
    }
  }, [segmentedControlAtiveItem]);

  return (
    <div className="h-screen w-screen">
      <WorkDetails>
        <div className="fixed top-40 z-50 flex w-screen flex-row justify-center gap-10">
          <SegmentedControl
            items={segmentedControlItems}
            onValueChange={setSegmentedControlAtiveItem}
          />
        </div>
      </WorkDetails>
      {renderContent()}
    </div>
  );
};
