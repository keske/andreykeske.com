import {
  Bounds,
  Box,
  ContactShadows,
  GizmoHelper,
  GizmoViewport,
  Grid,
  Instances,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  PivotControls,
  TransformControls,
  View,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";

import Head from "next/head";
import React from "react";
import useRefs from "react-use-refs";
import { ColorRepresentation } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { THREEOnMouseRotation } from "@/components/index";

type ObjectsProps = {
  color?: ColorRepresentation;
  wireframe?: boolean;
};

const Objects: React.FC<ObjectsProps> = (props) => (
  <Box>
    <meshBasicMaterial {...props} />
  </Box>
);

export const About: React.FC = () => {
  const [container, topLeft, bottomLeft, bottomRight] = useRefs() as Array<
    React.MutableRefObject<HTMLInputElement>
  >;

  return (
    <div className="h-screen w-screen" ref={container}>
      <div className="absolute h-1/2 w-1/2">
        <div className="absolute w-1/2 px-10 py-40">
          Andrey Keske is a digital artist/software engineer In 2006 Andrey
          started to draw Graffiti which later transforms into making stickers
          then graphic design Graffiti was a form of hacking, in this case on
          the streets. And at the same time, Andrey likes computer hacking
          culture and had a huge interest in programming. Both forms of activity
          merged → into → net-art, which represents this site. Besides net-art
          Andrey works as a software engineer with companies like
          <strong>
            <a href="https://samara.com/"> Samara Airbnb ↗</a>
          </strong>
          and
          <strong>
            <a href="https://jupe.com/">Jupe↗</a>
          </strong>
          , in 2020 launched a successful startup
          <strong>
            <a href="https://apps.apple.com/us/app/w1d1/id1497155726">W1D1 ↗</a>
          </strong>
          He splits his life between two cities New York City , NY, and Miami,
          Fl where he lives
        </div>
      </div>
      <div className="absolute left-1/2 h-1/2 w-1/2" ref={topLeft} />
      <div className="absolute top-1/2 h-1/2 w-1/2" ref={bottomLeft} />
      <div
        className="absolute top-1/2 left-1/2 h-1/2 w-1/2"
        ref={bottomRight}
      />
      <Canvas eventSource={container}>
        <View index={2} track={topLeft}>
          <PerspectiveCamera fov={35} makeDefault position={[0, 4, 0]} />
          <OrbitControls makeDefault />
          <Objects wireframe />
          <Grid args={[10, 10]} cellColor="white" />
        </View>
        <View index={3} track={bottomLeft}>
          <PerspectiveCamera fov={35} makeDefault position={[1, 1, 5]} />
          <OrbitControls makeDefault />
          <Objects wireframe />
          <Grid args={[10, 10]} cellColor="white" />
        </View>
        <View index={4} track={bottomRight}>
          <color args={["#CCCCCC"]} attach="background" />
          <PerspectiveCamera fov={35} makeDefault position={[-2.5, 1, 5]} />
          <OrbitControls makeDefault />
          <Objects />
          <Grid args={[100, 100]} cellColor="white" />
          <ContactShadows
            blur={5}
            frames={1}
            opacity={0.6}
            position={[0, -1, 0]}
          />
        </View>
      </Canvas>
    </div>
  );
};
