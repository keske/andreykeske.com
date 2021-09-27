import * as React from 'react';

// Libs
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  Mark,
  ProjectDisciplines,
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

const StyledMark = styled(Mark)`
  border: 1px solid #fff;
`;

const StyledProjectWrapper = styled(ProjectWrapper)`
  background-color: #000;
  color: #fff;
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

const RollingStones: React.FC = (): JSX.Element => (
  <StyledProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ offset: 4, span: 4 }}>
          <UploadcareImage src="https://ucarecdn.com/eea10eaa-ea87-4ecd-ae78-9de9e11b54e9/" />

          <StyledTitle>The Rolling Stones</StyledTitle>

          <StyledText>
            <StyledMark>Emoji-like</StyledMark>
            logo
          </StyledText>

          <Details>
            <ProjectDisciplines disciplines={['Graphic Design']} />
            <ProjectTopics topics={['Emoji']} />
            <StyledProjectYear>2017</StyledProjectYear>
          </Details>
        </Col>
      </Row>
    </Container>
  </StyledProjectWrapper>
);

export default RollingStones;
