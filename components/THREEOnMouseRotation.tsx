import { useMove } from "@use-gesture/react";
import React from "react";
import { BufferGeometry, Material, Mesh } from "three";

type Props = {
  children: React.ReactNode;
  strength?: number;
};

type Ref = Mesh<BufferGeometry, Material | Material[]>;

export const THREEOnMouseRotation = React.forwardRef<Ref, Props>(
  // @ts-ignore
  ({ children, strength = 0.001 }, ref: Ref) => {
    useMove(
      (state) => {
        // @ts-ignore
        ref.current.rotation.z += state.delta[0] * strength;
        // @ts-ignore
        ref.current.rotation.x += state.delta[1] * strength;
      },
      { target: document },
    );

    return children;
  },
);
