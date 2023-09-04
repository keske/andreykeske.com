import React from "react";

export const useRefs = <T>() => {
  const refsMap = React.useRef(
    new Map<React.Key, React.RefObject<T>>(),
  );

  const getRef = React.useCallback((key: React.Key) => {
    const ref = refsMap.current.get(key);

    if (ref) {
      return ref;
    }

    const createdRef = React.createRef<T>();

    refsMap.current.set(key, createdRef);

    return createdRef;
  }, []);

  return [getRef] as const;
};
