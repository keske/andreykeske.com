import React from "react";

import type { Item } from "@/stores/useListItems";

import { useListItems } from "@/stores/index";

type HydratedItem = Item & { id: string };

const ViewModeDetails = () => {
  const { items } = useListItems();

  const hydratedItems = React.useMemo<HydratedItem[]>(
    () =>
      items
        .map((item) => ({
          ...item,
          id: item.title.toLocaleLowerCase().replace(/ /g, "-"),
        }))
        .sort((a, b) => a.year - b.year)
        .reverse(),
    [items],
  );

  return (
    <div className="relative">
      {hydratedItems.map(({ component: PreviewComponent, id }) => (
        <div className="relative" key={id}>
          <PreviewComponent />
        </div>
      ))}
    </div>
  );
};

export default ViewModeDetails;
