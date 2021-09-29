import React from 'react';

// Libs
import styled from 'styled-components';
import { Canvas as FiberCanvas } from 'react-three-fiber';

type Props = {
  children: React.ReactNode;
};

const StyledFiberCanvas = styled(FiberCanvas)`
  height: 120vh;
  width: 100%;
`;

const Root = styled.div`
  filter: saturate(150%);
  height: 120vh;
  position: absolute;
  top: -150px;
  width: 100%;
`;

const WarpedMacOSCanvas: React.FC<Props> = ({ children }: Props) => (
  <Root>
    <StyledFiberCanvas
      camera={{ position: [0, 10, 15] }}
      colorManagement
      gl={{
        alpha: true,
        antialias: true,
        depth: false,
        powerPreference: 'high-performance',
        stencil: false,
      }}
    >
      {children}
    </StyledFiberCanvas>
  </Root>
);

export default WarpedMacOSCanvas;
