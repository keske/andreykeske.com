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

const MacOSGamesDice: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ offset: 0, span: 9 }}>
          <ResponsiveFrame
            src="//player.vimeo.com/video/40102765"
            title="Dice game"
          />
          <Title>Dice game</Title>
          <Text>
            Very simple. Normal folder in Preview mode shows previews of
            the image files, two in our case. Script copes such two images
            <Mark>randomly</Mark>
            {' '}
            and gives a combination of two dices.
          </Text>

          <SubTitle>How to play</SubTitle>
          <ul>
            <li>Open folder and set Preview mode</li>
            <li>
              Open Terminal
              <br />
              $ cd path-to-game/
            </li>
            <li>Run the game ($ php game.php)</li>
            <li>Each roll is a script run</li>
          </ul>

          <a href="https://github.com/keske/Mac-OS-UI-Games/blob/master/dicegame.zip?raw=true">
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

export default MacOSGamesDice;
