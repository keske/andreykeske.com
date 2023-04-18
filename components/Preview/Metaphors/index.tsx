import React from "react";

import { AR } from "./AR";
import { CrumpledNewspaper } from "./CrumpledNewspaper";
import { Crypto } from "./Crypto";
import { Duality } from "./Duality";
import { Emojies } from "./Emojies";
import { IOS } from "./IOS";
import { MacOS } from "./MacOS";
import { Maps } from "./Maps";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

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
