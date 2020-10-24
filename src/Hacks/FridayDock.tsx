import * as React from 'react';

// Libs
import { Col } from 'react-bootstrap';

// Components
import {
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Text,
  UploadcareImage,
} from '../components';

const FridayDock: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Col lg={{ offset: 3, span: 9 }}>
      <UploadcareImage src="https://ucarecdn.com/911b64c6-4ffd-496f-963f-9f9ccef251bb/" />
      <Text>Normal Dock</Text>
      <UploadcareImage src="https://ucarecdn.com/ca75b791-72ea-4be3-a779-6a75f6eb43d8/" />
      <Text>Friday Dock</Text>
      <ProjectTopics topics={['Interface']} />
      <ProjectYear>2013</ProjectYear>
    </Col>
  </ProjectWrapper>
);

export default FridayDock;
