/* eslint max-lines: 0 */

import * as React from "react";

import Dirt from "./Block.Dirt";
import Log from "./Block.Gold";
import Stone from "./Block.Stone";

import type { Block as BlockProps } from "./@types";

type Props = BlockProps;

const SmallHouse: React.FC<Props> = ({ position, radius, ...rest }: Props) => {
  const renderFirstLayer = React.useMemo(
    () => (
      <>
        <group position={[0, 0, 0]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[radius, 0, 0]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius, 0, 0]}>
          <Log {...{ ...rest, radius }} />
        </group>

        <group position={[0, 0, radius]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[radius, 0, radius]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius, 0, radius]}>
          <Log {...{ ...rest, radius }} />
        </group>

        <group position={[0, 0, -radius]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[radius, 0, -radius]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius, 0, -radius]}>
          <Log {...{ ...rest, radius }} />
        </group>

        <group position={[radius * 2, 0, radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[radius * 2, 0, -radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius * 2, 0, -radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius * 2, 0, radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>

        <group position={[-radius * 2, 0, 0]}>
          <Stone {...{ ...rest, radius }} />
        </group>
        <group position={[-radius * 2, 0, -radius]}>
          <Stone {...{ ...rest, radius }} />
        </group>
        <group position={[-radius * 2, 0, radius]}>
          <Stone {...{ ...rest, radius }} />
        </group>

        <group position={[radius * 2, 0, 0]}>
          <Stone {...{ ...rest, radius }} />
        </group>
        <group position={[radius * 2, 0, -radius]}>
          <Stone {...{ ...rest, radius }} />
        </group>
        <group position={[radius * 2, 0, radius]}>
          <Stone {...{ ...rest, radius }} />
        </group>

        <group position={[radius, 0, radius * 2]}>
          <Stone {...{ ...rest, radius }} />
        </group>
        <group position={[0, 0, radius * 2]}>
          <Stone {...{ ...rest, radius }} />
        </group>
        <group position={[-radius, 0, radius * 2]}>
          <Stone {...{ ...rest, radius }} />
        </group>

        <group position={[radius, 0, -radius * 2]}>
          <Stone {...{ ...rest, radius }} />
        </group>
        <group position={[0, 0, -radius * 2]}>
          <Stone {...{ ...rest, radius }} />
        </group>
        <group position={[-radius, 0, -radius * 2]}>
          <Stone {...{ ...rest, radius }} />
        </group>
      </>
    ),
    [radius, rest]
  );

  const renderSecondLayer = React.useMemo(() => {
    const y = radius;

    return (
      <>
        <group position={[radius * 2, y, radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[radius * 2, y, -radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius * 2, y, -radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius * 2, y, radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>

        <group position={[-radius * 2, y, 0]}>
          <Dirt {...{ ...rest, radius }} />
        </group>
        <group position={[-radius * 2, y, -radius]}>
          <Dirt {...{ ...rest, radius }} />
        </group>
        <group position={[-radius * 2, y, radius]}>
          <Dirt {...{ ...rest, radius }} />
        </group>

        <group position={[radius * 2, y, 0]}>
          <Dirt {...{ ...rest, radius }} />
        </group>
        <group position={[radius * 2, y, -radius]}>
          <Dirt {...{ ...rest, radius }} />
        </group>
        <group position={[radius * 2, y, radius]}>
          <Dirt {...{ ...rest, radius }} />
        </group>

        <group position={[radius, y, radius * 2]}>
          <Dirt {...{ ...rest, radius }} />
        </group>
        {/* DOOR */}
        <group position={[-radius, y, radius * 2]}>
          <Dirt {...{ ...rest, radius }} />
        </group>

        <group position={[radius, y, -radius * 2]}>
          <Dirt {...{ ...rest, radius }} />
        </group>
        <group position={[0, y, -radius * 2]}>
          <Dirt {...{ ...rest, radius }} />
        </group>
        <group position={[-radius, y, -radius * 2]}>
          <Dirt {...{ ...rest, radius }} />
        </group>
      </>
    );
  }, [radius, rest]);

  const renderThirdLayer = React.useMemo(() => {
    const y = radius * 2;

    return (
      <>
        <group position={[radius * 2, y, radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[radius * 2, y, -radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius * 2, y, -radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius * 2, y, radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>

        <group position={[-radius * 2, y, -radius]}>
          <Dirt {...{ ...rest, radius }} />
        </group>
        {/* WINDOW */}
        <group position={[-radius * 2, y, radius]}>
          <Dirt {...{ ...rest, radius }} />
        </group>

        <group position={[radius * 2, y, -radius]}>
          <Dirt {...{ ...rest, radius }} />
        </group>
        {/* WINDOW */}
        <group position={[radius * 2, y, radius]}>
          <Dirt {...{ ...rest, radius }} />
        </group>

        <group position={[radius, y, radius * 2]}>
          <Dirt {...{ ...rest, radius }} />
        </group>
        {/* DOOR */}
        <group position={[-radius, y, radius * 2]}>
          <Dirt {...{ ...rest, radius }} />
        </group>

        <group position={[radius, y, -radius * 2]}>
          <Dirt {...{ ...rest, radius }} />
        </group>
        {/* WINDOW */}
        <group position={[-radius, y, -radius * 2]}>
          <Dirt {...{ ...rest, radius }} />
        </group>
      </>
    );
  }, [radius, rest]);

  const renderFourthLayer = React.useMemo(() => {
    const y = radius * 3;

    return (
      <>
        <group position={[radius * 2, y, radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[radius * 2, y, -radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius * 2, y, -radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius * 2, y, radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>

        <group position={[-radius * 2, y, 0]}>
          <Dirt {...{ ...rest, radius }} />
        </group>
        <group position={[-radius * 2, y, -radius]}>
          <Dirt {...{ ...rest, radius }} />
        </group>
        <group position={[-radius * 2, y, radius]}>
          <Dirt {...{ ...rest, radius }} />
        </group>

        <group position={[radius * 2, y, 0]}>
          <Dirt {...{ ...rest, radius }} />
        </group>
        <group position={[radius * 2, y, -radius]}>
          <Dirt {...{ ...rest, radius }} />
        </group>
        <group position={[radius * 2, y, radius]}>
          <Dirt {...{ ...rest, radius }} />
        </group>

        <group position={[radius, y, radius * 2]}>
          <Dirt {...{ ...rest, radius }} />
        </group>
        {/* DOOR */}
        <group position={[-radius, y, radius * 2]}>
          <Dirt {...{ ...rest, radius }} />
        </group>

        <group position={[radius, y, -radius * 2]}>
          <Dirt {...{ ...rest, radius }} />
        </group>
        <group position={[0, y, -radius * 2]}>
          <Dirt {...{ ...rest, radius }} />
        </group>
        <group position={[-radius, y, -radius * 2]}>
          <Dirt {...{ ...rest, radius }} />
        </group>
      </>
    );
  }, [radius, rest]);

  const sixthLayer = React.useMemo(() => {
    const y = radius * 4;

    return (
      <>
        <group position={[radius * 2, y, radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[radius * 2, y, -radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius * 2, y, -radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius * 2, y, radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>

        <group position={[-radius * 2, y, 0]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius * 2, y, -radius]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius * 2, y, radius]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius * 3, y, 0]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius * 3, y, -radius]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius * 3, y, radius]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius * 3, y, radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius * 3, y, radius * 3]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius * 3, y, -radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius * 3, y, -radius * 3]}>
          <Log {...{ ...rest, radius }} />
        </group>

        <group position={[radius * 2, y, 0]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[radius * 2, y, -radius]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[radius * 2, y, radius]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[radius * 3, y, radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[radius * 3, y, 0]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[radius * 3, y, -radius]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[radius * 3, y, radius * 3]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[radius * 3, y, radius]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[radius * 3, y, -radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[radius * 3, y, -radius * 3]}>
          <Log {...{ ...rest, radius }} />
        </group>

        <group position={[radius, y, radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[0, y, radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius, y, radius * 3]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[radius * 2, y, radius * 3]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[radius, y, radius * 3]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[0, y, radius * 3]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius, y, radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius * 2, y, radius * 3]}>
          <Log {...{ ...rest, radius }} />
        </group>

        <group position={[radius, y, -radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[0, y, -radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius, y, -radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>

        <group position={[radius * 2, y, -radius * 3]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[radius, y, -radius * 3]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[0, y, -radius * 3]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius, y, -radius * 3]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius * 2, y, -radius * 3]}>
          <Log {...{ ...rest, radius }} />
        </group>
      </>
    );
  }, [radius, rest]);

  const seventhLayer = React.useMemo(() => {
    const y = radius * 5;

    return (
      <>
        <group position={[radius * 2, y, radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[radius * 2, y, -radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius * 2, y, -radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius * 2, y, radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>

        <group position={[-radius, y, 0]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius, y, -radius]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius, y, radius]}>
          <Log {...{ ...rest, radius }} />
        </group>

        <group position={[-radius * 2, y, 0]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius * 2, y, -radius]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius * 2, y, radius]}>
          <Log {...{ ...rest, radius }} />
        </group>

        <group position={[radius, y, 0]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[radius, y, -radius]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[radius, y, radius]}>
          <Log {...{ ...rest, radius }} />
        </group>

        <group position={[radius * 2, y, 0]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[radius * 2, y, -radius]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[radius * 2, y, radius]}>
          <Log {...{ ...rest, radius }} />
        </group>

        <group position={[radius, y, radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[0, y, radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>

        <group position={[-radius, y, radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>

        <group position={[radius, y, -radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[0, y, -radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius, y, -radius * 2]}>
          <Log {...{ ...rest, radius }} />
        </group>

        <group position={[0, y, -radius]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[0, y, radius]}>
          <Log {...{ ...rest, radius }} />
        </group>
      </>
    );
  }, [radius, rest]);

  const eighthLayer = React.useMemo(() => {
    const y = radius * 6;

    return (
      <>
        <group position={[0, y, -radius]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[0, y, radius]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[radius, y, -radius]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius, y, radius]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[radius, y, radius]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius, y, -radius]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[radius, y, 0]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[-radius, y, 0]}>
          <Log {...{ ...rest, radius }} />
        </group>
        <group position={[0, y, 0]}>
          <Log {...{ ...rest, radius }} />
        </group>
      </>
    );
  }, [radius, rest]);

  return (
    <group>
      {renderFirstLayer}
      {renderSecondLayer}
      {renderThirdLayer}
      {renderFourthLayer}
      {sixthLayer}
      {seventhLayer}
      {eighthLayer}
    </group>
  );
};

export default SmallHouse;
