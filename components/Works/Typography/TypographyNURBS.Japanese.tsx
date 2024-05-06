import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

// @ts-expect-error WIP
import { ParametricGeometry } from "three/addons/geometries/ParametricGeometry.js";
import { NURBSSurface } from "three/examples/jsm/curves/NURBSSurface";

import { useNSControlPoints } from "@/hooks/index";

type NURBSLetterProps = {
  side?:
    | typeof THREE.BackSide
    | typeof THREE.DoubleSide
    | typeof THREE.FrontSide;
  url: string;
};

export const NURBSLetter: React.FC<NURBSLetterProps> = ({
  side = THREE.DoubleSide,
  url,
}) => {
  const nsControlPoints = useNSControlPoints(2);

  const nurbsSurface = React.useMemo(() => {
    const degree1 = 2;

    const degree2 = 3;

    const knots1 = [0, 0, 0, 1, 1, 1];

    const knots2 = [0, 0, 0, 0, 1, 1, 1, 1];

    return new NURBSSurface(
      degree1,
      degree2,
      knots1,
      knots2,
      nsControlPoints,
    );
  }, [nsControlPoints]);

  const map = React.useMemo(
    () => url && new THREE.TextureLoader().load(url),
    [url],
  );

  const geometry = React.useMemo(() => {
    const getSurfacePoint = (
      u: number,
      v: number,
      target: THREE.Vector3,
    ) => {
      const point = nurbsSurface.getPoint(u, v, target);

      const noise = new THREE.Vector3(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
      );

      noise.multiplyScalar(0.05);

      return point;
    };

    return new ParametricGeometry(getSurfacePoint, 40, 40);
  }, [nurbsSurface]);

  const material = React.useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        ...(map && url && { map }),
        alphaTest: 0.5,
        side,
        transparent: true,
      }),
    [map, side, url],
  );

  const mesh = React.useMemo(
    () => new THREE.Mesh(geometry, material),
    [geometry, material],
  );

  React.useEffect(() => {
    if (map && url) {
      map.anisotropy = 32;

      map.wrapS = THREE.RepeatWrapping;
      map.wrapT = THREE.RepeatWrapping;
    }
  }, [map, url]);

  return (
    <group>
      <primitive object={mesh} />
    </group>
  );
};

export const TypographyNURBSJapanese: React.FC = () => (
  <>
    <div className="fixed left-0 top-0 h-screen w-screen">
      <Canvas className="h-screen w-screen bg-[#b31515]">
        <React.Suspense fallback={null}>
          <PerspectiveCamera
            fov={35}
            makeDefault
            position={[0, 0, 30]}
          />
          <OrbitControls />
          <ambientLight intensity={0.7} />
          <spotLight
            angle={Math.PI / 6}
            intensity={1.1}
            position={[0, 20, 30]}
          />
          <group position={[0, 2, 0]}>
            <group position={[2.7, 2.7, 0]}>
              <NURBSLetter url="images/japanese-poetry/古.png" />
            </group>
            <group position={[2.7, 0, 0]}>
              <NURBSLetter url="images/japanese-poetry/池.png" />
            </group>
            <group position={[2.7, -2.7, 0]}>
              <NURBSLetter url="images/japanese-poetry/や.png" />
            </group>

            <group position={[0, 2.7, 0]}>
              <NURBSLetter url="images/japanese-poetry/蛙.png" />
            </group>
            <group position={[0, 0, 0]}>
              <NURBSLetter url="images/japanese-poetry/飛.png" />
            </group>
            <group position={[0, -2.7, 0]}>
              <NURBSLetter url="images/japanese-poetry/び.png" />
            </group>
            <group position={[0, -5.4, 0]}>
              <NURBSLetter url="images/japanese-poetry/込.png" />
            </group>
            <group position={[0, -8.1, 0]}>
              <NURBSLetter url="images/japanese-poetry/む.png" />
            </group>

            <group position={[-2.7, 2.7, 0]}>
              <NURBSLetter url="images/japanese-poetry/水.png" />
            </group>
            <group position={[-2.7, 0, 0]}>
              <NURBSLetter url="images/japanese-poetry/の.png" />
            </group>
            <group position={[-2.7, -2.7, 0]}>
              <NURBSLetter url="images/japanese-poetry/音.png" />
            </group>
          </group>
        </React.Suspense>
      </Canvas>
    </div>
    <div className="pointer-events-none fixed z-20 flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col border border-white px-3 py-2 text-white">
        <span>芭</span>
        <span>蕉</span>
        <span>松</span>
        <span>尾</span>
      </div>
    </div>
  </>
);
