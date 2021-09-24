import React from 'react';

// Libs
import styled from 'styled-components';
import { Canvas as FiberCanvas } from 'react-three-fiber';

type Props = {
  children: React.ReactNode;
};

const StyledFiberCanvas = styled(FiberCanvas)`
  height: 100vh;
  width: 100%;
`;

const Root = styled.div`
  height: 100vh;
  width: 100%;
`;

const Canvas: React.FC<Props> = ({ children }: Props) => (
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

export default Canvas;
