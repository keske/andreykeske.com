import React from "react";

type Vector2 = [x: number, y: number];

export const useVector2 = (
  initialVector2: Vector2 = [0, 0],
): [Vector2, React.Dispatch<React.SetStateAction<Vector2>>] => {
  const [vector3, setVector2] =
    React.useState<Vector2>(initialVector2);

  return [vector3, setVector2];
};
