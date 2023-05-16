import React from "react";

type Size = {
  height: number;
  width: number;
};

export const useSize = (
  initialSize: Size = { height: 0, width: 0 },
): [Size, React.Dispatch<React.SetStateAction<Size>>] => {
  const [size, setSize] = React.useState<Size>(initialSize);

  return [size, setSize];
};
