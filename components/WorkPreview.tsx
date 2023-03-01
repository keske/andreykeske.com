import clsx from "clsx";
import * as R from "ramda";
import React from "react";

import { useHeader, useListItems } from "@/stores/index";

type WorkPreviewProps = {
  preview: React.ReactElement<any, React.JSXElementConstructor<any> | string>;
};

export const WorkPreview: React.FC<WorkPreviewProps> = ({ preview }) => {
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
        "origin-center overflow-hidden duration-300",
        R.not(R.isNil(selectedCaseId))
          ? "scale-100 rounded-none"
          : "scale-[0.99] rounded-3xl",
      )}
    >
      {preview && React.cloneElement(preview)}
    </div>
  );
};
