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
  const [, startTransition] = React.useTransition();

  const [selectedTab, setSelectedTab] = React.useState(
    config?.initialIndex ?? 0,
  );

  const isSelected = React.useCallback(
    (index: number) => selectedTab === index,
    [selectedTab],
  );

  const handleClick = React.useCallback(
    (index: number) => {
      if (index !== selectedTab) {
        startTransition(() => {
          setSelectedTab(index);
        });
      }
    },
    [selectedTab],
  );

  const renderTabs = React.useCallback(
    (tabs: string[]) => (
      <>
        {tabs.map((label, index) => (
          <React.Fragment key={index}>
            <Button
              className={clsx(
                "uppercase tracking-widest",
                isSelected(index) && "font-black",
              )}
              onClick={() => {
                handleClick(index);
              }}
              size="xs"
              {...(!isSelected(index) && { variant: "transparent" })}
            >
              {label}
            </Button>
          </React.Fragment>
        ))}
      </>
    ),
    [handleClick, isSelected],
  );

  const renderTabsBody = React.useCallback(
    (
      components: Array<
        React.ReactElement<any, React.JSXElementConstructor<any> | string>
      >,
    ) => (
      <React.Suspense>
        {React.cloneElement(components[selectedTab])}
      </React.Suspense>
    ),
    [selectedTab],
  );

  return { renderTabs, renderTabsBody, selectedTab, setSelectedTab };
};
