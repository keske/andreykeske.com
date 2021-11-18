/* eslint jsx-a11y/media-has-caption: 0 */

import * as React from 'react';
import * as R from 'ramda';
import { Canvas as FiberCanvas } from 'react-three-fiber';

// Libs
import styled from 'styled-components';
import { OrbitControls } from '@react-three/drei';

// Local
import Pane from './Pane';

const Root = styled.div`
  height: 100vh;
  position: relative;
  width: 100vw;
`;

const StyledFiberCanvas = styled(FiberCanvas)`
  cursor: grab;
  height: 100%;
  width: 100vw;
`;

const StyledVideo = styled.video`
  height: 1px;
  opacity: 0;
  position: absolute;
  width: 1px;
`;

const DistortingMirrorsRoot: React.FC = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const random = React.useCallback(
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    (min = 0, max: number) => Math.random() * (max - min) + min,
    [],
  );

  const constraints = {
    video: true,
  };

  navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  });

  return (
    <Root>
      <StyledVideo
        ref={videoRef}
        autoPlay
        controls
        loop
        muted
        playsInline
        // src="static/6.mov"
      />
      <StyledFiberCanvas
        camera={{ position: [0, 10, 55] }}
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
            {/* <ambientLight intensity={0.2} /> */}

            {/* <spotLight
              angle={Math.PI / 6}
              castShadow
              intensity={0.2}
              position={[20, 20, 30]}
              shadow-bias={-0.00005}
              shadow-mapSize-height={2048}
              shadow-mapSize-width={2048}
            /> */}

            <group>
              {R.range(0, 30).map((index) => (
                <group
                  key={index}
                  position={[
                    random(-25, 25),
                    random(-25, 25),
                    index * 0.001,
                  ]}
                  scale={[
                    random(-5, 5),
                    random(-5, 5),
                    random(-5, 5),
                  ]}
                >
                  <Pane url="" videoRef={videoRef} />
                </group>
              ))}
            </group>
          </group>
        </React.Suspense>
      </StyledFiberCanvas>
    </Root>
  );
};

export default DistortingMirrorsRoot;
