import React from "react";

import { SegmentedControl, WorkDetails } from "@/components/index";

const TypographyNURBSJapanese = React.lazy(() =>
  import("./TypographyNURBS.Japanese").then((module) => ({
    default: module.TypographyNURBSJapanese,
  })),
);

const segmentedControlItems: string[] = ["芭蕉松尾"];

export const Typography: React.FC = () => {
  const [segmentedControlAtiveItem, setSegmentedControlAtiveItem] =
    React.useState(segmentedControlItems[0]);

  const renderContent = React.useCallback(() => {
    switch (segmentedControlAtiveItem) {
      case "芭蕉松尾":
        return <TypographyNURBSJapanese />;
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
