import { Transition } from "@headlessui/react";
import { OrbitControls, PerspectiveCamera, Sky, View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as R from "ramda";
import React from "react";
import useRefs from "react-use-refs";

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
  NURBSCubeStructureSmallHouse,
  Tab,
} from "@/components/index";
import { useControls } from "@/hooks/index";

const Environment: React.FC = () => (
  <>
    <Sky />
    <OrbitControls autoRotate autoRotateSpeed={0.3} />
    <ambientLight intensity={0.3} />
    <PerspectiveCamera fov={15} makeDefault position={[0, 0, 30]} />
  </>
);

type MinecraftWarpedProps = {
  selectedCaseId?: string | null;
};

export const MinecraftWarped: React.FC<MinecraftWarpedProps> = ({
  selectedCaseId,
}) => {
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
      hidden: R.isNil(selectedCaseId),
    },
  );

  const onUnmount = React.useRef<() => void>();

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

  const [selectedTab, setSelectedTab] = React.useState(0);

  return (
    <div className="h-screen w-screen">
      {selectedTab === 0 && (
        <Canvas className="h-screen w-screen">
          <React.Suspense fallback={null}>
            <Environment />
            <NURBSCubeDirt warpRatio={warpRatio.value} />
          </React.Suspense>
        </Canvas>
      )}
      {selectedTab === 1 && (
        <div className="h-screen w-screen" ref={container}>
          <div className="absolute h-1/3 w-1/2" ref={topLeft} />
          <div className="absolute left-1/2 h-1/3 w-1/2" ref={topRight} />
          <div className="absolute top-1/3 h-1/3 w-1/3" ref={middleLeft} />
          <div
            className="absolute top-1/3 left-1/3 h-1/3 w-1/3"
            ref={middleCenter}
          />
          <div
            className="absolute top-1/3 right-0 h-1/3 w-1/3"
            ref={middleRight}
          />
          <div className="absolute bottom-0 h-1/3 w-1/4" ref={bottomOne} />
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
                <Environment />
                <NURBSCubeDirt warpRatio={warpRatio.value} />
              </View>
              <View index={2} track={topRight}>
                <Environment />
                <NURBSCubeStone warpRatio={warpRatio.value} />
              </View>
              <View index={3} track={middleLeft}>
                <Environment />
                <NURBSCubeSand warpRatio={warpRatio.value} />
              </View>
              <View index={4} track={middleCenter}>
                <Environment />
                <NURBSCubeRedStone warpRatio={warpRatio.value} />
              </View>
              <View index={5} track={middleRight}>
                <Environment />
                <NURBSCubeLog warpRatio={warpRatio.value} />
              </View>
              <View index={6} track={bottomOne}>
                <Environment />
                <NURBSCubeLeaves warpRatio={warpRatio.value} />
              </View>
              <View index={7} track={bottomTwo}>
                <Environment />
                <NURBSCubeGlass warpRatio={warpRatio.value} />
              </View>
              <View index={8} track={bottomThree}>
                <Environment />
                <NURBSCubeGold warpRatio={warpRatio.value} />
              </View>
              <View index={9} track={bottomFour}>
                <Environment />
                <NURBSCubeLava warpRatio={warpRatio.value} />
              </View>
            </React.Suspense>
          </Canvas>
        </div>
      )}
      {selectedTab === 2 && (
        <Canvas className="h-screen w-screen">
          <React.Suspense fallback={null}>
            <Environment />
            <mesh position={[0, -13, -150]}>
              <NURBSCubeStructureSmallHouse warpRatio={warpRatio.value} />
            </mesh>
          </React.Suspense>
        </Canvas>
      )}
      <Transition
        afterLeave={() => onUnmount.current?.()}
        appear
        as={React.Fragment}
        show={R.not(R.isNil(selectedCaseId))}
      >
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed top-40 flex w-screen flex-row items-center justify-center gap-10">
            {["Dirt", "Blocks", "Small House"].map((label, index) => (
              <React.Fragment key={index}>
                <Tab
                  isActive={selectedTab === index}
                  onClick={() => {
                    setSelectedTab(index);
                  }}
                >
                  {label}
                </Tab>
              </React.Fragment>
            ))}
          </div>
        </Transition.Child>
      </Transition>
    </div>
  );
};
