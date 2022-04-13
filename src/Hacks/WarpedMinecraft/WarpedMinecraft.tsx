/* eslint max-lines: 0 */

import * as React from "react";

// Libs
import styled, { css } from "styled-components";
import { Col, Container, Row } from "react-bootstrap";

// Components
import {
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Spacer,
  Text,
  Title,
} from "../../components";
import { mediaQuery } from "../../utils";

import Case from "./Case";
import Dirt from "./Blocks/Dirt";
import Glass from "./Blocks/Glass";
import Redstone from "./Blocks/Redstone";
import Sand from "./Blocks/Sand";
import Stone from "./Blocks/Stone";
import World from "./Root";

const StyledText = styled(Text)`
  text-align: center;
`;

const StyledProjectWrapper = styled(ProjectWrapper)`
  ${mediaQuery(
    "phone",
    css`
      display: none;
    `,
  )}
`;

const WarpedMinecraft: React.FC = (): JSX.Element => (
  <StyledProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ span: 12 }}>
          <World />
        </Col>
      </Row>
    </Container>

    <Container>
      <Row>
        <Col
          lg={{ span: 9 }}
          md={{ span: 9 }}
          sm={{ span: 12 }}
          xs={{ span: 12 }}
        >
          <Title>
            Minecraft where each side of the blocks is a warped NURBS surface
          </Title>
          {/* <Text>todo</Text> */}
        </Col>
      </Row>
    </Container>

    <Spacer size={10} />

    <Container>
      <Row>
        <Col
          lg={{ span: 4 }}
          md={{ span: 4 }}
          sm={{ span: 4 }}
          xs={{ span: 4 }}
        >
          <Case>
            <Dirt />
          </Case>
          <Spacer size={2} />
          <StyledText>Dirt</StyledText>
        </Col>
        <Col
          lg={{ span: 4 }}
          md={{ span: 4 }}
          sm={{ span: 4 }}
          xs={{ span: 4 }}
        >
          <Case>
            <Stone />
          </Case>
          <Spacer size={2} />
          <StyledText>Stone</StyledText>
        </Col>
        <Col
          lg={{ span: 4 }}
          md={{ span: 4 }}
          sm={{ span: 4 }}
          xs={{ span: 4 }}
        >
          <Case>
            <Sand />
          </Case>
          <Spacer size={2} />
          <StyledText>Sand</StyledText>
        </Col>
      </Row>
      <Row>
        <Col
          lg={{ span: 8 }}
          md={{ span: 8 }}
          sm={{ span: 6 }}
          xs={{ span: 6 }}
        >
          <Case stars>
            <Glass transparent />
          </Case>
          <Spacer size={2} />
          <StyledText>Glass</StyledText>
        </Col>
        <Col
          lg={{ span: 4 }}
          md={{ span: 4 }}
          sm={{ span: 6 }}
          xs={{ span: 6 }}
        >
          <Case>
            <Redstone />
          </Case>
          <Spacer size={2} />
          <StyledText>Redstone</StyledText>
        </Col>
      </Row>
    </Container>

    <Spacer size={10} />

    <Container>
      <Row>
        <Col lg={{ span: 6 }}>
          <ProjectTopics topics={["Minecraft", "ThreeJS"]} />
          <ProjectYear>2021</ProjectYear>
        </Col>
      </Row>
    </Container>
  </StyledProjectWrapper>
);

export default WarpedMinecraft;
