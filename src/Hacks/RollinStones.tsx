import * as React from 'react';

// Libs
import { Col } from 'react-bootstrap';

// Components
import {
  Mark,
  ProjectWrapper,
  Text,
  Title,
  UploadcareImage,
} from '../components';

const RollinStones: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Col lg={{ offset: 2, span: 5 }}>
      <UploadcareImage src="https://ucarecdn.com/eea10eaa-ea87-4ecd-ae78-9de9e11b54e9/" />
      <Title>The Rolling Stones</Title>
      <Text>
        <Mark>Emoji-like</Mark> logo
      </Text>
    </Col>
  </ProjectWrapper>
);

export default RollinStones;
