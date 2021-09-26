import * as React from 'react';

// Libs
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Title,
  UploadcareImage,
} from '../components';

const PipeLineReactComponent: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ offset: 1, span: 6 }}>
          <UploadcareImage src="https://ucarecdn.com/707cbc59-cb0e-41ce-b100-582d6fe0d57a/" />

          <Title>React Component & Ramda&#39;s Pipeline</Title>
          <ProjectTopics topics={['Code']} />
          <ProjectYear>2019</ProjectYear>
        </Col>
      </Row>
    </Container>
  </ProjectWrapper>
);

export default PipeLineReactComponent;
