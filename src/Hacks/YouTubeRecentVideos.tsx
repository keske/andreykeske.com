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

const YouTubeRecentVideos: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ offset: 0, span: 6 }}>
          <ResponsiveFrame
            src="https://www.youtube.com/embed/N3N1V4KUbzo"
            title="Trip to China 2017"
          />
        </Col>

        <Col lg={{ offset: 0, span: 6 }}>
          <ResponsiveFrame
            src="https://www.youtube.com/embed/3MSpfgV3dfA"
            title="Trip to China 2017"
          />
        </Col>

        <Col lg={{ offset: 0, span: 12 }}>
          <Title>YouTube Recent Videos</Title>

          <ProjectTopics topics={['Video', 'Youtube']} />

          <ProjectYear>2017&mdash;2020</ProjectYear>
        </Col>
      </Row>
    </Container>
  </ProjectWrapper>
);

export default YouTubeRecentVideos;
