import * as React from 'react';

// Libs
import { Col } from 'react-bootstrap';

// Components
import {
  Button,
  Mark,
  ProjectDisciplines,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  ResponsiveFrame,
  SubTitle,
  Text,
  Title,
} from '../components';

const MacOSGamesDice: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Col lg={{ offset: 0, span: 10 }}>
      <ResponsiveFrame
        src="//player.vimeo.com/video/40102765"
        title="Dice game"
      />
      <Title>Dice game</Title>
      <Text>
        Very simple. Normal folder in Preview mode shows previews of
        the image files, two in our case. Script copes such two images
        <Mark>randomly</Mark> and gives a combination of two dices.
      </Text>

      <SubTitle>How to play</SubTitle>
      <ul>
        <li>Open folder and set Preview mode</li>
        <li>
          Open Terminal
          <br />$ cd path-to-game/
        </li>
        <li>Run the game ($ php game.php)</li>
        <li>Each roll is a script run</li>
      </ul>

      <a href="https://github.com/keske/Mac-OS-UI-Games/blob/master/dicegame.zip?raw=true">
        <Button>Download game (34Kb) →</Button>
      </a>
      <br />
      <br />
      <ProjectDisciplines disciplines={['Programming']} />
      <ProjectTopics topics={['Game', 'Interface']} />
      <ProjectYear>2011</ProjectYear>
    </Col>
  </ProjectWrapper>
);

export default MacOSGamesDice;
