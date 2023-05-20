import React from "react";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

const Icons = React.lazy(() =>
  import("./Icons").then((module) => ({
    default: module.Icons,
  })),
);

export const Mimicry: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs();

  return (
    <>
      <WorkDetails>
        <div className="fixed top-28 z-50 flex w-screen flex-row justify-center gap-10">
          {renderTabs(["iPad icons"])}
        </div>
      </WorkDetails>
      {renderTabsBody([<Icons />])}
    </>
  );
};
