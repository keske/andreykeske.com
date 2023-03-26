import {
  Box,
  Environment,
  Icosahedron,
  MeshDistortMaterial,
  OrbitControls,
  Text,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import axios from "axios";
import React from "react";
import * as THREE from "three";

import { NURBSNewsPaper, WorkDetails } from "@/components/index";

export const CrumpledNewspaper: React.FC = () => {
  const renderNURBS = React.useMemo(
    () => <NURBSNewsPaper url="images/new-yorker.png" />,
    [],
  );

  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col items-center">
        <div className="h-screen w-screen">
          <Canvas camera={{ position: [0, 0, -10] }} className="h-full w-full">
            <ambientLight intensity={0.8} />
            <Environment preset="sunset" />
            <OrbitControls />
            {renderNURBS}
          </Canvas>
        </div>
      </div>
    </div>
  );
};
