import {
  Environment,
  Icosahedron,
  MeshDistortMaterial,
  Text,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import axios from "axios";
import React from "react";
import * as THREE from "three";

import { WorkDescription } from "@/components/index";

type Props = {
  selectedCaseId?: string | null;
};

const useAnimation = (ref: React.MutableRefObject<THREE.Mesh>) => {
  useFrame(({ mouse }) => {
    const node = ref.current;

    if (node) {
      node.rotation.y = THREE.MathUtils.lerp(
        node.rotation.y,
        mouse.x / Math.PI,
        0.01,
      );

      node.rotation.x = THREE.MathUtils.lerp(
        node.rotation.x,
        mouse.y * Math.PI,
        0.01,
      );
    }
  });
};

const CommonMeshDistortMaterial = () => (
  <MeshDistortMaterial
    bumpScale={0.005}
    clearcoat={0.1}
    clearcoatRoughness={0.9}
    color="rgba(255, 255, 255, 0.0)"
    distort={0.31}
    metalness={0.5}
    radius={2.3}
    roughness={0.3}
  />
);

const Buble = () => {
  const ref = React.useRef<THREE.Mesh>(null!);

  useAnimation(ref);

  return (
    <Icosahedron args={[1, 12]} position={[0, 0, 0]} ref={ref}>
      <CommonMeshDistortMaterial />
    </Icosahedron>
  );
};

const Course = () => {
  const ref = React.useRef<THREE.Mesh>(null!);

  const [price, setPrice] = React.useState("");

  useAnimation(ref);

  React.useEffect(() => {
    (async () => {
      const request = axios.CancelToken.source();

      const { data } = await axios.get("https://blockchain.info/ticker", {
        cancelToken: request.token,
      });

      setPrice(
        data.USD["15m"].toLocaleString("en-US", {
          currency: "USD",
          style: "currency",
        }),
      );

      return () => {
        request.cancel();
      };
    })();
  }, []);

  if (price === "") {
    return null;
  }

  return (
    <Text color="white" ref={ref} scale={0.2}>
      BTC {price}
      <CommonMeshDistortMaterial />
    </Text>
  );
};

export const BTCBubble: React.FC<Props> = ({ selectedCaseId }) => (
  <div className="h-screen w-screen">
    <Canvas
      // className="h-screen w-screen"
      gl={{
        alpha: true,
        antialias: true,
        depth: false,
        powerPreference: "high-performance",
        stencil: false,
      }}
    >
      <Environment preset="sunset" />
      <Buble />
      <Course />
    </Canvas>
    <WorkDescription selectedCaseId={selectedCaseId}>
      <p>
        The current project is about the social opinion that Bitcoin is a bubble
        and text inside it is the current BTC&#39;s course.
      </p>
    </WorkDescription>
  </div>
);
