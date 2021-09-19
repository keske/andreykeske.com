import React from 'react';

// Libs
import styled from 'styled-components';
import { Canvas as FiberCanvas } from 'react-three-fiber';

type Props = {
  children: React.ReactNode;
};

const StyledFiberCanvas = styled(FiberCanvas)`
  background-color: #000;
  height: 50vh;
  margin-left: 10%;
  width: 80%;
`;

const Root = styled.div`
  background-color: #000;
  height: 50vh;
  width: 100%;
`;

const Canvas: React.FC<Props> = ({ children }: Props) => (
  <Root>
    <StyledFiberCanvas
      camera={{ position: [0, 0, 1.2] }}
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
