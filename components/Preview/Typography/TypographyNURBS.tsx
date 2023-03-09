import React from "react";

import { TypographyNURBSAlphabet } from "./TypographyNURBS.Alphabet";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

export const TypographyNURBS: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs();

  return (
    <>
      <WorkDetails>
        <div className="fixed top-40 z-50 flex w-screen flex-row items-center justify-center gap-10">
          {renderTabs(["Alphabet"])}
        </div>
      </WorkDetails>
      {renderTabsBody([<TypographyNURBSAlphabet />])}
    </>
  );
};
