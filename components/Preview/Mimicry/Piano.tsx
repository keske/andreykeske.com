import React from "react";

import { WorkDetails } from "@/components";
import { Button } from "@/packages/ui-kit";

export const Piano = () => {
  const handleClick = React.useCallback(() => {
    ["do", "re", "mi", "fa", "sol", "la", "si"]
      .reverse()
      .forEach((note) => {
        window.open(`/works/note/${note}`, "_blank");
      });
  }, []);

  const isDarkTheme = React.useMemo(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
    [],
  );

  const src = React.useMemo(
    () =>
      `/svgs/piano-tabs/browser-tabs-${
        isDarkTheme ? "dark" : "light"
      }.svg`,
    [isDarkTheme],
  );

  return (
    <div className="flex flex-col items-center gap-20 pb-20 pt-56">
      <div className="flex w-full flex-col items-center gap-5">
        <WorkDetails>
          <div className="flex w-full flex-col items-center gap-4">
            <h3>The piano tabs</h3>
            <small>
              The process of switching tabs resembles playing a piano
              and makes tabs a perfect musical instrument!
            </small>
            <small>
              Every tab has a music tone assigned. Seven tabs is one
              octave
            </small>
            <img src={src} />
            <div className="flex flex-col gap-4">
              <Button onClick={handleClick}>Open tabs</Button>
              <small className="text-center opacity-50">
                It will open 7 tabs for each note
              </small>
            </div>
            <time dateTime="2015">2015</time>
          </div>
        </WorkDetails>
      </div>
    </div>
  );
};
