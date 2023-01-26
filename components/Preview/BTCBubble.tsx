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
    color="rgba(0, 0, 0, 0.0)"
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

export const BTCBubble = () => (
  <div className="absolute top-0 left-0 h-screen w-screen">
    <div className="h-full w-full">
      <Canvas
        gl={{
          alpha: false,
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
    </div>
    <p className="fixed right-10 bottom-10 flex flex-col items-end text-sm text-white">
      The current project is about the social opinion that Bitcoin is a bubble
      and text inside it is the current BTC&#39;s course.
    </p>
  </div>
);
