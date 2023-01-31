import { OrbitControls, PerspectiveCamera, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Group } from "three";

import {
  NURBSCubeDirt,
  NURBSCubeStructureSmallHouse,
  Tab,
} from "@/components/index";

const LightAndCamera = () => (
  <group>
    <Sky
      {...{
        azimuth: 180,
        distance: 13000,
        mieCoefficient: 0.005,
        mieDirectionalG: 0.7,
        rayleigh: 3,
        turbidity: 10,
      }}
    />
    <ambientLight intensity={0.2} />
    <spotLight
      angle={Math.PI / 6}
      castShadow
      intensity={0.2}
      position={[20, 20, 30]}
      shadow-bias={-0.00005}
      shadow-mapSize-height={2048}
      shadow-mapSize-width={2048}
    />
    <OrbitControls />
  </group>
);

type MinecraftWarpedProps = {
  selectedCaseId?: string | null;
};

export const MinecraftWarped: React.FC<MinecraftWarpedProps> = ({
  selectedCaseId,
}) => {
  const dirt = React.useRef() as React.MutableRefObject<Group>;

  const [selectedTab, setSelectedTab] = React.useState(1);

  return (
    <div className="h-screen w-screen">
      {selectedTab === 1 && (
        <Canvas className="h-screen w-screen">
          <React.Suspense fallback={null}>
            <LightAndCamera />
            <PerspectiveCamera fov={35} makeDefault position={[0, 0, 30]} />
            <NURBSCubeDirt />
          </React.Suspense>
        </Canvas>
      )}
      {selectedTab === 2 && (
        <Canvas className="h-screen w-screen">
          <React.Suspense fallback={null}>
            <LightAndCamera />
            <PerspectiveCamera fov={35} makeDefault position={[10, 20, 90]} />
            <NURBSCubeStructureSmallHouse />
          </React.Suspense>
        </Canvas>
      )}
      {selectedTab === 3 && (
        <Canvas className="h-screen w-screen">
          <React.Suspense fallback={null}>
            <LightAndCamera />
            <PerspectiveCamera fov={55} makeDefault position={[0, 0, 30]} />
            <NURBSCubeDirt />
          </React.Suspense>
        </Canvas>
      )}

      <div className="fixed top-40 flex w-screen flex-row items-center justify-center gap-10">
        <Tab
          isActive={selectedTab === 1}
          onClick={() => {
            setSelectedTab(1);
          }}
        >
          Cube
        </Tab>
        <Tab
          isActive={selectedTab === 2}
          onClick={() => {
            setSelectedTab(2);
          }}
        >
          Small House
        </Tab>
        <Tab
          isActive={selectedTab === 3}
          onClick={() => {
            setSelectedTab(3);
          }}
        >
          Biom
        </Tab>
      </div>
    </div>
  );
};
