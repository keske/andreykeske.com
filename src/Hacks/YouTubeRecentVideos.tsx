import * as React from 'react';

// Libs
import { Col } from 'react-bootstrap';

// Components
import {
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  ResponsiveFrame,
  // Text,
  Title,
} from '../components';

const YouTubeRecentVideos: React.FC = (): JSX.Element => (
  <ProjectWrapper>
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
      {/*
        <Text>
          At the end of the year 2017, I realized that I want to make
          cinematic look videos and bought my first DSLR camera.
        </Text>
        */}
      <ProjectTopics topics={['Video', 'Youtube']} />
      <ProjectYear>2017&mdash;2020</ProjectYear>
    </Col>
  </ProjectWrapper>
);

export default YouTubeRecentVideos;
