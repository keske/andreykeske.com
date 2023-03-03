import clsx from "clsx";
import * as R from "ramda";
import React from "react";

import { useHeader, useListItems } from "@/stores/index";

type WorkPreviewProps = React.PropsWithChildren;

export const WorkPreview: React.FC<WorkPreviewProps> = ({ children }) => {
  const { resetScheme } = useHeader();

  const { selectedCaseId } = useListItems();

  React.useEffect(
    () => () => {
      // Need to reset scheme when component `unmounted`
      resetScheme();
    },
    [resetScheme, selectedCaseId],
  );

  return (
    <div
      className={clsx(
        "duration-300",
        R.not(R.isNil(selectedCaseId))
          ? "scale-100 rounded-none"
          : "scale-[0.99] rounded-3xl",
      )}
    >
      {children}
    </div>
  );
};
