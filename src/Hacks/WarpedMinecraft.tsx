/* eslint jsx-a11y/accessible-emoji: 0 */
/* eslint max-lines: 0 */

import * as React from "react";

// Libs
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

// Components
import {
  Button,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Spacer,
  Title,
} from "../components";

const { PUBLIC_URL } = process.env;

const Inner = styled.div`
  margin-top: -300px;
`;

const Image = styled.img`
  width: 100%;
`;

const StyledButton = styled(Button)`
  border: 2px solid #000;
  box-shadow: none;
  font-weight: bold;
`;

const StyledProjectTopics = styled(ProjectTopics)`
  color: #fff;
  opacity: 1;
`;

const StyledProjectYear = styled(ProjectYear)`
  border: 1px solid #fff;
  color: #fff;
`;

const StyledTitle = styled(Title)`
  color: #fff;
`;

const StyledProjectWrapper = styled(ProjectWrapper)`
  background-color: #000;
  overflow: hidden;
`;

const WarpedMinecraft: React.FC = (): JSX.Element => (
  <StyledProjectWrapper>
    <Image src={`${PUBLIC_URL}/static/atomic-minecraft/preview.png`} />

    <Inner>
      <Container>
        <Row>
          <Col
            lg={{ span: 9 }}
            md={{ span: 9 }}
            sm={{ span: 12 }}
            xs={{ span: 12 }}
          >
            <StyledTitle>
              Minecraft where each side of the blocks is a warped NURBS surface
            </StyledTitle>
          </Col>

          <Link to="/warped-minecraft">
            <StyledButton>See Warped Terrain 👉</StyledButton>
          </Link>

          <Spacer size={8} />

          <Col lg={{ span: 6 }}>
            <StyledProjectTopics topics={["Minecraft", "ThreeJS"]} />
            <StyledProjectYear>2021</StyledProjectYear>
          </Col>
        </Row>
      </Container>
    </Inner>
  </StyledProjectWrapper>
);

export default WarpedMinecraft;
