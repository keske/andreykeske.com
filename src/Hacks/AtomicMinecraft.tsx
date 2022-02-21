/* eslint jsx-a11y/accessible-emoji: 0 */

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
  Text,
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

const StyledText = styled(Text)`
  border-radius: 13px;
  color: #fff;
`;

const StyledTitle = styled(Title)`
  color: #fff;
`;

const StyledProjectWrapper = styled(ProjectWrapper)`
  background-color: #000;
  overflow: hidden;
`;

const AtomicMinecraft: React.FC = (): JSX.Element => (
  <StyledProjectWrapper>
    <Image src={`${PUBLIC_URL}/static/atomic-minecraft/preview.png`} />

    <Inner>
      <Container>
        <Row>
          <Col lg={{ offset: 0, span: 7 }}>
            <StyledTitle>Atomic Minecraft</StyledTitle>

            <StyledText>
              I was reading the book about fundamental particles and how they
              make matter and decided to interpolate it to the universe of
              Minecraft. The result is a cube which is an elementary part of
              Minecraft and inside these cubes are super small particles that
              play the role of electrons: unpredictable moves in space, and the
              amount of them affect the density and weight of the cube. For
              example, dirt has 10 electrons and stone 100 so to say stone has
              more weight and density
            </StyledText>

            <Link to="/atomic-minecraft">
              <StyledButton>See Atomic Terrain 👉</StyledButton>
            </Link>

            <Spacer size={8} />

            <StyledProjectTopics topics={["Minecraft"]} />
            <StyledProjectYear>2022</StyledProjectYear>
          </Col>
        </Row>
      </Container>
    </Inner>
  </StyledProjectWrapper>
);

export default AtomicMinecraft;
