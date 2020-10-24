import * as React from 'react';

// Libs
import { Col } from 'react-bootstrap';

// Components
import {
  ProjectWrapper,
  Title,
  UploadcareImage,
} from '../components';

const EmojiHub: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Col lg={{ offset: 1, span: 10 }}>
      <UploadcareImage src="https://ucarecdn.com/511c5aef-b015-4b37-b0d0-73869dbff1e7/" />
      <Title>
        Search Queries with Emoji for Pornhub
        <span aria-label="OK and Finger" role="img">
          👌👈
        </span>
      </Title>
    </Col>
  </ProjectWrapper>
);

export default EmojiHub;
