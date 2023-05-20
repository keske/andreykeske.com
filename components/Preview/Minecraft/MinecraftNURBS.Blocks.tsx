import { View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as R from "ramda";
import React from "react";
import useRefs from "react-use-refs";

import { MinecraftNURBSEnvironment } from "./MinecraftNURBS.Environment";

import {
  NURBSCubeDirt,
  NURBSCubeGlass,
  NURBSCubeGold,
  NURBSCubeLava,
  NURBSCubeLeaves,
  NURBSCubeLog,
  NURBSCubeRedStone,
  NURBSCubeSand,
  NURBSCubeStone,
} from "@/components/index";
import { useControls } from "@/hooks/index";
import { useListItems } from "@/stores/index";

export const MinecraftNURBSBlocks: React.FC = () => {
  const { selectedWorkId } = useListItems();

  const { warpRatio } = useControls(
    {
      warpRatio: {
        max: 10,
        min: 0.1,
        step: 0.1,
        value: 0.4,
      },
    },
    {
      hidden: R.isNil(selectedWorkId),
    },
  );

  const [
    bottomOne,
    bottomTwo,
    bottomThree,
    bottomFour,
    container,
    middleLeft,
    middleCenter,
    middleRight,
    topLeft,
    topRight,
  ] = useRefs() as Array<React.MutableRefObject<HTMLInputElement>>;

  return (
    <div className="h-full w-full" ref={container}>
      <div className="absolute h-1/3 w-1/2" ref={topLeft} />
      <div className="absolute left-1/2 h-1/3 w-1/2" ref={topRight} />
      <div
        className="absolute top-1/3 h-1/3 w-1/3"
        ref={middleLeft}
      />
      <div
        className="absolute left-1/3 top-1/3 h-1/3 w-1/3"
        ref={middleCenter}
      />
      <div
        className="absolute right-0 top-1/3 h-1/3 w-1/3"
        ref={middleRight}
      />
      <div
        className="absolute bottom-0 h-1/3 w-1/4"
        ref={bottomOne}
      />
      <div
        className="absolute bottom-0 left-1/4 h-1/3 w-1/4"
        ref={bottomTwo}
      />
      <div
        className="absolute bottom-0 right-1/4 h-1/3 w-1/4"
        ref={bottomThree}
      />
      <div
        className="absolute bottom-0 right-0 h-1/3 w-1/4"
        ref={bottomFour}
      />
      <Canvas className="h-screen w-screen" eventSource={container}>
        <React.Suspense fallback={null}>
          <View index={1} track={topLeft}>
            <MinecraftNURBSEnvironment
              orbitControlsProps={{ enableRotate: true }}
            />
            <NURBSCubeDirt warpRatio={warpRatio.value} />
          </View>
          <View index={2} track={topRight}>
            <MinecraftNURBSEnvironment
              orbitControlsProps={{ enableRotate: true }}
            />
            <NURBSCubeStone warpRatio={warpRatio.value} />
          </View>
          <View index={3} track={middleLeft}>
            <MinecraftNURBSEnvironment
              orbitControlsProps={{ enableRotate: true }}
            />
            <NURBSCubeSand warpRatio={warpRatio.value} />
          </View>
          <View index={4} track={middleCenter}>
            <MinecraftNURBSEnvironment
              orbitControlsProps={{ enableRotate: true }}
            />
            <NURBSCubeRedStone warpRatio={warpRatio.value} />
          </View>
          <View index={5} track={middleRight}>
            <MinecraftNURBSEnvironment
              orbitControlsProps={{ enableRotate: true }}
            />
            <NURBSCubeLog warpRatio={warpRatio.value} />
          </View>
          <View index={6} track={bottomOne}>
            <MinecraftNURBSEnvironment
              orbitControlsProps={{ enableRotate: true }}
            />
            <NURBSCubeLeaves warpRatio={warpRatio.value} />
          </View>
          <View index={7} track={bottomTwo}>
            <MinecraftNURBSEnvironment
              orbitControlsProps={{ enableRotate: true }}
            />
            <NURBSCubeGlass warpRatio={warpRatio.value} />
          </View>
          <View index={8} track={bottomThree}>
            <MinecraftNURBSEnvironment
              orbitControlsProps={{ enableRotate: true }}
            />
            <NURBSCubeGold warpRatio={warpRatio.value} />
          </View>
          <View index={9} track={bottomFour}>
            <MinecraftNURBSEnvironment
              orbitControlsProps={{ enableRotate: true }}
            />
            <NURBSCubeLava warpRatio={warpRatio.value} />
          </View>
        </React.Suspense>
      </Canvas>
    </div>
  );
};
