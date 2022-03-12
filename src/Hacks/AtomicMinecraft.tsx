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
              Atomic Minecraft is a world created with the blocs as the basic
              structure where inside of each of them are atoms exist. In this
              world, atoms play the main role where their amount affects the
              material of the block. More atoms mean that the block is strong
              and heavy. Actually, like electrons in the real world.
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
