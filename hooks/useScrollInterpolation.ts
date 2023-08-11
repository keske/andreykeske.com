import { useGesture } from "@use-gesture/react";
import React from "react";

import { interpolate } from "@/utils";

export const useScrollInterpolation = (
  from: number,
  to: number,
  initialValue: number,
) => {
  const [opacity, setOpacity] = React.useState(initialValue);

  useGesture(
    {
      onScroll: () => {
        const { clientHeight, scrollHeight, scrollTop } =
          document.documentElement;

        const opacityValue = interpolate(
          [0, scrollHeight - clientHeight],
          [from, to],
          scrollTop,
        );

        setOpacity(opacityValue);
      },
    },
    { target: window },
  );

  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return opacity;
};
