import * as React from "react";
import styled, { css } from "styled-components";
import { Col, Container, Row } from "react-bootstrap";

import {
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Quote,
  ResponsiveFrame,
  Spacer,
  Text,
  Title,
} from "../components";
import { mediaQuery } from "../utils";

const COLOR = "#FFF";

const StyledProjectYear = styled(ProjectYear)`
  border: 1px solid ${COLOR};
  color: ${COLOR};
`;

const StyledProjectTopics = styled(ProjectTopics)`
  color: ${COLOR};
`;

const StyledText = styled(Text)`
  color: ${COLOR};
`;

const StyledTitle = styled(Title)`
  color: ${COLOR};
`;

const StyledProjectWrapper = styled(ProjectWrapper)`
  transform: translateX(50vw);
`;

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 1);
  border-radius: 100%;
  overflow: hidden;
  transform: translateX(-50vw);
  width: 200vw;

  ${mediaQuery(
    "phone",
    css`
      border-radius: 0;
    `,
  )}
`;

const BlackHole: React.FC = (): JSX.Element => (
  <Wrapper>
    <StyledProjectWrapper>
      <Container>
        <Row>
          <Col lg={{ offset: 2, span: 9 }}>
            <ResponsiveFrame
              src="https://www.youtube.com/embed/oARU7GLKj3Y"
              title="Black Hole"
            />

            <StyledTitle>Black hole on my Desktop. Part I</StyledTitle>

            <StyledText>
              In the space of my Desktop was noticed a black hole where the any
              information or object will be removed forever
            </StyledText>

            <StyledProjectTopics topics={["Interface", "Ready Made"]} />
            <StyledProjectYear>2021</StyledProjectYear>
          </Col>
        </Row>

        <Spacer size={24} />

        <Row>
          <Col lg={{ offset: 1, span: 9 }}>
            <ResponsiveFrame
              src="https://www.youtube.com/embed/_Y_As4KqK9M"
              title="Black Hole"
            />

            <StyledTitle>
              Black hole on my Desktop. Part II. With Hawking radiation
            </StyledTitle>

            <StyledText>
              <Quote
                inverted
                link="https://en.wikipedia.org/wiki/Black_hole_information_paradox"
              >
                &quot;...theory that quantum perturbations of the event horizon
                could allow information to escape from a black hole...&quot;
              </Quote>
              When I move a file on the Desktop, it disappears, but a side
              effect of it is a new file with part of the information.
            </StyledText>

            <StyledProjectTopics topics={["Interface", "OS X"]} />
            <StyledProjectYear>2021</StyledProjectYear>
          </Col>
        </Row>
      </Container>
    </StyledProjectWrapper>
  </Wrapper>
);

export default BlackHole;
