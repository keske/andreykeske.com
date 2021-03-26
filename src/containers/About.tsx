import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';
import { Col } from 'react-bootstrap';

// Components
import { Me, ProjectWrapper, Text } from '../components';

const DESKTOP_FONT_SIZE = 4.0;
const MOBILE_FONT_SIZE = 1.7;

const getTypographySettings = (
  fontSize: number,
): Record<string, string> => ({
  fontSize: `${fontSize}rem`,
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
    fontWeight: 800,
    letterSpacing: `-.025rem`,
    marginBottom: 40,
    marginTop: 40,
  } as const,
});

const About: React.FC = (): JSX.Element => (
  <div className={css(styles.root)}>
    <Me />
    <ProjectWrapper>
      <Col lg={{ span: 10 }}>
        <h1 className={css(styles.title)}>Andrey Keske</h1>
        <Text>Andrey Keske is a fullstack developer</Text>
        <Text>
          He is focusing on the engineering of applications and
          back-end architectures. In parallel to his main job, he is
          always trying to find a new vision of common things in life,
          interfaces, or even music and video
        </Text>
        <Text>Andrey lives in Miami, Fl</Text>
        <Text>
          <a href="mailto://hello@andreykeske.com">
            hello@andreykeske.com
          </a>
          {' • '}
          <a href="https://github.com/keske">Github</a>
          {' • '}
          <a href="https://www.instagram.com/andreykeske/">
            Instagram
          </a>
          {' • '}
          <a href="https://www.linkedin.com/in/andreykeske/">
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
