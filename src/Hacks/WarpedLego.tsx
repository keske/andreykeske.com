import * as React from 'react';

// Libs
import { Col } from 'react-bootstrap';

// Components
import { ProjectTopics, ProjectYear, Title } from '../components';

import Lego from './WarpedLego/Root';

const WarpedLego: React.FC = (): JSX.Element => (
  <>
    <Lego />
    <div>
      <Col lg={{ offset: 1, span: 10 }}>
        <Title>Lego brick in non-euclidean geometry world</Title>
        <ProjectTopics
          topics={['Lego', 'Non-euclidean geometry', 'ThreeJS']}
        />
        <ProjectYear>2021</ProjectYear>
      </Col>
    </div>
    <br />
    <br />
  </>
);

export default WarpedLego;
