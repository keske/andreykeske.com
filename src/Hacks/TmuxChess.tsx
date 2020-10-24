import * as React from 'react';

// Libs
import { Col } from 'react-bootstrap';

// Components
import {
  Mark,
  ProjectWrapper,
  ResponsiveFrame,
  Text,
  Title,
} from '../components';

const TmuxChess: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Col lg={{ offset: 0, span: 12 }}>
      <ResponsiveFrame
        src="https://www.youtube.com/embed/JlvEuMp2UVw"
        title="Catch"
      />
      <Title>Tmux Chess</Title>
      <Text>
        Playing in Chess using <Mark>tmux</Mark> as board
      </Text>
    </Col>
  </ProjectWrapper>
);

export default TmuxChess;
