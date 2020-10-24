import * as React from 'react';

// Libs
import { Col } from 'react-bootstrap';

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
    <Col lg={{ offset: 1, span: 9 }}>
      <ResponsiveFrame
        src="https://www.youtube.com/embed/biVVizdYm-I"
        title="Matryoshka"
      />
      <Title>Matryoshka</Title>
      <Text>
        Matryoshka in <Mark>interface of operation system</Mark>
      </Text>
      <ProjectTopics topics={['Interface', 'Ready Made']} />
      <ProjectYear>2017</ProjectYear>
    </Col>
  </ProjectWrapper>
);

export default Matryoshka;
