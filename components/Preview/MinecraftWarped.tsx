import { Transition } from "@headlessui/react";
import { OrbitControls, PerspectiveCamera, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as R from "ramda";
import React from "react";

import {
  NURBSCubeDirt,
  NURBSCubeStructureSmallHouse,
  Tab,
} from "@/components/index";
import { useControls } from "@/hooks/index";

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

  const [selectedTab, setSelectedTab] = React.useState(0);

  return (
    <div className="h-screen w-screen">
      {selectedTab === 0 && (
        <Canvas className="h-screen w-screen">
          <React.Suspense fallback={null}>
            <Sky />
            <OrbitControls />
            <ambientLight intensity={0.2} />
            <PerspectiveCamera fov={35} makeDefault position={[0, 0, 30]} />
            <NURBSCubeDirt warpRatio={warpRatio.value} />
          </React.Suspense>
        </Canvas>
      )}
      {selectedTab === 1 && (
        <Canvas className="h-screen w-screen">
          <React.Suspense fallback={null}>
            <Sky />
            <OrbitControls />
            <ambientLight intensity={0.2} />
            <PerspectiveCamera fov={35} makeDefault position={[10, 20, 100]} />
            <mesh position={[0, -10, 0]}>
              <NURBSCubeStructureSmallHouse warpRatio={warpRatio.value} />
            </mesh>
          </React.Suspense>
        </Canvas>
      )}
      {selectedTab === 2 && (
        <Canvas className="h-screen w-screen">
          <React.Suspense fallback={null}>
            <Sky />
            <OrbitControls />
            <ambientLight intensity={0.2} />
            <PerspectiveCamera fov={55} makeDefault position={[0, 0, 30]} />
            <NURBSCubeDirt warpRatio={warpRatio.value} />
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
            {["Cube", "Small House", "Biom"].map((label, index) => (
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
