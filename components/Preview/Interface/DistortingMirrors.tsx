import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as R from "ramda";
import React from "react";
import * as THREE from "three";

import { NURBSVideo } from "@/components/index";

type PaneProps = {
  url: string;
  videoRef: React.RefObject<HTMLVideoElement>;
};

const random =
  // eslint-disable-next-line @typescript-eslint/default-param-last
  (min = 0, max: number) => Math.random() * (max - min) + min;

const Pane: React.FC<PaneProps> = ({ url, videoRef }) => {
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
    <NURBSVideo
      nsControlPoints={nsControlPoints}
      url={url}
      videoRef={videoRef}
    />
  );
};

export const DistortingMirrors = () => {
  const meshRef = React.useRef<THREE.Mesh>(null!);

  const mediaStreamRef = React.useRef<MediaStream | null>(null);

  const videoRef = React.useRef<HTMLVideoElement>(null);

  const [isCameraReady, setIsCameraReady] = React.useState(false);

  const renderMirrors = React.useMemo(
    () => (
      <mesh ref={meshRef}>
        {R.range(0, 10).map((index) => (
          <group
            key={index}
            position={[random(-25, 25), random(-25, 25), index * 0.001]}
            scale={[random(-5, 5), random(-5, 5), random(-5, 5)]}
          >
            <Pane url="" videoRef={videoRef} />
          </group>
        ))}
      </mesh>
    ),
    [],
  );

  React.useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      if (videoRef.current) {
        mediaStreamRef.current = stream;
        videoRef.current.srcObject = stream;

        setIsCameraReady(true);
      }
    });

    return () => {
      if (mediaStreamRef.current) {
        mediaStreamRef.current
          .getTracks()
          .forEach((track: MediaStreamTrack) => {
            track.stop();
          });
      }
    };
  }, []);

  return (
    <div className="h-screen w-screen">
      <video
        autoPlay
        className="absolute opacity-0"
        controls
        loop
        muted
        playsInline
        ref={videoRef}
      />
      {isCameraReady ? (
        <Canvas
          camera={{ position: [0, 10, 55] }}
          className="h-screen w-screen"
        >
          <OrbitControls enableZoom={false} />
          {renderMirrors}
        </Canvas>
      ) : (
        <div className="flex h-screen w-screen items-center justify-center text-sm opacity-50">
          Waiting for the camera access
        </div>
      )}
    </div>
  );
};
