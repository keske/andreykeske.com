import clsx from "clsx";
import React from "react";

import { Button } from "@/components/index";
import { useHeader } from "@/stores/index";

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
  const { scheme } = useHeader();

  const [selectedTab, setSelectedTab] = React.useState(
    config?.initialIndex ?? 0,
  );

  const isSelected = React.useCallback(
    (index: number) => selectedTab === index,
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
                isSelected(index) && `text-${scheme.text} font-black`,
                `text-${scheme.text} hover:bg-${scheme.bg}`,
              )}
              onClick={() => {
                setSelectedTab(index);
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
    [isSelected, scheme.bg, scheme.text],
  );

  const renderTabsBody = React.useCallback(
    (
      components: Array<
        React.ReactElement<any, React.JSXElementConstructor<any> | string>
      >,
    ) => React.cloneElement(components[selectedTab]),
    [selectedTab],
  );

  return { renderTabs, renderTabsBody, selectedTab, setSelectedTab };
};
