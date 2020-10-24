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

const ShellGame: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Col lg={{ offset: 0, span: 10 }}>
      <ResponsiveFrame
        src="https://www.youtube.com/embed/8P2lZcFDNw0"
        title="The Shell Game"
      />
      <Title>The Shell Game</Title>
      <Text>
        I am continuing to insert games to the{' '}
        <Mark>interface of operation system</Mark>. Now it is a shell
        game.
      </Text>
    </Col>
  </ProjectWrapper>
);

export default ShellGame;
