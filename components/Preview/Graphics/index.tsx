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
    <div className="py-80">
      {renderTabsBody([
        <Emojies />,
        <Sneakers />,
        <TimestampTattoo />,
        <Volcom />,
      ])}
      <WorkDetails>
        <div className="fixed top-40 flex w-screen flex-row items-center justify-center gap-10">
          {renderTabs(["Emojies", "Sneakers", "Timestamp Tattoo", "Volcom"])}
        </div>
      </WorkDetails>
    </div>
  );
};
