import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';
import { Col } from 'react-bootstrap';

// Components
import {
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

const WaterFilter: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Col className={css(styles.col)} lg={{ offset: 1, span: 7 }}>
      <UploadcareImage src="https://ucarecdn.com/2db57ca1-3de1-45aa-bb48-08c17eaa2433/" />
    </Col>

    <Col className={css(styles.col)} lg={{ offset: 5, span: 5 }}>
      <UploadcareImage src="https://ucarecdn.com/d9922bd6-54c3-49ca-aa12-dc371d09cbca/" />
    </Col>

    <Col lg={{ offset: 0, span: 12 }}>
      <Title>Eco problems with water</Title>
      <Text>
        Street installation. The water filter in an unusual situation
      </Text>
      <ProjectDisciplines disciplines={['Street Art']} />
      <ProjectTopics topics={['Social Commentary']} />
      <ProjectYear>2016</ProjectYear>
    </Col>
  </ProjectWrapper>
);

export default WaterFilter;
