import * as React from 'react';

// Libs
import { Col } from 'react-bootstrap';

// Components
import {
  ProjectTopics,
  ProjectYear,
  Text,
  Title,
} from '../components';

import Block from './WarpedMinecraft/Root';

const WarpedMinecraft: React.FC = (): JSX.Element => (
  <>
    <Block />
    <div>
      <Col lg={{ offset: 1, span: 10 }}>
        <Title>todo</Title>
        <Text>todo</Text>
        <ProjectTopics
          topics={['Minecraft', 'Non-euclidean geometry', 'ThreeJS']}
        />
        <ProjectYear>2021</ProjectYear>
      </Col>
    </div>
    <br />
    <br />
  </>
);

export default WarpedMinecraft;
