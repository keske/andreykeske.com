import * as React from 'react';

// Libs
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  // Spacer,
  Title,
  // Text,
  UploadcareImage,
} from '../components';

const OrangePiCluster: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ offset: 1, span: 6 }}>
          <UploadcareImage src="https://ucarecdn.com/97553752-0ef3-45c3-a61b-d39cc28dc009/" />
        </Col>
        <Col lg={{ offset: 0, span: 4 }}>
          <Title>OrangePi Cluster</Title>

          <ProjectTopics topics={['Hardware']} />
          <ProjectYear>2019</ProjectYear>
        </Col>
      </Row>
    </Container>
  </ProjectWrapper>
);

export default OrangePiCluster;
