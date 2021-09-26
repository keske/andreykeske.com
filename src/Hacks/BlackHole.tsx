import * as React from 'react';

// Libs
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  ResponsiveFrame,
  Text,
  Title,
} from '../components';

const BlackHole: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ offset: 2, span: 9 }}>
          <ResponsiveFrame
            src="https://www.youtube.com/embed/oARU7GLKj3Y"
            title="Black Hole"
          />
          <Title>Black hole on my Desktop</Title>
          <Text>
            In the space of my Desktop was noticed a black hole where the
            any information or object will be removed forever
          </Text>
          <ProjectTopics topics={['Interface', 'Ready Made']} />
          <ProjectYear>2014</ProjectYear>
        </Col>
      </Row>
    </Container>
  </ProjectWrapper>
);

export default BlackHole;
