import * as React from 'react';

// Libs
import { Col } from 'react-bootstrap';

// Components
import {
  ProjectWrapper,
  Text,
  Title,
  UploadcareImage,
} from './components';

const About: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Col lg={{ offset: 0, span: 1 }}>
      <UploadcareImage src="https://ucarecdn.com/18251169-c22c-46f4-9add-a1b3670cf257/" />
    </Col>
    <Col lg={{ span: 8 }}>
      <Title>Andrey Keske</Title>
      <Text>
        Artist/Programmer, I&#39;m working in different disciplines
        and on various topics, suchs us: street art, interface
        hacking, photograpy/cinematograpy and a lot other intresting
        things
      </Text>
      <Text>
        <a href="mailto://hello@andreykeske.com">
          hello@andreykeske.com
        </a>
        {' • '}
        <a href="https://github.com/keske">Github</a>
        {' • '}
        <a href="https://www.instagram.com/andreykeske/">Instagram</a>
        {' • '}
        <a href="https://www.linkedin.com/in/andrey-keske-45583423/">
          LinkedIn
        </a>
      </Text>
    </Col>
  </ProjectWrapper>
);

export default About;
