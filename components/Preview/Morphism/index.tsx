import React from "react";

import { WorkDetails } from "@/components";
import { SegmentedControl } from "@/packages/ui-kit";

const EsherSwitchButton = React.lazy(() =>
  import("./EsherSwitchButton").then((module) => ({
    default: module.EsherSwitchButton,
  })),
);

const InvertedManhattan = React.lazy(() =>
  import("./InvertedManhattan").then((module) => ({
    default: module.InvertedManhattan,
  })),
);

const LegoHTML = React.lazy(() =>
  import("./LegoHTML").then((module) => ({
    default: module.LegoHTML,
  })),
);

const LOT2046Tattoo = React.lazy(() =>
  import("./LOT2046Tattoo").then((module) => ({
    default: module.LOT2046Tattoo,
  })),
);

const Sneakers = React.lazy(() =>
  import("./Sneakers").then((module) => ({
    default: module.Sneakers,
  })),
);

const segmentedControlItems: string[] = [
  "Esher's Switch Button",
  "Manhattan",
  "Lego HTML",
  "LOT2046 Tattoo",
  "Sneakers",
];

export const Morphism: React.FC = () => {
  const [segmentedControlAtiveItem, setSegmentedControlAtiveItem] =
    React.useState(segmentedControlItems[0]);

  const renderContent = React.useCallback(() => {
    switch (segmentedControlAtiveItem) {
      case "Esher's Switch Button":
        return <EsherSwitchButton />;

      case "Manhattan":
        return <InvertedManhattan />;

      case "Lego HTML":
        return <LegoHTML />;

      case "LOT2046 Tattoo":
        return <LOT2046Tattoo />;

      case "Sneakers":
        return <Sneakers />;
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
