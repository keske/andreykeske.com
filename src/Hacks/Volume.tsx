/* eslint jsx-a11y/accessible-emoji: 0 */

import * as React from 'react';

// Libs
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Components
import {
  Button,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Spacer,
  SubTitle,
  Text,
  Title,
} from '../components';

const Volume: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ span: 12 }}>
          <Title>Volume Experiments</Title>
        </Col>

        {/* Scroll sections */}
        <Col lg={{ span: 5 }}>
          <SubTitle>Scroll</SubTitle>

          <Text>
            There is an audioplayer at the top of page. When you are
            scrolling down sound volume gets quiter just like in real
            life.
          </Text>

          <Link to="/volume-scroll">
            <Button>🔊 Try it out</Button>
          </Link>
        </Col>

        {/* Resize sections */}
        <Col lg={{ offset: 1, span: 5 }}>
          <SubTitle>Resize</SubTitle>

          <Text>
            Larger speaker can produce sound more loudly. In my
            experiment I use the same principle — larger the window
            louder the sound it produces and vice versa.
          </Text>

          <Link to="/volume-resize">
            <Button>🔊 Try it out</Button>
          </Link>
        </Col>

        <Spacer size={6} />

        {/* Details */}
        <Col lg={{ span: 12 }}>
          <ProjectTopics topics={['UI']} />
          <ProjectYear>2013</ProjectYear>
        </Col>
      </Row>
    </Container>
  </ProjectWrapper>
);

export default Volume;
