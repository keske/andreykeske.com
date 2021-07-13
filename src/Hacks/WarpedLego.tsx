import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  ProjectTopics,
  ProjectYear,
  Text,
  Title,
} from '../components';

import Lego from './WarpedLego/Root';

const styles = StyleSheet.create({
  root: {
    paddingBottom: 115,
  },
});

const WarpedLego: React.FC = (): JSX.Element => (
  <div>
    <Lego />
    <Container className={css(styles.root)} fluid>
      <Row>
        <Col lg={{ offset: 2, span: 10 }}>
          <Title>LEGO TODO</Title>
          <Text>LEGO TODO</Text>
          <br />
          <br />
          <ProjectTopics topics={['Social Commentary']} />
          <ProjectYear>2021</ProjectYear>
        </Col>
      </Row>
    </Container>
  </div>
);

export default WarpedLego;
