import * as React from "react";

// Libs
import styled, { css } from "styled-components";
import { Col, Container, Row } from "react-bootstrap";

// Components
import { ProjectWrapper } from "../components";
import { mediaQuery } from "../utils";

import LeftSide from "./About.LeftSide";
import RightSide from "./About.RightSide";

const StyledCol = styled(Col)`
  position: absolute;
  z-index: 1;

  ${mediaQuery(
    "phone",
    css`
      transform: translate(0, -10vh);
    `,
  )}
`;

const StyledProjectWrapper = styled(ProjectWrapper)`
  background-color: #000;
  height: 120vh;
  overflow: hidden;
  padding: 10vh 0;
  position: relative;
`;

const About: React.FC = (): JSX.Element => (
  <StyledProjectWrapper>
    <LeftSide />
    <Container>
      <Row>
        <StyledCol
          lg={{ offset: 5, span: 6 }}
          sm={{ offset: 0, span: 12 }}
          xs={{ offset: 0, span: 12 }}
        >
          <RightSide />
        </StyledCol>
      </Row>
    </Container>
  </StyledProjectWrapper>
);

export default About;
