import * as React from 'react';

// Libs
import { Col } from 'react-bootstrap';

// Components
import {
  ProjectWrapper,
  Title,
  UploadcareImage,
} from '../components';

const EmojiBack: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Col lg={{ offset: 2, span: 6 }}>
      <UploadcareImage src="https://ucarecdn.com/f73ebc4a-f1bf-434c-b5b6-f9a8383b82f6/" />
      <Title>Emoji From the Back</Title>
    </Col>
  </ProjectWrapper>
);

export default EmojiBack;
