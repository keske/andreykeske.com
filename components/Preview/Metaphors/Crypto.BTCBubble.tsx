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

import { Stack, WorkDetails } from "@/components";
import { useScrollInterpolation } from "@/hooks";

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
    color="rgba(0, 0, 0, 1)"
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

      const { data } = await axios.get(
        "https://blockchain.info/ticker",
        {
          cancelToken: request.token,
        },
      );

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

export const CryptoBTCBubble: React.FC = () => {
  const blurOverlayValue = useScrollInterpolation(0, 10, 0);

  const canvasWrapperOpacityValue = useScrollInterpolation(1, 0.1, 1);

  return (
    <>
      <Stack
        className="fixed left-0 top-0 h-screen w-screen items-center"
        style={{
          opacity: canvasWrapperOpacityValue,
        }}
      >
        <Canvas
          className="h-full w-full"
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
      </Stack>
      <div
        className="pointer-events-none fixed left-0 top-0 h-screen w-screen"
        style={{
          backdropFilter: `blur(${blurOverlayValue}px)`,
        }}
      />
      <WorkDetails>
        <Stack
          className="absolute h-1/2 w-screen justify-center"
          style={{
            top: window.innerHeight - 100,
          }}
        >
          <Stack className="w-1/2 gap-2 pb-20">
            <h3>
              Bitcoin as a Bubble: Exploring Social Opinion through
              Digital Art
            </h3>
            <small>
              This innovative digital artwork explores the idea that
              Bitcoin, the world's most popular cryptocurrency, is a
              bubble that is bound to burst. The piece presents the
              current BTC course, depicted through text, as a symbol
              of the volatile nature of cryptocurrency.
            </small>
            <small>
              Through the use of digital art, the piece explores the
              social opinions and concerns surrounding Bitcoin's
              legitimacy and future sustainability. The text that
              makes up the artwork's centerpiece reflects the
              constantly fluctuating value of BTC and the debate
              around its status as a reliable investment.
            </small>
            <small>
              The artwork invites us to question our understanding of
              money and the impact of new technologies on our
              financial systems. By presenting the current BTC course
              as the focal point of the piece, it highlights the rapid
              pace of change and the uncertainty that comes with new
              forms of currency.
            </small>
            <small>
              This work challenges us to consider our relationship
              with money and the ways in which we invest and consume.
              As we navigate an increasingly digital world, works like
              this remind us of the importance of critical thinking
              and reflection on the potential impact of new
              technologies.
            </small>
            <small>
              In this way, Bitcoin as a Bubble: Exploring Social
              Opinion through Digital Art offers a unique perspective
              on the world of cryptocurrency and its place in our
              society. Through the intersection of technology and art,
              the piece invites us to explore the complex relationship
              between money, value, and perception in the digital age.
            </small>
            <time dateTime="2021">2021</time>
          </Stack>
        </Stack>
      </WorkDetails>
    </>
  );
};
