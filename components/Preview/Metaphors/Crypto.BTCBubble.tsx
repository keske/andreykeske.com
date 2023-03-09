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

import { WorkDetails } from "@/components/index";

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
    clearcoat={1.1}
    clearcoatRoughness={0.9}
    color="rgba(0, 0, 0, 0.0)"
    distort={0.3}
    metalness={1.1}
    radius={2.3}
    roughness={0.7}
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
  const [price, setPrice] = React.useState("");

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
    <Text color="white" scale={0.2}>
      BTC {price}
      <CommonMeshDistortMaterial />
    </Text>
  );
};

export const CryptoBTCBubble: React.FC = () => (
  <div className="flex flex-col items-center justify-center gap-2 py-20">
    <Canvas
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
    <WorkDetails>
      <p>
        The current project is about the social opinion that Bitcoin is a bubble
        and text inside it is the current BTC&#39;s course.
      </p>
    </WorkDetails>
  </div>
);
