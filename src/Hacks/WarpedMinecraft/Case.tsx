import * as React from 'react';

// Libs
import styled, { css } from 'styled-components';
import { Canvas as FiberCanvas } from 'react-three-fiber';
import { OrbitControls, Stars } from '@react-three/drei';

import { mediaQuery } from '../../utils';

import AutoRotation from './Case.AutoRotation';

type Props = {
  children: React.ReactNode;
  stars?: boolean;
};

const AnimateButton = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 100%;
  bottom: 20px;
  padding: 3px 10px;
  position: absolute;
  right: 20px;
  z-index: 10;
`;

const Root = styled.div`
  border-radius: 30px;
  height: 50vh;
  overflow: hidden;
  position: relative;

  ${mediaQuery(
    'phone',
    css`
      height: 17vh;
    `,
  )}

  ${mediaQuery(
    'tablet',
    css`
      height: 25vh;
    `,
  )}

  ${mediaQuery(
    'desktop',
    css`
      height: 50vh;
    `,
  )}
`;

const StyledCanvas = styled(FiberCanvas)<{ stars: boolean }>`
  background-color: ${({ stars }) => (stars ? '#000' : '#f2f2f2')};
  cursor: grab;
  height: 100%;
  width: 100%;
`;

const WarpedMinecraftCase: React.FC<Props> = ({
  children,
  stars = false,
}: Props) => {
  const [rotation, setRotation] = React.useState<
    'disabled' | 'enabled'
  >('enabled');

  const enableRotation = React.useCallback(() => {
    setRotation('enabled');
  }, []);

  const disableRotation = React.useCallback(() => {
    setRotation('disabled');
  }, []);

  return (
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
        onClick={disableRotation}
        stars={stars}
      >
        <OrbitControls enableZoom={false} />

        {stars && <Stars />}

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

          <AutoRotation rotation={rotation}>{children}</AutoRotation>
        </group>
      </StyledCanvas>
      {rotation === 'disabled' && (
        <AnimateButton onClick={enableRotation}>↻</AnimateButton>
      )}
    </Root>
  );
};

export default WarpedMinecraftCase;
