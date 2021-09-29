import * as React from 'react';

// Libs
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  ProjectDisciplines,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Spacer,
  Text,
  Title,
  UploadcareImage,
} from '../components';

const FootballFansTrolling: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ span: 6 }}>
          <UploadcareImage src="https://ucarecdn.com/d5da363b-c885-4849-8e09-73f5285830cf/" />
          <Spacer size={7} />
          <UploadcareImage src="https://ucarecdn.com/acda9cb3-8281-4b2a-a87f-9eb810b032c5/" />
        </Col>

        <Col lg={{ span: 6 }}>
          <UploadcareImage src="https://ucarecdn.com/5aa369c4-04e6-4ef1-8f2c-1915da9e5ca6/" />
          <Spacer size={7} />
          <UploadcareImage src="https://ucarecdn.com/a3420d12-c0a4-4efa-a2e4-1c72160f62b2/" />
        </Col>

        <Col lg={{ span: 10 }}>
          <Title>Football fans trolling</Title>

          <Text>
            I took several emblems of my native football clubs and
            deliberately mingled their colors between them.
          </Text>

          <Text>
            Maybe one of those truly bullies catch a glimpse of my sticker
            on a wall and dump his jaw on a sidewalk in bewilderment, at
            least I hope so.
          </Text>

          <Spacer />

          <ProjectDisciplines disciplines={['Street Art']} />
          <ProjectTopics topics={['Social Commentary']} />
          <ProjectYear>2012</ProjectYear>
        </Col>
      </Row>
    </Container>
  </ProjectWrapper>
);

export default FootballFansTrolling;
