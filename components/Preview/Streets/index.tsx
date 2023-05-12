import React from "react";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

const Graffiti = React.lazy(() =>
  import("./Graffiti").then((module) => ({
    default: module.Graffiti,
  })),
);

const Installations = React.lazy(() =>
  import("./Installations").then((module) => ({
    default: module.Installations,
  })),
);

const Stickers = React.lazy(() =>
  import("./Stickers").then((module) => ({
    default: module.Stickers,
  })),
);

export const Streets: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs();

  return (
    <>
      <WorkDetails>
        <div className="fixed top-28 z-50 flex w-screen flex-row justify-center gap-10">
          {renderTabs(["Graffiti", "Installations", "Stickers"])}
        </div>
      </WorkDetails>
      {renderTabsBody([<Graffiti />, <Installations />, <Stickers />])}
    </>
  );
};
