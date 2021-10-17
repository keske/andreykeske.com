import * as React from 'react';

// Libs
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Title,
  UploadcareImage,
} from '../components';

const Details = styled.div``;

const StyledProjectWrapper = styled(ProjectWrapper)`
  text-align: center;
`;

const StyledProjectYear = styled(ProjectYear)`
  border: 1px solid #000;
`;

const StyledTitle = styled(Title)`
  color: #000;
`;

const ClothUI: React.FC = (): JSX.Element => (
  <StyledProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ offset: 3, span: 6 }}>
          <UploadcareImage src="https://ucarecdn.com/eea10eaa-ea87-4ecd-ae78-9de9e11b54e9/" />

          <StyledTitle>Cloth UI</StyledTitle>

          <Details>
            <ProjectTopics topics={['Inerface', 'Mac OS']} />
            <StyledProjectYear>2021</StyledProjectYear>
          </Details>
        </Col>
      </Row>
    </Container>
  </StyledProjectWrapper>
);

export default ClothUI;
