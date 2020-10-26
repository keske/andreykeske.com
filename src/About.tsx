import * as React from 'react';

// Libs
import { Col } from 'react-bootstrap';

// Components
import { Me, ProjectWrapper, Text, Title } from './components';

const About: React.FC = (): JSX.Element => (
  <>
    <Me />
    <ProjectWrapper>
      <Col lg={{ span: 8 }}>
        <Title>Andrey Keske</Title>
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
