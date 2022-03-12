import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";

// Local
import Canvas from "./Canvas";
import Content from "./Content";
import Controls from "./Controls";
import Details from "./Details";
import Scene from "./Scene";
import Title from "./Title";

// Store
import useStore from "./@store";

const Wrapper = styled.div`
  background-color: #000;
`;

const Root: React.FC = () => {
  const { enableZoom } = useStore();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Wrapper>
        <Canvas
          // @ts-expect-error wip
          cameraPosition={[3, 2, 7]}
        >
          <Suspense fallback={null}>
            <OrbitControls enableZoom={enableZoom} />
            <Scene />
          </Suspense>
        </Canvas>
      </Wrapper>

      <Controls />
      <Details />
      <Title />
      <Content />
    </>
  );
};

export default Root;
