import * as React from 'react';

// Libs
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  ProjectTopics,
  ProjectYear,
  Spacer,
  Text,
  Title,
} from '../components';

import Case from './WarpedMinecraft/Case';
import Dirt from './WarpedMinecraft/Blocks/Dirt';
import Leaves from './WarpedMinecraft/Blocks/Leaves';
import Stone from './WarpedMinecraft/Blocks/Stone';
import World from './WarpedMinecraft/Root';

const StyledText = styled(Text)`
  text-align: center;
`;

const WarpedMinecraft: React.FC = (): JSX.Element => (
  <>
    <World />
    <Container>
      <Row>
        <Col lg={{ span: 9 }}>
          <Title>
            Minecraft where each side of the blocks is a warped NURBS
            surface.
          </Title>
          <Text>todo</Text>
        </Col>
      </Row>
    </Container>
    <Spacer size={10} />
    <Container>
      <Row>
        <Col lg={{ span: 4 }}>
          <Case>
            <Dirt />
          </Case>
          <Spacer size={2} />
          <StyledText>Dirt</StyledText>
        </Col>
        <Col lg={{ span: 4 }}>
          <Case>
            <Stone />
          </Case>
          <Spacer size={2} />
          <StyledText>Stone</StyledText>
        </Col>
        <Col lg={{ span: 4 }}>
          <Case>
            <Leaves />
          </Case>
          <Spacer size={2} />
          <StyledText>Leaves</StyledText>
        </Col>
      </Row>
    </Container>
    <Spacer size={10} />
    <Container>
      <Row>
        <Col lg={{ span: 6 }}>
          <ProjectTopics topics={['Minecraft', 'ThreeJS']} />
          <ProjectYear>2021</ProjectYear>
        </Col>
      </Row>
    </Container>
    <Spacer size={10} />
  </>
);

export default WarpedMinecraft;
