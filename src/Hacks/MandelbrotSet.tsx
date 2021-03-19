/* eslint no-plusplus: 0 */

import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';
import { Col } from 'react-bootstrap';

// Components
import {
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Text,
  Title,
} from '../components';

const RADIO_BUTTON_SIZE = 10;

const styles = StyleSheet.create({
  wrapper: {
    height: 10 * 100,
    width: 10 * 100,
  },
});

const MandelbrotSet: React.FC = (): JSX.Element => {
  // https://github.com/delimitry/fractals-js/blob/master/js/fractals.js
  const generate = () => {
    const result = [];

    for (let x = 0; x < 100; x++) {
      for (let y = 0; y < 100; y++) {
        let i = 0;
        const cx = -2 + x / 50;
        const cy = -2 + y / 50;
        let zx = 0;
        let zy = 0;

        do {
          const xt = zx * zy;
          zx = zx * zx - zy * zy + cx;
          zy = 2 * xt + cy;
          i++;
        } while (i < 255 && zx * zx + zy * zy < 4);

        const color = i.toString(16);

        result.push([
          x * RADIO_BUTTON_SIZE,
          y * RADIO_BUTTON_SIZE,
          RADIO_BUTTON_SIZE,
          RADIO_BUTTON_SIZE,
          `#${color}${color}${color}`,
        ]);
      }
    }

    return result;
  };

  const data: any[] = React.useMemo(() => generate(), []);

  return (
    <ProjectWrapper>
      <Col lg={{ offset: 1, span: 8 }}>
        <div className={css(styles.wrapper)}>
          {data.map(([top, left, width, height, color]) => (
            <input
              checked={color === '#ffffff'}
              style={{
                height,
                left,
                position: 'absolute',
                top,
                width,
              }}
              type="radio"
            />
          ))}
        </div>
        <Title>Mandelbrot set</Title>
        <Text>
          The fractal geometry built from the Radio Button elements
        </Text>
        <ProjectTopics topics={['Interface', 'Mathematics']} />
        <ProjectYear>2021</ProjectYear>
      </Col>
    </ProjectWrapper>
  );
};

export default MandelbrotSet;
