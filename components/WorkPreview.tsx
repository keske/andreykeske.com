import clsx from "clsx";
import * as R from "ramda";
import React from "react";

type WorkPreviewProps = {
  preview: React.ReactElement<any, React.JSXElementConstructor<any> | string>;
  selectedCaseId: string | null;
};

export const WorkPreview: React.FC<WorkPreviewProps> = ({
  preview,
  selectedCaseId,
}) => (
  <div className="absolute h-screen w-screen">
    <div
      className={clsx(
        "origin-center overflow-hidden duration-300",
        R.not(R.isNil(selectedCaseId))
          ? "scale-100 rounded-none"
          : "scale-[0.99] rounded-md",
      )}
    >
      {preview && React.cloneElement(preview, { selectedCaseId })}
    </div>
  </div>
);
