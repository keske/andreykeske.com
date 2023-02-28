import React from "react";

import { Graffiti } from "./Graffiti";
import { Installations } from "./Installations";
import { Stickers } from "./Stickers";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

export const Streets: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs();

  return (
    <div className="py-80">
      {renderTabsBody([<Graffiti />, <Installations />, <Stickers />])}
      <WorkDetails>
        <div className="fixed top-40 flex w-screen flex-row items-center justify-center gap-10">
          {renderTabs(["Graffiti", "Installations", "Stickers"])}
        </div>
      </WorkDetails>
    </div>
  );
};
