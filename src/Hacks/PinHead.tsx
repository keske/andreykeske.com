import * as React from 'react';

// Libs
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  ProjectWrapper,
  ProjectYear,
  Title,
  UploadcareImage,
} from '../components';

const PinHead: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ offset: 3, span: 5 }}>
          <UploadcareImage src="https://ucarecdn.com/2a274270-dffd-4b9e-a7ea-72cd7616727c/" />

          <Title>Pinhead</Title>

          <ProjectYear>2016</ProjectYear>
        </Col>
      </Row>
    </Container>
  </ProjectWrapper>
);

export default PinHead;
