import * as React from 'react';

// Libs
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  ResponsiveFrame,
  Title,
} from '../components';

const Ball: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ offset: 1, span: 6 }}>
          <ResponsiveFrame
            src="https://www.youtube.com/embed/dT1l7jtfNWw"
            title="Ball"
          />
          <Title>Ball</Title>
          <ProjectTopics topics={['Interface', 'Ready Made']} />
          <ProjectYear>2014</ProjectYear>
        </Col>
      </Row>
    </Container>
  </ProjectWrapper>
);

export default Ball;
