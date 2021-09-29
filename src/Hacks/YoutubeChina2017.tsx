import * as React from 'react';

// Libs
import { Col } from 'react-bootstrap';

// Components
import {
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  ResponsiveFrame,
  Text,
  Title,
} from '../components';

const YoutubeChina2017: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Col lg={{ offset: 2, span: 9 }}>
      <ResponsiveFrame
        src="https://www.youtube.com/embed/3MSpfgV3dfA"
        title="Trip to China 2017"
      />

      <Title>China</Title>

      <Text>Our trip to China in 2017</Text>

      <ProjectTopics topics={['Video', 'Youtube']} />
      <ProjectYear>2017</ProjectYear>
    </Col>
  </ProjectWrapper>
);

export default YoutubeChina2017;
