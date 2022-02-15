/* eslint jsx-a11y/accessible-emoji: 0 */

import * as React from "react";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";

// Components
import { Spacer, SubTitle, Text, Title } from "../../components";

// Local
import Air from "./Block.Air";
import Case from "./Case";
import Dirt from "./Block.Dirt";
import Gold from "./Block.Gold";
import CubeOuter from "./Cube.Outer";
import CubeParticles from "./Cube.Particles";
import Stone from "./Block.Stone";

const Root = styled.div``;

const StyledCol = styled(Col)`
  text-align: center;
`;

const Content: React.FC = () => (
  <Root>
    <Container>
      <Row>
        <Col lg={{ span: 12 }}>
          <Title>
            The real of Micecraft in an Atomic level of representations
          </Title>
        </Col>
      </Row>
      <Row>
        <StyledCol lg={{ offset: 0, span: 4 }}>
          <Case>
            <CubeOuter radius={0.5} showLines />
          </Case>
          <Spacer size={4} />
          The initial block
        </StyledCol>
        <StyledCol lg={{ offset: 0, span: 4 }}>
          <Case>
            <CubeParticles color="#FFF" density={100} radius={0.5} />
          </Case>
          <Spacer size={4} />
          Partcicals
        </StyledCol>
        <StyledCol lg={{ offset: 0, span: 4 }}>
          <Case>
            <CubeOuter radius={0.5} showLines />
            <CubeParticles color="#FFF" density={100} radius={0.5} />
          </Case>
          <Spacer size={4} />
          Block with particlals
        </StyledCol>
      </Row>

      <Spacer size={14} />

      <Row>
        <StyledCol lg={{ offset: 0, span: 3 }}>
          <Case>
            <Air radius={0.5} showLines />
          </Case>
          <Spacer size={4} />
          Air
        </StyledCol>
        <StyledCol lg={{ offset: 0, span: 3 }}>
          <Case>
            <Dirt radius={0.5} showLines />
          </Case>
          <Spacer size={4} />
          Dirt
        </StyledCol>
        <StyledCol lg={{ offset: 0, span: 3 }}>
          <Case>
            <Stone radius={0.5} showLines />
          </Case>
          <Spacer size={4} />
          Stone
        </StyledCol>
        <StyledCol lg={{ offset: 0, span: 3 }}>
          <Case>
            <Gold radius={0.5} showLines />
          </Case>
          <Spacer size={4} />
          Gold
        </StyledCol>
      </Row>
    </Container>
  </Root>
);

export default Content;
