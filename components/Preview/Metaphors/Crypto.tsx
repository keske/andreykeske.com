import React from "react";

import { CryptoBTCBubble } from "./Crypto.BTCBubble";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

export const Crypto: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs();

  return (
    <div className="h-screen w-screen">
      <WorkDetails>
        <div className="fixed top-40 z-50 flex w-screen flex-row items-center justify-center gap-10">
          {renderTabs(["Bitcoin Bubble"])}
        </div>
      </WorkDetails>
      {renderTabsBody([<CryptoBTCBubble />])}
    </div>
  );
};
