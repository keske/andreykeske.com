import * as React from "react";

// Libs
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";

// Components
import { ProjectWrapper } from "../components";

import LeftSide from "./About.LeftSide";
import RightSide from "./About.RightSide";

const StyledProjectWrapper = styled(ProjectWrapper)`
  height: 100vh;
`;

const About: React.FC = (): JSX.Element => (
  <StyledProjectWrapper>
    <Container>
      <Row>
        <LeftSide />
        <Col
          lg={{ offset: 6, span: 6 }}
          sm={{ offset: 0, span: 12 }}
          xs={{ offset: 0, span: 12 }}
        >
          <RightSide />
        </Col>
      </Row>
    </Container>
  </StyledProjectWrapper>
);

export default About;
