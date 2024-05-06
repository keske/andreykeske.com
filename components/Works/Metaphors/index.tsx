import React from "react";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

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

export const Metaphors: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs({
    initialIndex: 1,
  });

  return (
    <>
      <WorkDetails>
        <div className="fixed top-28 z-50 flex w-screen flex-row justify-center gap-10">
          {renderTabs([
            "AR",
            "Crumpled Newspaper",
            "Crypto",
            "Duality",
            "Emojies",
            "IOS",
            "Mac OS",
            "Maps",
          ])}
        </div>
      </WorkDetails>
      {renderTabsBody([
        <AR />,
        <CrumpledNewspaper />,
        <Crypto />,
        <Duality />,
        <Emojies />,
        <IOS />,
        <MacOS />,
        <Maps />,
      ])}
    </>
  );
};
