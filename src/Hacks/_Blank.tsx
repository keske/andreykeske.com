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
} from '../components';

const InsertName: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Col lg={{ offset: 1, span: 6 }}>
      <Title>Title</Title>
      <Text>Description</Text>
      <ProjectTopics topics={['TOPIC']} />
      <ProjectYear>0000</ProjectYear>
    </Col>
  </ProjectWrapper>
);

export default InsertName;
