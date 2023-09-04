import React from "react";

import { isBrowser } from "./isBrowser";
import { useValueRef } from "./useValueRef";

export const useResizeObserver = <T extends Element>(
  options: {
    enabled?: boolean;
    onResize?: (entry: ResizeObserverEntry) => void;
    ref?: React.RefObject<T>;
  } = {},
) => {
  const {
    enabled = true,
    onResize = () => {},
    ref: propTargetRef,
  } = options;

  const innerTargetRef = React.useRef<T>(null);

  const targetRef = propTargetRef ?? innerTargetRef;

  const onResizeRef = useValueRef(onResize);

  const resizeObserver = React.useMemo(() => {
    if (isBrowser() && enabled) {
      return new ResizeObserver((entries: ResizeObserverEntry[]) => {
        const entry = entries[0];

        if (entry) {
          onResizeRef.current?.(entry);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);

  React.useEffect(() => {
    const target = targetRef.current;

    if (isBrowser() && resizeObserver && target) {
      resizeObserver.observe(target);

      return () => {
        resizeObserver.unobserve(target);
        resizeObserver.disconnect();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resizeObserver]);

  return { ref: targetRef };
};
