import * as React from 'react';

// Libs
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import { OrbitControls } from '@react-three/drei';

// Local
import Canvas from './Canvas';
import RatioInput from './RatioInput';
import Scene from './Scene';

const Root = styled.div`
  background-color: #000;
  cursor: grab;
  position: relative;
`;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;
`;

const WarpedMacOSRoot: React.FC = () => (
  <Root>
    <Wrapper>
      <Container>
        <Row>
          <Col lg={{ span: 12 }}>
            <RatioInput />
          </Col>
        </Row>
      </Container>
    </Wrapper>

    <Canvas>
      <React.Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <Scene />
      </React.Suspense>
    </Canvas>
  </Root>
);

export default WarpedMacOSRoot;
