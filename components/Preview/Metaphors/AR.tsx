import React from "react";

import { ARIkea } from "./AR.Ikea";

import { SegmentedControl, WorkDetails } from "@/components/index";

const segmentedControlItems: string[] = ["Ikea"];

export const AR: React.FC = () => {
  const [segmentedControlAtiveItem, setSegmentedControlAtiveItem] =
    React.useState(segmentedControlItems[0]);

  const renderContent = React.useCallback(() => {
    switch (segmentedControlAtiveItem) {
      case "Ikea":
        return <ARIkea />;
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
