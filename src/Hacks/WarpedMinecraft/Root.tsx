import * as React from 'react';

// Libs
import styled from 'styled-components';
import { OrbitControls, Sky } from '@react-three/drei';

// Local
import Canvas from './Canvas';
import Scene from './Scene';
import WarpRatioInput from './WarpRatioInput';

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
  border-radius: 50px;
  margin: 33px;
  overflow: hidden;
  position: relative;
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
      <Canvas>
        <React.Suspense fallback={null}>
          <OrbitControls />
          <Sky {...skyProps} />
          <Scene />
        </React.Suspense>
      </Canvas>
      <WarpRatioInput />
    </Root>
  );
};

export default WarpedMinecraftRoot;
