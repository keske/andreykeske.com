import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  Button,
  ProjectTopics,
  ProjectYear,
  Text,
  Title,
} from '../components';

import Sphere from './BTCBubble/Root';

const styles = StyleSheet.create({
  root: {
    paddingBottom: 115,
  },
});

const BTCBubble: React.FC = (): JSX.Element => (
  <div>
    <Sphere />
    <Container className={css(styles.root)} fluid>
      <Row>
        <Col lg={{ offset: 2, span: 10 }}>
          <Title>BTC Bubble</Title>
          <Text>
            The current project is about the social opinion that
            Bitcoin is a bubble and text inside it is the current
            BTC&#39;s course.
          </Text>
          <a href="https://btc-bubble.vercel.app">
            <Button>Open Site →</Button>
          </a>
          <br />
          <br />
          <ProjectTopics topics={['Social Commentary']} />
          <ProjectYear>2021</ProjectYear>
        </Col>
      </Row>
    </Container>
  </div>
);

export default BTCBubble;
