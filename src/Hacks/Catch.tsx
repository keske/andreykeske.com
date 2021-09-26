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

const Catch: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ offset: 1, span: 8 }}>
          <ResponsiveFrame
            src="https://www.youtube.com/embed/tCV8dwhAwf0"
            title="Catch"
          />

          <Title>The Catch</Title>

          <Text>
            The application icon in the dock is a trap from the
            <Mark>Ghostbusters</Mark>
          </Text>

          <Text>
            The window is a ghost. Window minimization represents a scene
            from the movie of catching a ghost
          </Text>

          <Text>Thanks: Andrey Smirny and Nikita Rokotyan</Text>

          <ProjectTopics topics={['Interface', 'Ready Made']} />
          <ProjectYear>2013</ProjectYear>
        </Col>
      </Row>

    </Container>
  </ProjectWrapper>
);

export default Catch;
