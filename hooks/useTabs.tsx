import React from "react";

import { Tab } from "@/components/index";

export const useTabs = (): {
  renderTabs: (tabs: string[]) => JSX.Element;
  selectedTab: number;
  setSelectedTab: (value: number) => void;
} => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const renderTabs = React.useCallback(
    (tabs: string[]) => (
      <>
        {tabs.map((label, index) => (
          <React.Fragment key={index}>
            <Tab
              isActive={selectedTab === index}
              onClick={() => {
                setSelectedTab(index);
              }}
            >
              {label}
            </Tab>
          </React.Fragment>
        ))}
      </>
    ),
    [selectedTab],
  );

  return { renderTabs, selectedTab, setSelectedTab };
};
