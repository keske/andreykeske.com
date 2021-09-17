import * as React from 'react';

// Libs
import { Col } from 'react-bootstrap';

// Components
import {
  Mark,
  ProjectDisciplines,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Text,
  Title,
  UploadcareImage,
} from '../components';

const RollingStones: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Col lg={{ offset: 2, span: 5 }}>
      <UploadcareImage src="https://ucarecdn.com/eea10eaa-ea87-4ecd-ae78-9de9e11b54e9/" />
      <Title>The Rolling Stones</Title>
      <Text>
        <Mark>Emoji-like</Mark>
        {' '}
        logo
      </Text>
      <ProjectDisciplines disciplines={['Graphic Design']} />
      <ProjectTopics topics={['Emoji']} />
      <ProjectYear>2017</ProjectYear>
    </Col>
  </ProjectWrapper>
);

export default RollingStones;
