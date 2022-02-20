import * as React from "react";

import Log from "./Block.Log";
import Leaves from "./Block.Leaves";

import type { Block as BlockProps } from "./@types";

type Props = BlockProps;

const Tree: React.FC<Props> = ({ position, radius, ...rest }: Props) => (
  <group>
    <group position={[0, 0, 0]}>
      <Log {...{ ...rest, radius }} />
    </group>
    <group position={[0, radius, 0]}>
      <Log {...{ ...rest, radius }} />
    </group>
    <group position={[0, radius * 2, 0]}>
      <Log {...{ ...rest, radius }} />
    </group>
    <group position={[0, radius * 3, 0]}>
      <Log {...{ ...rest, radius }} />
    </group>
    <group position={[0, radius * 4, 0]}>
      <Log {...{ ...rest, radius }} />
    </group>

    <group position={[0, radius * 6, 0]}>
      <Leaves {...{ ...rest, radius }} />
    </group>
    <group position={[radius, radius * 3, 0]}>
      <Leaves {...{ ...rest, radius }} />
    </group>
    <group position={[-radius, radius * 3, 0]}>
      <Leaves {...{ ...rest, radius }} />
    </group>
    <group position={[radius, radius * 3, radius]}>
      <Leaves {...{ ...rest, radius }} />
    </group>
    <group position={[-radius, radius * 3, -radius]}>
      <Leaves {...{ ...rest, radius }} />
    </group>
    <group position={[radius, radius * 4, 0]}>
      <Leaves {...{ ...rest, radius }} />
    </group>
    <group position={[-radius, radius * 4, -radius]}>
      <Leaves {...{ ...rest, radius }} />
    </group>
    <group position={[radius, radius * 4, -radius]}>
      <Leaves {...{ ...rest, radius }} />
    </group>
    <group position={[radius, radius * 4, radius]}>
      <Leaves {...{ ...rest, radius }} />
    </group>
    <group position={[-radius, radius * 4, radius]}>
      <Leaves {...{ ...rest, radius }} />
    </group>
    <group position={[-radius, radius * 4, 0]}>
      <Leaves {...{ ...rest, radius }} />
    </group>
    <group position={[0, radius * 4, radius]}>
      <Leaves {...{ ...rest, radius }} />
    </group>
    <group position={[0, radius * 4, -radius]}>
      <Leaves {...{ ...rest, radius }} />
    </group>
    <group position={[0, radius * 5, 0]}>
      <Leaves {...{ ...rest, radius }} />
    </group>
    <group position={[0, radius * 5, radius]}>
      <Leaves {...{ ...rest, radius }} />
    </group>
    <group position={[0, radius * 5, -radius]}>
      <Leaves {...{ ...rest, radius }} />
    </group>
  </group>
);

export default Tree;
