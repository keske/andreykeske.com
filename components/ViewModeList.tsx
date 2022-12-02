import clsx from "clsx";
import * as R from "ramda";
import React from "react";

import { CloseButton } from "@/components/index";
import { useListItems } from "@/stores/index";

const ViewModeList = () => {
  const { items } = useListItems();

  const [selectedCaseTitle, setSelectedCaseTitle] = React.useState<
    string | null
  >(null);

  const [preview, setPreview] = React.useState<React.ReactNode>(null);

  const handleShowCase = React.useCallback((title: string) => {
    setSelectedCaseTitle(title);
  }, []);

  const handleCloseCase = React.useCallback(() => {
    setSelectedCaseTitle(null);
    setPreview(null);
  }, []);

  const handleMouseOut = React.useCallback(() => {
    if (R.isNil(selectedCaseTitle)) {
      setPreview(null);
    }
  }, [selectedCaseTitle]);

  const handleMouseOver = React.useCallback(
    (component: React.ReactNode) => {
      if (R.isNil(selectedCaseTitle)) {
        setPreview(component);
      }
    },
    [selectedCaseTitle],
  );

  return (
    <>
      <div className="absolute top-0">{preview}</div>
      <div className="absolute top-10">
        <ul>
          {items.map(({ component: PreviewComponent, title }, index) => (
            <li
              className={clsx(
                "cursor-pointer list-none text-lg font-bold",
                title === selectedCaseTitle || R.isNil(selectedCaseTitle)
                  ? "opacity-100"
                  : "opacity-10",
              )}
              key={index}
              onClick={() => {
                handleShowCase(title);
              }}
              onMouseOut={handleMouseOut}
              onMouseOver={() => {
                handleMouseOver(<PreviewComponent />);
              }}
            >
              {title}
            </li>
          ))}
        </ul>
      </div>
      <CloseButton
        isShowing={R.not(R.isNil(selectedCaseTitle))}
        onClick={handleCloseCase}
      />
    </>
  );
};

export default ViewModeList;
