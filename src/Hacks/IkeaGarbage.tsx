import * as React from 'react';

// Libs
import { Col } from 'react-bootstrap';

// Components
import {
  Button,
  Mark,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  ResponsiveFrame,
  Text,
  Title,
} from '../components';

const IkeaGarbage: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Col lg={{ offset: 3, span: 9 }}>
      <ResponsiveFrame
        src="https://www.youtube.com/embed/WjKAlIXw-sI"
        title="IKEA Place"
      />
      <Title>IKEA Place</Title>
      <Text>
        The first discarded piece of IKEA furniture in
        {' '}
        <Mark>Augmented Reality</Mark>
      </Text>
      <a href="https://apps.apple.com/us/app/ikea-place/id1279244498">
        <Button>Download Application →</Button>
      </a>
      <br />
      <br />
      <ProjectTopics topics={['AR', 'Ready Made']} />
      <ProjectYear>2017</ProjectYear>
    </Col>
  </ProjectWrapper>
);

export default IkeaGarbage;
