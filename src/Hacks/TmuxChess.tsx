import * as React from 'react';

// Libs
import { Col } from 'react-bootstrap';

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

const TmuxChess: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Col lg={{ offset: 0, span: 12 }}>
      <ResponsiveFrame
        src="https://www.youtube.com/embed/JlvEuMp2UVw"
        title="Tmux Chess"
      />
      <Title>Tmux Chess</Title>
      <Text>
        Playing in Chess using
        {' '}
        <Mark>tmux</Mark>
        {' '}
        as board
      </Text>
      <ProjectTopics topics={['Interface', 'Ready Made']} />
      <ProjectYear>2014</ProjectYear>
    </Col>
  </ProjectWrapper>
);

export default TmuxChess;
