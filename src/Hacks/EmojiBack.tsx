import * as React from 'react';

// Libs
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  ProjectDisciplines,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Title,
  UploadcareImage,
} from '../components';

const EmojiBack: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ offset: 3, span: 4 }}>
          <UploadcareImage src="https://ucarecdn.com/f73ebc4a-f1bf-434c-b5b6-f9a8383b82f6/" />
          <Title>Emojis from behind</Title>
          <ProjectDisciplines disciplines={['Graphic Design']} />
          <ProjectTopics topics={['Emoji']} />
          <ProjectYear>2018</ProjectYear>
        </Col>
      </Row>
    </Container>
  </ProjectWrapper>
);

export default EmojiBack;
