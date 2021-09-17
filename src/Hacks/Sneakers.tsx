import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';
import { Col } from 'react-bootstrap';

// Components
import {
  Mark,
  ProjectDisciplines,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Text,
  Title,
  UploadcareImage,
} from '../components';

const styles = StyleSheet.create({
  col: {
    paddingBottom: 20,
    paddingTop: 20,
  },
});

const Sneakers: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Col className={css(styles.col)} lg={{ offset: 1, span: 7 }}>
      <UploadcareImage src="https://ucarecdn.com/1bb81a7a-6640-4ff2-a62a-33279b4a7e94/" />

      <Title>Sneakers</Title>
      <Text>
        I took the popular model of both brands —
        {' '}
        <Mark>Nike Dunk</Mark>
        {' '}
        and
        <Mark>Adidas Superstar</Mark>
        {' '}
        — and
        crossed them.
      </Text>
      <ProjectDisciplines disciplines={['Graphic Design']} />
      <ProjectTopics topics={['Fashion']} />
      <ProjectYear>2011</ProjectYear>
    </Col>
  </ProjectWrapper>
);

export default Sneakers;
