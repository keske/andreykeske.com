import React from "react";
import { Group } from "three";

import {
  NURBSCubeDirt,
  NURBSCubeLog,
  NURBSCubeStone,
} from "@/components/index";

export const NURBSCubeStructureSmallHouse = React.forwardRef<
  Group,
  JSX.IntrinsicElements["group"] & {
    warpRatio: number;
  }
>(({ ...props }, forwardedRef) => {
  const radius = 4;

  const renderFirstLayer = React.useMemo(
    () => (
      <>
        <group position={[0, 0, 0]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[radius, 0, 0]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius, 0, 0]}>
          <NURBSCubeLog {...props} />
        </group>

        <group position={[0, 0, radius]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[radius, 0, radius]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius, 0, radius]}>
          <NURBSCubeLog {...props} />
        </group>

        <group position={[0, 0, -radius]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[radius, 0, -radius]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius, 0, -radius]}>
          <NURBSCubeLog {...props} />
        </group>

        <group position={[radius * 2, 0, radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[radius * 2, 0, -radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius * 2, 0, -radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius * 2, 0, radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>

        <group position={[-radius * 2, 0, 0]}>
          <NURBSCubeStone {...props} />
        </group>
        <group position={[-radius * 2, 0, -radius]}>
          <NURBSCubeStone {...props} />
        </group>
        <group position={[-radius * 2, 0, radius]}>
          <NURBSCubeStone {...props} />
        </group>

        <group position={[radius * 2, 0, 0]}>
          <NURBSCubeStone {...props} />
        </group>
        <group position={[radius * 2, 0, -radius]}>
          <NURBSCubeStone {...props} />
        </group>
        <group position={[radius * 2, 0, radius]}>
          <NURBSCubeStone {...props} />
        </group>

        <group position={[radius, 0, radius * 2]}>
          <NURBSCubeStone {...props} />
        </group>
        <group position={[0, 0, radius * 2]}>
          <NURBSCubeStone {...props} />
        </group>
        <group position={[-radius, 0, radius * 2]}>
          <NURBSCubeStone {...props} />
        </group>

        <group position={[radius, 0, -radius * 2]}>
          <NURBSCubeStone {...props} />
        </group>
        <group position={[0, 0, -radius * 2]}>
          <NURBSCubeStone {...props} />
        </group>
        <group position={[-radius, 0, -radius * 2]}>
          <NURBSCubeStone {...props} />
        </group>
      </>
    ),
    [radius, props],
  );

  const renderSecondLayer = React.useMemo(() => {
    const y = radius;

    return (
      <>
        <group position={[radius * 2, y, radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[radius * 2, y, -radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius * 2, y, -radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius * 2, y, radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>

        <group position={[-radius * 2, y, 0]}>
          <NURBSCubeDirt {...props} />
        </group>
        <group position={[-radius * 2, y, -radius]}>
          <NURBSCubeDirt {...props} />
        </group>
        <group position={[-radius * 2, y, radius]}>
          <NURBSCubeDirt {...props} />
        </group>

        <group position={[radius * 2, y, 0]}>
          <NURBSCubeDirt {...props} />
        </group>
        <group position={[radius * 2, y, -radius]}>
          <NURBSCubeDirt {...props} />
        </group>
        <group position={[radius * 2, y, radius]}>
          <NURBSCubeDirt {...props} />
        </group>

        <group position={[radius, y, radius * 2]}>
          <NURBSCubeDirt {...props} />
        </group>
        {/* DOOR */}
        <group position={[-radius, y, radius * 2]}>
          <NURBSCubeDirt {...props} />
        </group>

        <group position={[radius, y, -radius * 2]}>
          <NURBSCubeDirt {...props} />
        </group>
        <group position={[0, y, -radius * 2]}>
          <NURBSCubeDirt {...props} />
        </group>
        <group position={[-radius, y, -radius * 2]}>
          <NURBSCubeDirt {...props} />
        </group>
      </>
    );
  }, [radius, props]);

  const renderThirdLayer = React.useMemo(() => {
    const y = radius * 2;

    return (
      <>
        <group position={[radius * 2, y, radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[radius * 2, y, -radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius * 2, y, -radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius * 2, y, radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>

        <group position={[-radius * 2, y, -radius]}>
          <NURBSCubeDirt {...props} />
        </group>
        {/* WINDOW */}
        <group position={[-radius * 2, y, radius]}>
          <NURBSCubeDirt {...props} />
        </group>

        <group position={[radius * 2, y, -radius]}>
          <NURBSCubeDirt {...props} />
        </group>
        {/* WINDOW */}
        <group position={[radius * 2, y, radius]}>
          <NURBSCubeDirt {...props} />
        </group>

        <group position={[radius, y, radius * 2]}>
          <NURBSCubeDirt {...props} />
        </group>
        {/* DOOR */}
        <group position={[-radius, y, radius * 2]}>
          <NURBSCubeDirt {...props} />
        </group>

        <group position={[radius, y, -radius * 2]}>
          <NURBSCubeDirt {...props} />
        </group>
        {/* WINDOW */}
        <group position={[-radius, y, -radius * 2]}>
          <NURBSCubeDirt {...props} />
        </group>
      </>
    );
  }, [radius, props]);

  const renderFourthLayer = React.useMemo(() => {
    const y = radius * 3;

    return (
      <>
        <group position={[radius * 2, y, radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[radius * 2, y, -radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius * 2, y, -radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius * 2, y, radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>

        <group position={[-radius * 2, y, 0]}>
          <NURBSCubeDirt {...props} />
        </group>
        <group position={[-radius * 2, y, -radius]}>
          <NURBSCubeDirt {...props} />
        </group>
        <group position={[-radius * 2, y, radius]}>
          <NURBSCubeDirt {...props} />
        </group>

        <group position={[radius * 2, y, 0]}>
          <NURBSCubeDirt {...props} />
        </group>
        <group position={[radius * 2, y, -radius]}>
          <NURBSCubeDirt {...props} />
        </group>
        <group position={[radius * 2, y, radius]}>
          <NURBSCubeDirt {...props} />
        </group>

        <group position={[radius, y, radius * 2]}>
          <NURBSCubeDirt {...props} />
        </group>
        {/* DOOR */}
        <group position={[-radius, y, radius * 2]}>
          <NURBSCubeDirt {...props} />
        </group>

        <group position={[radius, y, -radius * 2]}>
          <NURBSCubeDirt {...props} />
        </group>
        <group position={[0, y, -radius * 2]}>
          <NURBSCubeDirt {...props} />
        </group>
        <group position={[-radius, y, -radius * 2]}>
          <NURBSCubeDirt {...props} />
        </group>
      </>
    );
  }, [radius, props]);

  const sixthLayer = React.useMemo(() => {
    const y = radius * 4;

    return (
      <>
        <group position={[radius * 2, y, radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[radius * 2, y, -radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius * 2, y, -radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius * 2, y, radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>

        <group position={[-radius * 2, y, 0]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius * 2, y, -radius]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius * 2, y, radius]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius * 3, y, 0]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius * 3, y, -radius]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius * 3, y, radius]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius * 3, y, radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius * 3, y, radius * 3]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius * 3, y, -radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius * 3, y, -radius * 3]}>
          <NURBSCubeLog {...props} />
        </group>

        <group position={[radius * 2, y, 0]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[radius * 2, y, -radius]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[radius * 2, y, radius]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[radius * 3, y, radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[radius * 3, y, 0]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[radius * 3, y, -radius]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[radius * 3, y, radius * 3]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[radius * 3, y, radius]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[radius * 3, y, -radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[radius * 3, y, -radius * 3]}>
          <NURBSCubeLog {...props} />
        </group>

        <group position={[radius, y, radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[0, y, radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius, y, radius * 3]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[radius * 2, y, radius * 3]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[radius, y, radius * 3]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[0, y, radius * 3]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius, y, radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius * 2, y, radius * 3]}>
          <NURBSCubeLog {...props} />
        </group>

        <group position={[radius, y, -radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[0, y, -radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius, y, -radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>

        <group position={[radius * 2, y, -radius * 3]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[radius, y, -radius * 3]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[0, y, -radius * 3]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius, y, -radius * 3]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius * 2, y, -radius * 3]}>
          <NURBSCubeLog {...props} />
        </group>
      </>
    );
  }, [radius, props]);

  const seventhLayer = React.useMemo(() => {
    const y = radius * 5;

    return (
      <>
        <group position={[radius * 2, y, radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[radius * 2, y, -radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius * 2, y, -radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius * 2, y, radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>

        <group position={[-radius, y, 0]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius, y, -radius]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius, y, radius]}>
          <NURBSCubeLog {...props} />
        </group>

        <group position={[-radius * 2, y, 0]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius * 2, y, -radius]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius * 2, y, radius]}>
          <NURBSCubeLog {...props} />
        </group>

        <group position={[radius, y, 0]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[radius, y, -radius]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[radius, y, radius]}>
          <NURBSCubeLog {...props} />
        </group>

        <group position={[radius * 2, y, 0]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[radius * 2, y, -radius]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[radius * 2, y, radius]}>
          <NURBSCubeLog {...props} />
        </group>

        <group position={[radius, y, radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[0, y, radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>

        <group position={[-radius, y, radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>

        <group position={[radius, y, -radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[0, y, -radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius, y, -radius * 2]}>
          <NURBSCubeLog {...props} />
        </group>

        <group position={[0, y, -radius]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[0, y, radius]}>
          <NURBSCubeLog {...props} />
        </group>
      </>
    );
  }, [radius, props]);

  const eighthLayer = React.useMemo(() => {
    const y = radius * 6;

    return (
      <>
        <group position={[0, y, -radius]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[0, y, radius]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[radius, y, -radius]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius, y, radius]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[radius, y, radius]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius, y, -radius]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[radius, y, 0]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[-radius, y, 0]}>
          <NURBSCubeLog {...props} />
        </group>
        <group position={[0, y, 0]}>
          <NURBSCubeLog {...props} />
        </group>
      </>
    );
  }, [radius, props]);

  return (
    <group ref={forwardedRef}>
      {renderFirstLayer}
      {renderSecondLayer}
      {renderThirdLayer}
      {renderFourthLayer}
      {sixthLayer}
      {seventhLayer}
      {eighthLayer}
    </group>
  );
});
