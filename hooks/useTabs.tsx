import clsx from "clsx";
import React from "react";

import { Button } from "@/components/index";

export type TabsConfig = {
  initialIndex?: number;
};

export type UseTabs = {
  renderTabs: (tabs: string[]) => JSX.Element;
  renderTabsBody: (
    tabs: Array<
      React.ReactElement<any, React.JSXElementConstructor<any> | string>
    >,
  ) => JSX.Element;
  selectedTab: number;
  setSelectedTab: (value: number) => void;
};

export const useTabs = (config?: TabsConfig): UseTabs => {
  const [selectedTab, setSelectedTab] = React.useState(
    config?.initialIndex ?? 0,
  );

  const renderTabs = React.useCallback(
    (tabs: string[]) => (
      <>
        {tabs.map((label, index) => (
          <React.Fragment key={index}>
            <Button
              className={clsx(
                "font-sans uppercase hover:bg-white",
                selectedTab === index ? "bg-white font-bold" : "bg-black",
              )}
              onClick={() => {
                setSelectedTab(index);
              }}
              size="xs"
              variant="transparent"
            >
              {label}
            </Button>
          </React.Fragment>
        ))}
      </>
    ),
    [selectedTab],
  );

  const renderTabsBody = React.useCallback(
    (
      components: Array<
        React.ReactElement<any, React.JSXElementConstructor<any> | string>
      >,
    ) => <>{React.cloneElement(components[selectedTab])}</>,
    [selectedTab],
  );

  return { renderTabs, renderTabsBody, selectedTab, setSelectedTab };
};
