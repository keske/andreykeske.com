import * as React from 'react';

// Libs
import { Col } from 'react-bootstrap';

// Components
import {
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Text,
  Title,
  UploadcareImage,
} from '../components';

const TickyApplication: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Col lg={{ span: 6 }}>
      <UploadcareImage src="https://ucarecdn.com/481dd826-6c71-4d9f-b1aa-1a2b46e62422/" />
    </Col>
    <Col lg={{ span: 6 }}>
      <br />
      <br />
      <Title>Ticky App</Title>
      <Text>
        Ticky is an application that shows the current time (or
        selected timezone&rsquo;s time) through the notification
        badge.
      </Text>
      <Text>Soon on the AppStore</Text>
      <ProjectTopics topics={['Application', 'Interface']} />
      <ProjectYear>2021</ProjectYear>
    </Col>
  </ProjectWrapper>
);

export default TickyApplication;
