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
  Title,
  UploadcareImage,
} from '../components';

const styles = StyleSheet.create({
  col: {
    paddingBottom: 20,
    paddingTop: 20,
  },
});

const EmojiTattooFlashes: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Col className={css(styles.col)} lg={{ offset: 1, span: 5 }}>
      <UploadcareImage src="https://ucarecdn.com/68e01be8-2b39-40dd-b01e-376f79afdb83/" />
    </Col>

    <Col className={css(styles.col)} lg={{ offset: 5, span: 5 }}>
      <UploadcareImage src="https://ucarecdn.com/ec833e03-ddce-469a-bcf3-949fa043a025/" />
    </Col>

    <Col className={css(styles.col)} lg={{ offset: 3, span: 5 }}>
      <UploadcareImage src="https://ucarecdn.com/a8572a03-5dc2-48f5-9a6e-bfb3fabc35ab/" />
    </Col>

    <Col className={css(styles.col)} lg={{ offset: 2, span: 5 }}>
      <UploadcareImage src="https://ucarecdn.com/75a9fed1-642f-4e85-8ddb-987832341d51/" />
    </Col>

    <Col className={css(styles.col)} lg={{ offset: 2, span: 10 }}>
      <Title>Emoji Tattoo Flashes</Title>
      <ProjectDisciplines disciplines={['Graphic Design']} />
      <ProjectTopics topics={['Emoji', 'Tattoo']} />
      <ProjectYear>2017</ProjectYear>
    </Col>
  </ProjectWrapper>
);

export default EmojiTattooFlashes;
