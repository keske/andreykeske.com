import clsx from "clsx";
import React from "react";

import { useViewMode } from "@/stores/index";

const ViewModeToggle = () => {
  const { handleViewMode, viewMode } = useViewMode();

  const renderLabel = React.useCallback(
    (label: string) => (
      <div
        className={clsx(
          "rounded-lg p-2 first-letter:uppercase",
          label === viewMode
            ? "bg-stone-200"
            : "cursor-pointer hover:bg-stone-100",
        )}
      >
        {label}
      </div>
    ),
    [viewMode],
  );

  return (
    <button
      className="flex flex-row gap-2 border-0 bg-transparent p-0"
      onClick={handleViewMode}
    >
      {renderLabel("detail")}
      {renderLabel("list")}
    </button>
  );
};

export default ViewModeToggle;
