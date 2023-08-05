import React from "react";

export const useValueRef = <T>(
  value: T,
): React.MutableRefObject<T> => {
  const ref = React.useRef<T>(value);

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref;
};
