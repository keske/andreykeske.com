import * as React from 'react';

// Libs
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Text,
  Title,
  UploadcareImage,
} from '../components';

const Details = styled.div`
  opacity: 0.3;
`;

const StyledProjectWrapper = styled(ProjectWrapper)`
  background-color: #000;
  border-radius: 33px;
  color: #fff;
  text-align: center;
`;

const StyledProjectYear = styled(ProjectYear)`
  border: 1px solid #fff;
`;

const StyledText = styled(Text)`
  color: #fff;
  opacity: 0.5;
`;

const StyledTitle = styled(Title)`
  color: #fff;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  padding: 33px;
`;

const RecycleBins: React.FC = (): JSX.Element => (
  <Wrapper>
    <StyledProjectWrapper>
      <Container>
        <Row>
          <Col lg={{ offset: 3, span: 6 }}>
            <UploadcareImage src="https://ucarecdn.com/eea10eaa-ea87-4ecd-ae78-9de9e11b54e9/" />

            <StyledTitle>
              Bins for a different types of files
            </StyledTitle>
            <StyledText>Separate your trash</StyledText>

            <Details>
              <ProjectTopics topics={['Inerface', 'Mac OS']} />
              <StyledProjectYear>2021</StyledProjectYear>
            </Details>
          </Col>
        </Row>
      </Container>
    </StyledProjectWrapper>
  </Wrapper>
);

export default RecycleBins;
