import {
  OrbitControls,
  PerspectiveCamera,
  Sky,
  Stars,
} from "@react-three/drei";
import React from "react";

// import type { OrbitControls as OrbitControlsType } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

type Props = {
  orbitControlsProps?: Partial<OrbitControlsImpl>;
};

export const MinecraftNURBSEnvironment: React.FC<Props> = ({
  orbitControlsProps,
}) => {
  const isDarkTheme = React.useMemo(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
    [],
  );

  return (
    <>
      {isDarkTheme ? <Stars /> : <Sky />}
      <OrbitControls enableRotate={false} enableZoom {...orbitControlsProps} />
      <ambientLight intensity={0.3} />
      <PerspectiveCamera fov={15} makeDefault position={[0, 0, 30]} />
    </>
  );
};
