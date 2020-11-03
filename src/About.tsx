import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';
import { Col } from 'react-bootstrap';

// Components
import { Me, ProjectWrapper, Text } from './components';

const DESKTOP_FONT_SIZE = 2.7;
const MOBILE_FONT_SIZE = 1.7;

const getTypographySettings = (
  fontSize: number,
): Record<string, string> => ({
  fontSize: `${fontSize}rem`,
  letterSpacing: `${fontSize / 15}rem`,
});

const styles = StyleSheet.create({
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
  <>
    <Me />
    <ProjectWrapper>
      <Col lg={{ span: 8 }}>
        <h1 className={css(styles.title)}>Andrey Keske</h1>
        <Text>
          Artist/Programmer, I&#39;m working in different disciplines
          and on various topics, such us: street art, interface
          hacking, photograpy/cinematograpy, etc
        </Text>
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
          <a href="https://www.linkedin.com/in/andrey-keske-45583423/">
            LinkedIn
          </a>
        </Text>
      </Col>
    </ProjectWrapper>
  </>
);

export default About;
