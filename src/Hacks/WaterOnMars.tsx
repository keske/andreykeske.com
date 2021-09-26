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

const WaterOnMars: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ offset: 2, span: 8 }}>
          <UploadcareImage src="https://ucarecdn.com/1c88308e-0144-4dc8-be69-30a334b0f194/" />
          <Title>Water On Mars</Title>
          <ProjectTopics
            topics={['Interface', 'Ready Made', 'Social Commentary']}
          />
          <ProjectYear>2011</ProjectYear>
        </Col>
      </Row>
    </Container>
  </ProjectWrapper>
);

export default WaterOnMars;
