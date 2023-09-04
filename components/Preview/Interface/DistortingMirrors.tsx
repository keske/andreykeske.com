import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as R from "ramda";
import React from "react";
import * as THREE from "three";

import { NURBSVideo } from "@/components";
import { VideoRef, withCameraAccess } from "@/hocs";
import { useNSControlPoints } from "@/hooks";
import { random } from "@/utils";

type RootProps = {
  videoRef: VideoRef;
};

const Root: React.FC<RootProps> = ({ videoRef }) => {
  const nsControlPoints = useNSControlPoints(10);

  const meshRef = React.useRef<THREE.Mesh>(null!);

  const renderMirrors = React.useMemo(
    () => (
      <mesh ref={meshRef}>
        {R.range(0, 10).map((index) => (
          <group
            key={index}
            position={[
              random(-25, 25),
              random(-25, 25),
              index * 0.001,
            ]}
            scale={[random(-5, 5), random(-5, 5), random(-5, 5)]}
          >
            <NURBSVideo
              nsControlPoints={nsControlPoints}
              videoRef={videoRef}
            />
          </group>
        ))}
      </mesh>
    ),
    [nsControlPoints, videoRef],
  );

  return (
    <div className="h-screen w-screen">
      <Canvas
        camera={{ position: [0, 10, 55] }}
        className="h-screen w-screen"
      >
        <OrbitControls />
        {renderMirrors}
      </Canvas>
    </div>
  );
};

export const DistortingMirrors = withCameraAccess(Root);
