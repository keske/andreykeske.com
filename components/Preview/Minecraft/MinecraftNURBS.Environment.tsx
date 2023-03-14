import {
  OrbitControls,
  PerspectiveCamera,
  Sky,
  Stars,
} from "@react-three/drei";

import React from "react";

export const MinecraftNURBSEnvironment: React.FC = () => {
  const isDarkTheme = React.useMemo(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
    [],
  );

  return (
    <>
      {isDarkTheme ? <Stars /> : <Sky />}
      <OrbitControls enableRotate={false} enableZoom />
      <ambientLight intensity={0.3} />
      <PerspectiveCamera fov={15} makeDefault position={[0, 0, 30]} />
    </>
  );
};
