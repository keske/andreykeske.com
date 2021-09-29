import * as React from 'react';

// Libs
import { useFrame } from 'react-three-fiber';

type Props = {
  children: React.ReactNode;
  rotation: "disabled" | "enabled";
};

const WarpedMinecraftCaseAutoRotation: React.FC<Props> = ({
  children,
  rotation,
}: Props) => {
  const ref = React.useRef<
    HTMLDivElement & {
      rotation;
    }
  >();

  useFrame(() => {
    if (rotation === "enabled") {
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <mesh ref={ref}>{children}</mesh>
    </>
  );
};

export default WarpedMinecraftCaseAutoRotation;
