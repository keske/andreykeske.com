import React from "react";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

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

export const Morphism: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs();

  return (
    <>
      <WorkDetails>
        <div className="fixed top-28 z-50 flex w-screen flex-row justify-center gap-10">
          {renderTabs([
            "Esher's Switch Button",
            "Manhattan",
            "Lego HTML",
            "LOT2046 Tattoo",
            "Sneakers",
          ])}
        </div>
      </WorkDetails>
      {renderTabsBody([
        <EsherSwitchButton />,
        <InvertedManhattan />,
        <LegoHTML />,
        <LOT2046Tattoo />,
        <Sneakers />,
      ])}
    </>
  );
};
