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

const Shadows: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ offset: 2, span: 10 }}>
          <ResponsiveFrame
            src="https://www.youtube.com/embed/gPrZHOOw8R0"
            title="Spectrum at browser bar"
          />

          <Title>The shadows of the window</Title>

          <Text>
            I continue research and experiments with Mac OS interface.
            This time I found that I can interact with
            {' '}
            <Mark>window&#39;s shadow</Mark>
          </Text>

          <Text>The slider controls the size of the shadow</Text>

          <ProjectTopics topics={['Interface']} />
          <ProjectYear>2014</ProjectYear>
        </Col>
      </Row>
    </Container>
  </ProjectWrapper>
);

export default Shadows;
