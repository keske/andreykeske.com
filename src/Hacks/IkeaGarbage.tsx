import * as React from 'react';

// Libs
import { Col } from 'react-bootstrap';

// Components
import {
  Button,
  Mark,
  ProjectWrapper,
  ResponsiveFrame,
  Text,
  Title,
} from '../components';

const IkeaGarbage: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Col lg={{ offset: 3, span: 7 }}>
      <ResponsiveFrame
        src="https://www.youtube.com/embed/WjKAlIXw-sI"
        title="Catch"
      />
      <Title>IKEA Place</Title>
      <Text>
        The first discarded piece of IKEA furniture in{' '}
        <Mark>Augmented Reality</Mark>
      </Text>
      <a href="https://apps.apple.com/us/app/ikea-place/id1279244498">
        <Button>Download Application →</Button>
      </a>
    </Col>
  </ProjectWrapper>
);

export default IkeaGarbage;
