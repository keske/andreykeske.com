import * as React from 'react';

// Libs
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  Button,
  Mark,
  ProjectDisciplines,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Spacer,
  Text,
  Title,
  UploadcareImage,
} from '../components';

const Hodor: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ offset: 2, span: 4 }}>
          <UploadcareImage src="https://ucarecdn.com/cb87dbb4-6648-46a8-97e0-3be1988869cb/" />
        </Col>

        <Col lg={{ span: 6 }}>
          <Title>Hodor / Telegram bot</Title>

          <Text>
            Try to speak with him:
            <Mark>@got_hodor_bot</Mark>
          </Text>

          <Text>He is so Hodor</Text>

          <a href="https://github.com/keske/Hodor">
            <Button>Github Repo →</Button>
          </a>

          <Spacer size={6} />

          <ProjectDisciplines disciplines={['Programming']} />
          <ProjectTopics topics={['Bots', 'Social Commentary']} />
          <ProjectYear>2016</ProjectYear>
        </Col>
      </Row>
    </Container>
  </ProjectWrapper>
);

export default Hodor;
