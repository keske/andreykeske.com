import {
  Decal,
  OrbitControls,
  useSurfaceSampler,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import {
  Euler,
  InstancedBufferAttribute,
  Matrix4,
  Mesh,
  Quaternion,
  Vector3,
  Vector4,
} from "three";

import { NURBS } from "@/components/index";
// import { useNSControlPoints, useScrollInterpolation } from "@/hooks/index";

export const useNSControlPoints = () => {
  const getControlPoints = React.useCallback(() => {
    const controlPoints: THREE.Vector4[][] = [];

    const radius = 4;

    const tubeRadius = 1;

    const numSegments = 64;

    const numTubeSegments = 8;

    const angleDelta = (2 * Math.PI) / numSegments;

    const tubeAngleDelta = (2 * Math.PI) / numTubeSegments;

    for (let i = 0; i <= numSegments; i++) {
      const angle = i * angleDelta;

      const x = Math.cos(angle) * (radius + tubeRadius * Math.cos(angle * 0.5));

      const y = Math.sin(angle) * (radius + tubeRadius * Math.cos(angle * 0.5));

      const z = tubeRadius * Math.sin(angle * 0.5);

      const row: THREE.Vector4[] = [];

      for (let j = 0; j <= numTubeSegments; j++) {
        const tubeAngle = j * tubeAngleDelta;

        const cosTubeAngle = Math.cos(tubeAngle);

        const sinTubeAngle = Math.sin(tubeAngle);

        const cx = x + tubeRadius * cosTubeAngle * Math.cos(angle);

        const cy = y + tubeRadius * cosTubeAngle * Math.sin(angle);

        const cz = z + tubeRadius * sinTubeAngle;

        const w = 1;

        row.push(new Vector4(cx, cy, cz, w));
      }

      controlPoints.push(row);
    }

    return controlPoints;
  }, []);

  console.log(getControlPoints());

  return getControlPoints();
};

export function Test() {
  console.log("");
  const nsControlPoints = useNSControlPoints();

  const [imageUrl, setImageUrl] = React.useState("images/new-yorker.png");

  return (
    <div className="h-screen w-screen">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.3} />
        <spotLight position={[10, 10, 30]} />
        <OrbitControls />
        <NURBS nsControlPoints={nsControlPoints} url={imageUrl} />
      </Canvas>
    </div>
  );
}
