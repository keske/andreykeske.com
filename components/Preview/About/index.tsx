import React from "react";

import { SegmentedControl, WorkDetails } from "@/components/index";

const Awards = React.lazy(() =>
  import("./Awards").then((module) => ({
    default: module.Awards,
  })),
);

const Contacts = React.lazy(() =>
  import("./Contacts").then((module) => ({
    default: module.Contacts,
  })),
);

const Description = React.lazy(() =>
  import("./Description").then((module) => ({
    default: module.Description,
  })),
);

const segmentedControlItems: string[] = [
  "Awards",
  "Contacts",
  "Description",
];

export const About: React.FC = () => {
  const [segmentedControlAtiveItem, setSegmentedControlAtiveItem] =
    React.useState(segmentedControlItems[0]);

  const renderContent = React.useCallback(() => {
    switch (segmentedControlAtiveItem) {
      case "Awards":
        return <Awards />;
      case "Contacts":
        return <Contacts />;
      case "Description":
        return <Description />;
    }
  }, [segmentedControlAtiveItem]);

  return (
    <>
      <WorkDetails>
        <div className="fixed top-28 z-50 flex w-screen flex-row justify-center gap-10">
          <SegmentedControl
            items={segmentedControlItems}
            onValueChange={setSegmentedControlAtiveItem}
          />
        </div>
      </WorkDetails>
      {renderContent()}
    </>
  );
};
