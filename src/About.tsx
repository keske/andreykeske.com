import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';
import { Col } from 'react-bootstrap';

// Components
import { Me, ProjectWrapper, Text } from './components';

const DESKTOP_FONT_SIZE = 1.9;
const MOBILE_FONT_SIZE = 1.7;

const getTypographySettings = (
  fontSize: number,
): Record<string, string> => ({
  fontSize: `${fontSize}rem`,
  letterSpacing: `${fontSize / 15}rem`,
});

const styles = StyleSheet.create({
  root: {
    '@media screen and (max-width: 414px)': {
      marginTop: 100,
    },
  },
  title: {
    '@media screen and (max-width: 414px)': {
      ...getTypographySettings(MOBILE_FONT_SIZE),
      marginBottom: 10,
      marginTop: 20,
    },
    ...getTypographySettings(DESKTOP_FONT_SIZE),
    fontWeight: 600,
    marginBottom: 20,
    marginTop: 40,
    textTransform: 'uppercase',
  } as const,
});

const About: React.FC = (): JSX.Element => (
  <div className={css(styles.root)}>
    <Me />
    <ProjectWrapper>
      <Col lg={{ span: 8 }}>
        <h1 className={css(styles.title)}>
          Andrey Keske is a Russian fullstack developer and designer
          <br />
          <br />
          He is focusing on the engineering of applications and
          back-end architectures.
          <br />
          <br />
          In parallel to his main job, he is always trying to find a
          new vision of common things in life, interfaces, or even
          music and video
          <br />
          <br />
          Now Andrey lives in the USA between two cities New York and
          Miami
        </h1>
        <Text>
          <a href="mailto://keskeone@gmail.com">keskeone@gmail.com</a>
          {' • '}
          <a href="https://github.com/keske">Github</a>
          {' • '}
          <a href="https://www.instagram.com/andreykeske/">
            Instagram
          </a>
          {' • '}
          <a href="https://www.linkedin.com/in/andrey-keske-45583423/">
            LinkedIn
          </a>
          {' • '}
          <a href="https://www.youtube.com/user/andreykeske">
            YouTube
          </a>
        </Text>
      </Col>
    </ProjectWrapper>
  </div>
);

export default About;
