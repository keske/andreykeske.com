import { OrbitControls, PerspectiveCamera, Sky } from "@react-three/drei";

import React from "react";

export const MinecraftNURBSEnvironment: React.FC = () => (
  <>
    <OrbitControls enableRotate={false} enableZoom />
    <Sky />
    <ambientLight intensity={0.3} />
    <PerspectiveCamera fov={15} makeDefault position={[0, 0, 30]} />
  </>
);
