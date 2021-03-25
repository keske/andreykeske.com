import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Components
import {
  Button,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Text,
  Title,
  UploadcareImage,
} from '../components';

// Local
import MandelbrotSetGeometry from './MandelbrotSet.Geometry';

const styles = StyleSheet.create({
  wrapper: {
    height: 10 * 100,
    width: 10 * 100,
  },
});

const MandelbrotSet: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Col lg={{ offset: 1, span: 10 }}>
      <div className={css(styles.wrapper)}>
        <MandelbrotSetGeometry />
      </div>
      <Title>Mandelbrot set</Title>
      <Text>
        The fractal geometry built from the Radio Button elements
      </Text>
      <UploadcareImage src="https://ucarecdn.com/3691298d-b2d6-4b07-bf4c-5319f8947739/" />
      <br />
      <br />
      <Link to="/mandelbrot-set">
        <Button>Try it out →</Button>
      </Link>
      <br />
      <br />
      <ProjectTopics topics={['Interface', 'Mathematics']} />
      <ProjectYear>2021</ProjectYear>
    </Col>
  </ProjectWrapper>
);

export default MandelbrotSet;
