import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  Frame,
  Mark,
  ProjectTopics,
  ProjectYear,
  Spacer,
  Text,
  Title,
} from '../components';

const styles = StyleSheet.create({
  container: {
    paddingLeft: -10,
    paddingRight: -10,
  },
  root: {
    '-webkit-filter': 'sepia(1)',
    filter: 'sepia(1)',
    height: 500,
  },
});

const VintageGoogleStreetView: React.FC = (): JSX.Element => (
  <>
    <Container className={css(styles.container)} fluid>
      <Row>
        <Col lg={{ span: 12 }}>
          <div className={css(styles.root)}>
            <Frame
              src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2s!4v1450984193097!6m8!1m7!1svi6B_N4KMxCQ7a7YNK33Rg!2m2!1d59.93816577301972!2d30.31553520547882!3f356.8860847078911!4f-0.7391829729079404!5f0.7820865974627469"
              title="Google Street View vintage style"
            />
          </div>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col lg={{ span: 12 }}>
          <Title>Google Street View vintage style</Title>
          <Text>Black and white with sepia like old photo card</Text>
          <Mark>⇧ Try to swipe it ⇧</Mark>
          <Spacer size={6} />
          <ProjectTopics topics={['Interface', 'Ready Made']} />
          <ProjectYear>2016</ProjectYear>
        </Col>
      </Row>
    </Container>
  </>
);

export default VintageGoogleStreetView;
