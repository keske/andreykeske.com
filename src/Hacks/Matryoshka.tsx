import * as React from 'react';

// Libs
import { Col } from 'react-bootstrap';

// Components
import {
  Mark,
  ProjectWrapper,
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
    </Col>
  </ProjectWrapper>
);

export default Matryoshka;
