import * as React from "react";

// Libs
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";

// Components
import {
  Mark,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  ResponsiveFrame,
  Text,
  Title,
} from "../components";

const GREEN = "#03A749";

const Details = styled.div`
  opacity: 0.5;
`;

const Mono = styled.div`
  font-family: monospace;
  font-size: 17vw;
  line-height: 0.8;
`;

const StyledMark = styled(Mark)`
  border: 1px solid ${GREEN};
`;

const StyledProjectWrapper = styled(ProjectWrapper)`
  background-color: #000;
  color: ${GREEN};
`;

const StyledProjectYear = styled(ProjectYear)`
  border: 1px solid ${GREEN};
`;

const StyledText = styled(Text)`
  color: ${GREEN};
`;

const StyledTitle = styled(Title)`
  color: ${GREEN};
`;

const TmuxChess: React.FC = (): JSX.Element => (
  <StyledProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ offset: 0, span: 12 }}>
          <Mono>
            ♜♞♝♛♚♝♞♜
            <br />
            ♟♟♟♟♟♟♟♟
          </Mono>
        </Col>

        <Col lg={{ offset: 0, span: 12 }}>
          <ResponsiveFrame
            src="https://www.youtube.com/embed/JlvEuMp2UVw"
            title="Tmux Chess"
          />

          <StyledTitle>Tmux Chess</StyledTitle>

          <StyledText>
            Playing in Chess using
            <StyledMark>tmux</StyledMark>
            as board
          </StyledText>

          <Details>
            <ProjectTopics topics={["Interface", "Ready Made"]} />
            <StyledProjectYear>2014</StyledProjectYear>
          </Details>
        </Col>

        <Col lg={{ offset: 0, span: 12 }}>
          <Mono>
            ♙♙♙♙♙♙♙♙
            <br />
            ♖♘♗♕♔♗♘♖
          </Mono>
        </Col>
      </Row>
    </Container>
  </StyledProjectWrapper>
);

export default TmuxChess;
