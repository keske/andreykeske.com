import React from "react";

import { Emojies } from "./Emojies";
import { Sneakers } from "./Sneakers";
import { TimestampTattoo } from "./TimestampTattoo";
import { Volcom } from "./Volcom";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

export const Graphics: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs();

  return (
    <>
      {renderTabsBody([
        <Emojies />,
        <Sneakers />,
        <TimestampTattoo />,
        <Volcom />,
      ])}
      <WorkDetails>
        <div className="fixed top-28 z-50 flex w-screen flex-row items-center justify-center gap-10">
          {renderTabs(["Emojies", "Sneakers", "Timestamp Tattoo", "Volcom"])}
        </div>
      </WorkDetails>
    </>
  );
};
