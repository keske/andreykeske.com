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
  opacity: 0.4;
`;

const StyledProjectWrapper = styled(ProjectWrapper)`
  text-align: center;
`;

const StyledProjectYear = styled(ProjectYear)`
  border: 1px solid #000;
`;

const StyledText = styled(Text)`
  opacity: 0.5;
`;

const StyledTitle = styled(Title)`
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-image: linear-gradient(90deg, #e6344a, #3f497a);
  background-repeat: repeat;
  background-size: 100%;
`;

const Wrapper = styled.div``;

const RecycleBins: React.FC = (): JSX.Element => (
  <Wrapper>
    <StyledProjectWrapper>
      <Container>
        <Row>
          <Col lg={{ offset: 0, span: 12 }}>
            <UploadcareImage src="https://ucarecdn.com/a7680ff9-2c6b-4f5a-9fb8-13093b149933/" />

            <StyledTitle>
              Bins for different types of files
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
