import React, { Suspense } from "react";

// Libs
import { OrbitControls } from "@react-three/drei";

// Local
import Canvas from "./Canvas";
import Content from "./Content";
import Controls from "./Controls";
import Details from "./Details";
import Scene from "./Scene";
import Title from "./Title";

const WarpedLegoRoot: React.FC = () => (
  <>
    <Canvas>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <Scene />
      </Suspense>
    </Canvas>

    <Controls />
    <Details />
    <Title />
    <Content />
  </>
);

export default WarpedLegoRoot;
