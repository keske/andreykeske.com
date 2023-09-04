import React from "react";

import { TypographyNURBSAlphabet } from "./TypographyNURBS.Alphabet";

import { WorkDetails } from "@/components";
import { SegmentedControl } from "@/packages/ui-kit";

const segmentedControlItems: string[] = ["Alphabet"];

export const TypographyNURBS: React.FC = () => {
  const [segmentedControlAtiveItem, setSegmentedControlAtiveItem] =
    React.useState(segmentedControlItems[0]);

  const renderContent = React.useCallback(() => {
    switch (segmentedControlAtiveItem) {
      case "Alphabet":
        return <TypographyNURBSAlphabet />;
    }
  }, [segmentedControlAtiveItem]);

  return (
    <>
      <WorkDetails>
        <div className="fixed top-40 z-50 flex w-screen flex-row justify-center gap-10">
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
