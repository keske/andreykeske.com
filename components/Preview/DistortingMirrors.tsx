import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as R from "ramda";
import React from "react";
import * as THREE from "three";

import { Nurbs } from "../NURBSVideo";

type PaneProps = {
  url: string;
  videoRef: HTMLVideoElement;
};

const random =
  // eslint-disable-next-line @typescript-eslint/default-param-last
  (min = 0, max: number) => Math.random() * (max - min) + min;

export const Pane: React.FC<PaneProps> = ({ url, videoRef }) => {
  const warpRatio = 10;

  const getRandomCoords = React.useCallback(
    (x: number, y: number, z: number) => [
      random(x - warpRatio, x + warpRatio),
      random(y - warpRatio, y + warpRatio),
      random(z - warpRatio, z + warpRatio),
    ],
    [warpRatio],
  );

  const x0y0z0 = React.useMemo(
    () => getRandomCoords(-2, -2, 0),
    [getRandomCoords],
  );

  const x0y1z0 = React.useMemo(
    () => getRandomCoords(-2, -1, 0),
    [getRandomCoords],
  );

  const x0y2z0 = React.useMemo(
    () => getRandomCoords(-2, 1, 0),
    [getRandomCoords],
  );

  const x0y3z0 = React.useMemo(
    () => getRandomCoords(-2, 2, 0),
    [getRandomCoords],
  );

  const getLeftEdgeOfFrontFace = React.useMemo(
    () => [
      new THREE.Vector4(...x0y0z0, 0.1),
      new THREE.Vector4(...x0y1z0, 0.1),
      new THREE.Vector4(...x0y2z0, 0.1),
      new THREE.Vector4(...x0y3z0, 0.1),
    ],
    [x0y0z0, x0y1z0, x0y2z0, x0y3z0],
  );

  const x1y0z0 = React.useMemo(
    () => getRandomCoords(0, -2, 0),
    [getRandomCoords],
  );

  const x1y1z0 = React.useMemo(
    () => getRandomCoords(0, -1, 0),
    [getRandomCoords],
  );

  const x1y2z0 = React.useMemo(
    () => getRandomCoords(0, 1, 0),
    [getRandomCoords],
  );

  const x1y3z0 = React.useMemo(
    () => getRandomCoords(0, 2, 0),
    [getRandomCoords],
  );

  const getMiddleEdgeOfFrontFace = React.useMemo(
    () => [
      new THREE.Vector4(...x1y0z0, 0.1),
      new THREE.Vector4(...x1y1z0, 0.1),
      new THREE.Vector4(...x1y2z0, 0.1),
      new THREE.Vector4(...x1y3z0, 0.1),
    ],
    [x1y0z0, x1y1z0, x1y2z0, x1y3z0],
  );

  const x2y0z0 = React.useMemo(
    () => getRandomCoords(2, -2, 0),
    [getRandomCoords],
  );

  const x2y1z0 = React.useMemo(
    () => getRandomCoords(2, -1, 0),
    [getRandomCoords],
  );

  const x2y2z0 = React.useMemo(
    () => getRandomCoords(2, 1, 0),
    [getRandomCoords],
  );

  const x2y3z0 = React.useMemo(
    () => getRandomCoords(2, 2, 0),
    [getRandomCoords],
  );

  const getRightEdgeOfFrontFace = React.useMemo(
    () => [
      new THREE.Vector4(...x2y0z0, 0.1),
      new THREE.Vector4(...x2y1z0, 0.1),
      new THREE.Vector4(...x2y2z0, 0.1),
      new THREE.Vector4(...x2y3z0, 0.1),
    ],
    [x2y0z0, x2y1z0, x2y2z0, x2y3z0],
  );

  const nsControlPoints = [
    getLeftEdgeOfFrontFace,
    getMiddleEdgeOfFrontFace,
    getRightEdgeOfFrontFace,
  ];

  return (
    <Nurbs nsControlPoints={nsControlPoints} url={url} videoRef={videoRef} />
  );
};

export const DistortingMirrors = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  });

  return (
    <div className="absolute top-0 left-0 h-screen w-screen">
      <video
        autoPlay
        className="absolute opacity-0"
        controls
        loop
        muted
        playsInline
        ref={videoRef}
      />
      <Canvas camera={{ position: [0, 10, 55] }}>
        <OrbitControls enableZoom={false} />
        <group>
          {R.range(0, 10).map((index) => (
            <group
              key={index}
              position={[random(-25, 25), random(-25, 25), index * 0.001]}
              scale={[random(-5, 5), random(-5, 5), random(-5, 5)]}
            >
              <Pane url="" videoRef={videoRef} />
            </group>
          ))}
        </group>
      </Canvas>
    </div>
  );
};
