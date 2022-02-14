import React, { Suspense } from "react";

// Libs
import { OrbitControls } from "@react-three/drei";

// Local
import Canvas from "./Canvas";
import Controls from "./Controls";
import Scene from "./Scene";

const WarpedLegoRoot: React.FC = () => (
  <>
    <Canvas>
      <Suspense fallback={null}>
        <OrbitControls />
        <Scene />
      </Suspense>
    </Canvas>

    <Controls />
  </>
);

export default WarpedLegoRoot;
