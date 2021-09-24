import * as React from 'react';

// Libs
import styled from 'styled-components';
import { Canvas as FiberCanvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';

type Props = {
  children: React.ReactNode;
};

const Root = styled.div`
  border-radius: 30px;
  height: 50vh;
  overflow: hidden;
`;

const StyledCanvas = styled(FiberCanvas)`
  background-color: #f2f2f2;
  cursor: grab;
  height: 100%;
  width: 100%;
`;

const WarpedMinecraftRoot: React.FC<Props> = ({
  children,
}: Props) => (
  <Root>
    <StyledCanvas
      camera={{ position: [0, 4, 7] }}
      colorManagement
      gl={{
        alpha: true,
        antialias: true,
        depth: false,
        powerPreference: 'high-performance',
        stencil: false,
      }}
    >
      <React.Suspense fallback={null}>
        <OrbitControls enableZoom={false} />

        <group>
          <ambientLight intensity={0.2} />

          <spotLight
            angle={Math.PI / 6}
            castShadow
            intensity={0.2}
            position={[20, 20, 30]}
            shadow-bias={-0.00005}
            shadow-mapSize-height={2048}
            shadow-mapSize-width={2048}
          />

          {children}
        </group>
      </React.Suspense>
    </StyledCanvas>
  </Root>
);

export default WarpedMinecraftRoot;
