import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';
import { Col } from 'react-bootstrap';

// Components
import {
  Mark,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Text,
  Title,
  UploadcareImage,
} from '../components';

const styles = StyleSheet.create({
  align: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  col: {
    paddingBottom: 20,
    paddingTop: 20,
  },
});

const LOT2046Tattoo: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Col className={css(styles.col)} lg={{ offset: 0, span: 10 }}>
      <UploadcareImage src="https://ucarecdn.com/58007ddf-42d7-4892-b431-713538b95b93/" />
    </Col>
    <Col className={css(styles.col)} lg={{ offset: 6, span: 5 }}>
      <UploadcareImage src="https://ucarecdn.com/a9e460fb-b621-4e60-9201-06c981ef4d68/" />
    </Col>

    <Col className={css(styles.col)} lg={{ offset: 2, span: 10 }}>
      <Title>LOT2046 Tattoo Machine</Title>
      <Text>
        Tattoo machine which I&#39;ve built from
        {' '}
        <a href="https://www.lot2046.com/">lot2046</a>
        {' '}
        products:
        {' '}
        <Mark>hair trimmer</Mark>
        {' '}
        and
        {' '}
        <Mark>toothbrush</Mark>
      </Text>
    </Col>

    <Col className={css(styles.col)} lg={{ offset: 2, span: 3 }}>
      <UploadcareImage src="https://ucarecdn.com/74eebc30-354a-4b5d-86f0-9a45bd74c230/" />
    </Col>
    <Col
      className={css(styles.col, styles.align)}
      lg={{ offset: 0, span: 6 }}
    >
      <UploadcareImage src="https://ucarecdn.com/f1615601-6fc7-4d05-bdfb-ee78632d451a/" />
    </Col>

    <Col className={css(styles.col)} lg={{ offset: 2, span: 10 }}>
      <ProjectTopics topics={['DIY', 'Ready Made']} />
      <ProjectYear>2019</ProjectYear>
    </Col>
  </ProjectWrapper>
);

export default LOT2046Tattoo;
