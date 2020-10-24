import * as React from 'react';

// Libs
import { Col } from 'react-bootstrap';

// Components
import {
  ProjectWrapper,
  ResponsiveFrame,
  Text,
  Title,
} from '../components';

const BlackHole: React.FC = (): JSX.Element => (
  <ProjectWrapper>
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
    </Col>
  </ProjectWrapper>
);

export default BlackHole;
