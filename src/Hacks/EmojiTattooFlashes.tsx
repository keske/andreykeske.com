import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';
import { Col, Row } from 'react-bootstrap';

// Components
import {
  ProjectWrapper,
  Title,
  UploadcareImage,
} from '../components';

const styles = StyleSheet.create({
  col: {
    padding: 20,
  },
});

const EmojiTattooFlashes: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Row>
      <Col className={css(styles.col)} lg={{ offset: 1, span: 4 }}>
        <UploadcareImage src="https://ucarecdn.com/68e01be8-2b39-40dd-b01e-376f79afdb83/" />
      </Col>
    </Row>
    <Row>
      <Col className={css(styles.col)} lg={{ offset: 5, span: 4 }}>
        <UploadcareImage src="https://ucarecdn.com/ec833e03-ddce-469a-bcf3-949fa043a025/" />
      </Col>
    </Row>
    <Row>
      <Col className={css(styles.col)} lg={{ offset: 3, span: 4 }}>
        <UploadcareImage src="https://ucarecdn.com/a8572a03-5dc2-48f5-9a6e-bfb3fabc35ab/" />
      </Col>
    </Row>
    <Row>
      <Col className={css(styles.col)} lg={{ offset: 2, span: 4 }}>
        <UploadcareImage src="https://ucarecdn.com/75a9fed1-642f-4e85-8ddb-987832341d51/" />
      </Col>
    </Row>

    <Title>Emoji Tattoo Flashes</Title>
  </ProjectWrapper>
);

export default EmojiTattooFlashes;
