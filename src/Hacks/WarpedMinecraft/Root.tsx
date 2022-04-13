import * as React from "react";

// Libs
import styled, { css } from "styled-components";
import { OrbitControls, Sky } from "@react-three/drei";

// Components
import { OnScreen } from "../../components";
import { mediaQuery } from "../../utils";

// Local
import Biom from "./Biom";
import Canvas from "./Canvas";
import RatioInput from "./RatioInput";

type SkyProps = {
  distance?: number;
  inclination?: number;
  azimuth?: number;
  mieCoefficient?: number;
  mieDirectionalG?: number;
  rayleigh?: number;
  turbidity?: number;
};

const Root = styled.div`
  background-color: #fafafa;
  height: 100vh;
  overflow: hidden;
  position: relative;

  ${mediaQuery(
    "phone",
    css`
      height: 50vh;
    `,
  )}
`;

const WarpedMinecraftRoot: React.FC = () => {
  const skyProps = React.useMemo<SkyProps>(
    () => ({
      azimuth: 180,
      distance: 13000,
      mieCoefficient: 0.005,
      mieDirectionalG: 0.7,
      rayleigh: 3,
      turbidity: 10,
    }),
    [],
  );

  return (
    <Root>
      <OnScreen>
        <Canvas>
          <React.Suspense fallback={null}>
            <OrbitControls />
            <Sky {...skyProps} />
            <Biom />
          </React.Suspense>
        </Canvas>

        <RatioInput />
      </OnScreen>
    </Root>
  );
};

export default WarpedMinecraftRoot;
