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

import Sphere from './EsherSphere/Root';

const styles = StyleSheet.create({
  root: {
    paddingBottom: 115,
  },
});

const EsherSphere: React.FC = (): JSX.Element => (
  <>
    <Sphere />

    <Container className={css(styles.root)} fluid>
      <Row>
        <Col lg={{ offset: 2, span: 10 }}>
          <Title>EsherSphere</Title>

          <Text>EsherSphere</Text>

          <ProjectTopics topics={['Social Commentary']} />
          <ProjectYear>2021</ProjectYear>
        </Col>
      </Row>
    </Container>
  </>
);

export default EsherSphere;
