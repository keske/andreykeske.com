import React from "react";

import { WorkDetails } from "@/components/index";
import { useTabs } from "@/hooks/index";

const Awards = React.lazy(() =>
  import("./Awards").then((module) => ({
    default: module.Awards,
  })),
);

const Contacts = React.lazy(() =>
  import("./Contacts").then((module) => ({
    default: module.Contacts,
  })),
);

const Description = React.lazy(() =>
  import("./Description").then((module) => ({
    default: module.Description,
  })),
);

const Me = React.lazy(() =>
  import("./Me").then((module) => ({
    default: module.Me,
  })),
);

export const About: React.FC = () => {
  const { renderTabs, renderTabsBody } = useTabs({
    initialIndex: 2,
  });

  return (
    <>
      <WorkDetails>
        <div className="fixed top-28 z-50 flex w-screen flex-row justify-center gap-10">
          {renderTabs(["Awards", "Contacts", "Description", "Me"])}
        </div>
      </WorkDetails>
      {renderTabsBody([
        <Awards />,
        <Contacts />,
        <Description />,
        <Me />,
      ])}
    </>
  );
};
