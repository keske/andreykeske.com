import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';
import { Col } from 'react-bootstrap';

// Components
import {
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Title,
  UploadcareImage,
} from '../components';

const styles = StyleSheet.create({
  col: {
    paddingBottom: 20,
    paddingTop: 20,
  },
});

const Manhattan: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Col className={css(styles.col)} lg={{ offset: 4, span: 5 }}>
      <UploadcareImage src="https://ucarecdn.com/287536f5-7822-497f-ab92-9363e935791f/" />

      <Title>Inverted Manhattan</Title>
      <ProjectTopics topics={['Ready Made']} />
      <ProjectYear>2011</ProjectYear>
    </Col>
  </ProjectWrapper>
);

export default Manhattan;
