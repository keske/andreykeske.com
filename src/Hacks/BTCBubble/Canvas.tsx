import React from 'react';

// Libs
import styled from 'styled-components';
import { Canvas as FiberCanvas } from 'react-three-fiber';

type Props = {
  children: React.ReactNode;
};

const Root = styled(FiberCanvas)`
  min-height: 100vh;
  width: 100%;
`;

const Canvas: React.FC<Props> = ({ children }: Props) => (
  <Root
    camera={{ position: [0, 0, 3] }}
    colorManagement
    gl={{
      alpha: false,
      antialias: true,
      depth: false,
      powerPreference: 'high-performance',
      stencil: false,
    }}
  >
    {children}
  </Root>
);

export default Canvas;
