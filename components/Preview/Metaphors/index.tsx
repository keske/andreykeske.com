import React from "react";

import { AR } from "./AR";
import { Crypto } from "./Crypto";
import { Emojies } from "./Emojies";
import { IOS } from "./IOS";
import { MacOS } from "./MacOS";
import { Maps } from "./Maps";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

const random =
  // eslint-disable-next-line @typescript-eslint/default-param-last
  (min = 0, max: number) => Math.floor(Math.random() * (max - min) + min);

export const Metaphors: React.FC = () => {
  const { renderTabs, renderTabsBody } =
    useTabs();
    //   {
    //   initialIndex: random(0, 5),
    // }

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
