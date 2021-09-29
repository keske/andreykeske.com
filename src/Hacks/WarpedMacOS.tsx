import * as React from 'react';

// Libs
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  ProjectTopics,
  ProjectYear,
  Spacer,
  Text,
  Title,
} from '../components';

import MacOS from './WarpedMacOS/Root';

const WarpedMacOS: React.FC = (): JSX.Element => (
  <>
    <Container>
      <Row>
        <Col lg={{ span: 12 }}>
          <MacOS />
        </Col>
      </Row>
    </Container>

    <Container>
      <Row>
        <Col
          lg={{ span: 9 }}
          md={{ span: 9 }}
          sm={{ span: 12 }}
          xs={{ span: 12 }}
        >
          <Title>MacOS</Title>
          <Text>todo</Text>
        </Col>
      </Row>

      <Spacer size={10} />

      <Container>
        <Row>
          <Col lg={{ span: 6 }}>
            <ProjectTopics topics={['MacOS', 'UI']} />
            <ProjectYear>2021</ProjectYear>
          </Col>
        </Row>
      </Container>
    </Container>
  </>
);

export default WarpedMacOS;
