import React from "react";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

const Icons = React.lazy(() =>
  import("./Icons").then((module) => ({
    default: module.Icons,
  })),
);

const Piano = React.lazy(() =>
  import("./Piano").then((module) => ({
    default: module.Piano,
  })),
);

export const Mimicry: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs({
    initialIndex: 1,
  });

  return (
    <>
      <WorkDetails>
        <div className="fixed top-28 z-50 flex w-screen flex-row justify-center gap-10">
          {renderTabs(["Piano", "iPad icons"])}
        </div>
      </WorkDetails>
      {renderTabsBody([<Piano />, <Icons />])}
    </>
  );
};
