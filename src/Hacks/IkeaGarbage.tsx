import * as React from 'react';

// Libs
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  Button,
  Mark,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  ResponsiveFrame,
  Spacer,
  Text,
  Title,
} from '../components';

const IkeaGarbage: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ offset: 2, span: 9 }}>
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

          <Spacer size={8} />

          <ProjectTopics topics={['AR', 'Ready Made']} />
          <ProjectYear>2017</ProjectYear>
        </Col>
      </Row>
    </Container>
  </ProjectWrapper>
);

export default IkeaGarbage;
