import React, { Suspense } from "react";

// Libs
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";

// Local
import Canvas from "./Canvas";
import Dirt from "./Block.Dirt";

const Root = styled.div`
  height: 50vw;
  margin-left: 25vw;
  width: 50vw;
`;

const Preview: React.FC = () => (
  <Root>
    <Canvas
      // @ts-expect-error wip
      cameraPosition={[0, 0, 3.2]}
    >
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />

        <Dirt radius={1} showLines />
      </Suspense>
    </Canvas>
  </Root>
);

export default Preview;
