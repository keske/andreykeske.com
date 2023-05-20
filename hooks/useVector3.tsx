import React from "react";

type Vector3 = [x: number, y: number, z: number];

export const useVector3 = (
  initialVector3: Vector3 = [0, 0, 0],
): [Vector3, React.Dispatch<React.SetStateAction<Vector3>>] => {
  const [vector3, setVector3] = React.useState<Vector3>(initialVector3);

  return [vector3, setVector3];
};
