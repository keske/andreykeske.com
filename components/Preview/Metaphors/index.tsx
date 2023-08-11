import React from "react";

import { SegmentedControl, WorkDetails } from "@/components";

const AR = React.lazy(() =>
  import("./AR").then((module) => ({
    default: module.AR,
  })),
);

const CrumpledNewspaper = React.lazy(() =>
  import("./CrumpledNewspaper").then((module) => ({
    default: module.CrumpledNewspaper,
  })),
);

const Crypto = React.lazy(() =>
  import("./Crypto").then((module) => ({
    default: module.Crypto,
  })),
);

const Duality = React.lazy(() =>
  import("./Duality").then((module) => ({
    default: module.Duality,
  })),
);

const Emojies = React.lazy(() =>
  import("./Emojies").then((module) => ({
    default: module.Emojies,
  })),
);

const IOS = React.lazy(() =>
  import("./IOS").then((module) => ({
    default: module.IOS,
  })),
);

const MacOS = React.lazy(() =>
  import("./MacOS").then((module) => ({
    default: module.MacOS,
  })),
);

const Maps = React.lazy(() =>
  import("./Maps").then((module) => ({
    default: module.Maps,
  })),
);

const segmentedControlItems: string[] = [
  "AR",
  "Crumpled Newspaper",
  "Crypto",
  "Duality",
  "Emojies",
  "IOS",
  "Mac OS",
  "Maps",
];

export const Metaphors: React.FC = () => {
  const [segmentedControlAtiveItem, setSegmentedControlAtiveItem] =
    React.useState(segmentedControlItems[0]);

  const renderContent = React.useCallback(() => {
    switch (segmentedControlAtiveItem) {
      case "AR":
        return <AR />;

      case "Crumpled Newspaper":
        return <CrumpledNewspaper />;

      case "Crypto":
        return <Crypto />;

      case "Duality":
        return <Duality />;

      case "Emojies":
        return <Emojies />;

      case "IOS":
        return <IOS />;

      case "Mac OS":
        return <MacOS />;

      case "Maps":
        return <Maps />;
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
