import { useMove } from "@use-gesture/react";
import React from "react";
import * as THREE from "three";

type Props = React.PropsWithChildren & {
  ref: React.MutableRefObject<
    THREE.Mesh<
      THREE.BufferGeometry,
      THREE.Material | THREE.Material[]
    >
  >;
  strength?: number;
};

export const THREEOnMouseRotation: React.FC<Props> = ({
  children,
  ref,
  strength = 0.001,
}) => {
  useMove(
    (state) => {
      if (ref && ref.current) {
        ref.current.rotation.z += -state.delta[0] * strength;
        ref.current.rotation.x += -state.delta[1] * strength;
      }
    },
    { target: document },
  );

  return <>{children}</>;
};
