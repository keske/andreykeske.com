import * as React from 'react';

// Libs
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  Mark,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  ResponsiveFrame,
  Text,
  Title,
} from '../components';

const Details = styled.div`
  opacity: 0.5;
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
  color: #fff; ;
`;

const StyledTitle = styled(Title)`
  color: #fff;
`;

const Catch: React.FC = (): JSX.Element => (
  <StyledProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ offset: 1, span: 8 }}>
          <ResponsiveFrame
            src="https://www.youtube.com/embed/tCV8dwhAwf0"
            title="Catch"
          />

          <StyledTitle>The Catch</StyledTitle>

          <StyledText>
            The application icon in the dock is a trap from the
            <StyledMark>Ghostbusters</StyledMark>
          </StyledText>

          <StyledText>
            The window is a ghost. Window minimization represents a
            scene from the movie of catching a ghost
          </StyledText>

          <StyledText>
            Thanks: Andrey Smirny and Nikita Rokotyan
          </StyledText>

          <Details>
            <ProjectTopics topics={['Interface', 'Ready Made']} />
            <StyledProjectYear>2013</StyledProjectYear>
          </Details>
        </Col>
      </Row>
    </Container>
  </StyledProjectWrapper>
);

export default Catch;
