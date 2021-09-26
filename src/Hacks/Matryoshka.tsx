import * as React from 'react';

// Libs
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  Mark,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  ResponsiveFrame,
  Text,
  Title,
} from '../components';

const Matryoshka: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ offset: 0, span: 9 }}>
          <ResponsiveFrame
            src="https://www.youtube.com/embed/biVVizdYm-I"
            title="Matryoshka"
          />

          <Title>Matryoshka</Title>

          <Text>
            Matryoshka in
            <Mark>interface of operation system</Mark>
          </Text>

          <ProjectTopics topics={['Interface', 'Ready Made']} />
          <ProjectYear>2017</ProjectYear>
        </Col>
      </Row>
    </Container>
  </ProjectWrapper>
);

export default Matryoshka;
