import * as React from 'react';

// Libs
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  Button,
  Mark,
  ProjectDisciplines,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  ResponsiveFrame,
  Spacer,
  SubTitle,
  Text,
  Title,
} from '../components';

const MacOSGamesSlot: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ offset: 1, span: 9 }}>
          <ResponsiveFrame
            src="//player.vimeo.com/video/40103163"
            title="IKEA Place"
          />
          <Title>Slot Machines</Title>
          <Text>
            3 slots, each has a set of pictures. The aim of the game is to
            get 3 the same pictures. In my game each slot is the simple
            folder in
            {' '}
            <Mark>Cover Flow</Mark>
            {' '}
            mode and in contrast WI the
            original game the movement of the slots is horizontal.
          </Text>

          <SubTitle>How to play</SubTitle>
          <ul>
            <li>
              Open Terminal
              <br />
              $ cd path-to-game/
            </li>
            <li>
              Open 3 folders and place them on below the other.
              <br />
              $ open first/
              <br />
              $ open second/
              <br />
              $ open third/
            </li>
            <li>
              Run game.php script. After that pictures from the source
              folder will be randomly copied 600 times to the folders
              first, second mad third
              <br />
              $ php game.php
            </li>
          </ul>

          <a href="https://github.com/keske/Mac-OS-UI-Games/blob/master/slotmachine.zip?raw=true">
            <Button>Download game (34Kb) →</Button>
          </a>

          <Spacer size={6} />

          <ProjectDisciplines disciplines={['Programming']} />
          <ProjectTopics topics={['Game', 'Interface']} />
          <ProjectYear>2011</ProjectYear>
        </Col>
      </Row>
    </Container>
  </ProjectWrapper>
);

export default MacOSGamesSlot;
