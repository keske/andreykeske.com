import React from "react";

import { Graffiti } from "./Graffiti";
import { Installations } from "./Installations";
import { Stickers } from "./Stickers";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

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
