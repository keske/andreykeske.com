/* eslint max-len: 0 */
/* eslint max-lines: 0 */
/* eslint react/no-array-index-key: 0 */

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

const xSpaces = 6;
const ySpaces = 6;

const steps = 14;
const stepInc = 1 / (steps / (2 + 1 / steps) - 1);

const turnDur = '0.6s';

const firstStepH = 2;

// colors
const stepColor1 = '#fff';
const stepColor2 = '#888';
const stepColor3 = '#555';

const data = [
  {
    h: firstStepH,
    x: 1,
    y: 1,
    z: 1,
  },
  {
    h: firstStepH + stepInc,
    x: 1,
    y: 2,
    z: 1,
  },
  {
    h: firstStepH + stepInc * 2,
    x: 1,
    y: 3,
    z: 1,
  },
  {
    h: firstStepH + stepInc * 3,
    x: 1,
    y: 4,
    z: 1,
  },
  {
    h: firstStepH + stepInc * 4,
    x: 1,
    y: 5,
    z: 1,
  },
  {
    h: firstStepH + stepInc * 5,
    x: 1,
    y: 6,
    z: 1,
  },
];

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    height: `1em * ${ySpaces} + 0.3em`,
    justifyContent: 'center',
    transformStyle: 'preserve-3d',
    width: `1em * ${xSpaces}`,
  },
  front: {
    height: '1em',
    position: 'absolute',
    transform: 'translateZ(0)',
    width: '1em',
  },
  left: {
    height: '1em',
    position: 'absolute',
    transform: 'rotateY(270deg) translateX(-1em)',
    transformOrigin: 'center left',
    width: '1em',
  },
  right: {
    border: '1px solid red',
    height: '1em',
    position: 'absolute',
    transform: 'rotateY(-270deg) translateX(1em)',
    transformOrigin: 'top right',
    width: '1em',
  },
  step: {
    transformStyle: 'preserve-3d',
  },
  stepInner: {
    height: '1em',
    position: 'relative',
    transform: 'rotateX(-90deg) translateZ(1em)',
    transformStyle: 'preserve-3d',
    // position: 'absolute',
    width: '1em',
  },
  surface: {
    height: `1em * ${ySpaces}`,
    margin: 'auto',
    transform: 'rotateX(60deg) rotateZ(45deg)',
    transformStyle: 'preserve-3d',
    transition: 'transform $turnDur linear',
    width: `1em * ${xSpaces}`,
    willChange: 'transform',
  },
  top: {
    height: '1em',
    position: 'absolute',
    transform: 'rotateX(-90deg) translateY(0)',
    transformOrigin: 'top center',
    transition: `background ${turnDur} linear`,
    width: '1em',
  },
});

const ImposiblePiano: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Col lg={{ offset: 1, span: 10 }}>
      {/* Piano */}
      <div className={css(styles.container)}>
        <div className={css(styles.surface)}>
          {data.map(({ x, y, z, h }, index) => (
            <div
              key={index}
              // a={console.log(
              //   `translate3d(${300 * (x - 1)}, ${300 * (y - 1)}, ${
              //     300 * z
              //   } + (1em*(${h} - 1)))`,
              // )}
              className={css(styles.step)}
              style={{
                // transform: `translate3d(1em*(${x} - 1), 1em*(${y} - 1), (1em*${z}) + (1em*(${h} - 1)))`,
                transform: `translate3d(${300 * (x - 1)}, ${
                  300 * (y - 1)
                }, ${300 * z} + ${300 * h - 1}))`,
              }}
            >
              <div className={css(styles.stepInner)}>
                <div
                  className={css(styles.front)}
                  style={{
                    background: stepColor2,
                    height: `1em * ${h}`,
                  }}
                />
                <div
                  className={css(styles.top)}
                  style={{ background: stepColor1 }}
                />
                <div
                  className={css(styles.left)}
                  style={{
                    background: stepColor3,
                    height: `1em * ${h}`,
                  }}
                />
                <div
                  className={css(styles.right)}
                  style={{
                    background: stepColor3,
                    height: `1em * ${h}`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Title>ImposiblePiano</Title>
      <Text>ImposiblePiano</Text>
    </Col>
    <Col lg={{ offset: 1, span: 9 }}>
      <br />
      <br />
      <ProjectTopics topics={['UI']} />
      <ProjectYear>2021</ProjectYear>
    </Col>
  </ProjectWrapper>
);

export default ImposiblePiano;
