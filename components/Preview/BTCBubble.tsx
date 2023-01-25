import {
  Environment,
  Icosahedron,
  MeshDistortMaterial,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import axios from "axios";
import React from "react";
import * as THREE from "three";

export const Buble = () => {
  const ref = React.useRef<THREE.Mesh>(null!);

  useFrame(({ clock, mouse }) => {
    const node = ref.current;

    node.rotation.z = clock.getElapsedTime();

    node.rotation.y = THREE.MathUtils.lerp(
      node.rotation.y,
      mouse.x * Math.PI,
      0.01,
    );

    node.rotation.x = THREE.MathUtils.lerp(
      node.rotation.x,
      mouse.y * Math.PI,
      0.01,
    );
  });

  return (
    <Icosahedron args={[1, 12]} position={[0, 0, 0]} ref={ref}>
      <MeshDistortMaterial
        bumpScale={0.005}
        clearcoat={0.1}
        clearcoatRoughness={0.9}
        color="rgba(0, 0, 0, 0.0)"
        distort={0.21}
        metalness={1}
        radius={1.3}
        roughness={0.3}
      />
    </Icosahedron>
  );
};

export const BTCBubble = () => {
  const [price, setPrice] = React.useState<number>(0);

  React.useEffect(() => {
    (async () => {
      const { data } = await axios.get("https://blockchain.info/ticker");

      setPrice(data.USD["15m"]);
    })();
  }, []);

  return (
    <div className="absolute top-0 left-0 h-screen w-screen">
      <div className="h-full w-full bg-black">
        <Canvas
          gl={{
            alpha: false,
            antialias: true,
            depth: false,
            powerPreference: "high-performance",
            stencil: false,
          }}
        >
          <Environment preset="lobby" />
          <Buble />
        </Canvas>
      </div>
      <div className="absolute top-0 left-0 flex h-screen w-screen items-center justify-center">
        <p className="text-2xl text-white">BTC ${price}</p>
      </div>
      <p className="fixed right-10 bottom-10 flex flex-col items-end text-sm text-white">
        The current project is about the social opinion that Bitcoin is a bubble
        and text inside it is the current BTC&#39;s course.
      </p>
    </div>
  );
};
