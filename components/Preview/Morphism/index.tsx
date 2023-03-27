import React from "react";

import { EsherSwitchButton } from "./EsherSwitchButton";
import { InvertedManhattan } from "./InvertedManhattan";
import { LegoHTML } from "./LegoHTML";
import { LOT2046Tattoo } from "./LOT2046Tattoo";
import { Sneakers } from "./Sneakers";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

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
