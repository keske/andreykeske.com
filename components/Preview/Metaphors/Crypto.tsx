import React from "react";

import { CryptoBTCBubble } from "./Crypto.BTCBubble";

import { SegmentedControl, WorkDetails } from "@/components/index";

const segmentedControlItems: string[] = ["Bitcoin Bubble"];

export const Crypto: React.FC = () => {
  const [segmentedControlAtiveItem, setSegmentedControlAtiveItem] =
    React.useState(segmentedControlItems[0]);

  const renderContent = React.useCallback(() => {
    switch (segmentedControlAtiveItem) {
      case "Bitcoin Bubble":
        return <CryptoBTCBubble />;
    }
  }, [segmentedControlAtiveItem]);

  return (
    <div className="h-screen w-screen">
      <WorkDetails>
        <div className="fixed top-40 z-50 flex w-screen flex-row justify-center gap-10">
          <SegmentedControl
            items={segmentedControlItems}
            onValueChange={setSegmentedControlAtiveItem}
          />
        </div>
      </WorkDetails>
      {renderContent()}
    </div>
  );
};
