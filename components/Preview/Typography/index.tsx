import React from "react";

import { TypographyNURBS } from "./TypographyNURBS";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

export const Typography: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs();

  return (
    <>
      <WorkDetails>
        <div className="fixed top-28 z-50 flex w-screen flex-row justify-center gap-10">
          {renderTabs(["NURBS"])}
        </div>
      </WorkDetails>
      {renderTabsBody([<TypographyNURBS />])}
    </>
  );
};