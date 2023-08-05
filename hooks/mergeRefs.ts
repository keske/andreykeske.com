import React from "react";

export const mergeRefs =
  <T>(...refs: React.Ref<T>[]) =>
  (node: T | null) => {
    refs.forEach((ref) => {
      if (ref instanceof Function) {
        ref(node);
      } else if (ref !== null) {
        (ref as React.MutableRefObject<T | null>).current = node;
      }
    });
  };
