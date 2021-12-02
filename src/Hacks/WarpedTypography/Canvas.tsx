import React from 'react';

// Libs
import styled from 'styled-components';
import { Canvas as FiberCanvas } from 'react-three-fiber';

type Props = {
  children: React.ReactNode;
};

const StyledFiberCanvas = styled(FiberCanvas)`
  height: 100%;
  width: 100%;
`;

const WarpedTypographyCanvas: React.FC<Props> = ({
  children,
}: Props) => (
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
);

export default WarpedTypographyCanvas;
