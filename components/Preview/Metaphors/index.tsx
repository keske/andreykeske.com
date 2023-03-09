import React from "react";

import { AR } from "./AR";
import { Crypto } from "./Crypto";
import { Emojies } from "./Emojies";
import { IOS } from "./IOS";
import { MacOS } from "./MacOS";
import { Maps } from "./Maps";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

export const Metaphors: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs();

  return (
    <>
      <WorkDetails>
        <div className="fixed top-28 z-50 flex w-screen flex-row items-center justify-center gap-10">
          {renderTabs(["AR", "Crypto", "Emojies", "IOS", "Mac OS", "Maps"])}
        </div>
      </WorkDetails>
      {renderTabsBody([
        <AR />,
        <Crypto />,
        <Emojies />,
        <IOS />,
        <MacOS />,
        <Maps />,
      ])}
    </>
  );
};
