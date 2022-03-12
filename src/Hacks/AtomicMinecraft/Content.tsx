/* eslint jsx-a11y/accessible-emoji: 0 */
/* eslint max-lines : 0 */

import * as React from "react";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";

// Components
import { Spacer, Text, Title } from "../../components";

// Local
import Air from "./Block.Air";
import Case from "./Case";
import Dirt from "./Block.Dirt";
import Gold from "./Block.Gold";
import SmallHouse from "./Structure.SmallHouse";
import CubeOuter from "./Cube.Outer";
import CubeParticles from "./Cube.Particles";
import RedStone from "./Block.RedStone";
import Stone from "./Block.Stone";
import Tree from "./Structure.Tree";
import Water from "./Block.Water";

import useStore from "./@store";

const Root = styled.div`
  background-color: #000;
  color: #fff;
  padding-bottom: 110px;
`;

const SmallHouseCase = styled(Case)`
  /* border: 1px solid #fff; */
  height: 70vh;
`;

const StyledCol = styled(Col)`
  text-align: center;
`;

const StyledText = styled(Text)`
  color: #fff;
`;

const StyledTitle = styled(Title)`
  color: #fff;
`;

const Content: React.FC = () => {
  const { showLines } = useStore();

  return (
    <Root>
      <Container>
        <Row>
          <Col lg={{ span: 10 }}>
            <StyledTitle>Atomic Minecraft</StyledTitle>
          </Col>
          <Spacer size={4} />
          <Col lg={{ span: 10 }}>
            <StyledText>
              Atomic Minecraft is a world created with the blocs as the basic
              structure where inside of each of them are atoms exist. In this
              world, atoms play the main role where their amount affects the
              material of the block. More atoms mean that the block is strong
              and heavy. Actually, like electrons in the real world.
            </StyledText>
          </Col>
        </Row>

        <Spacer size={14} />

        <Row>
          <Col lg={{ span: 10 }}>
            <StyledTitle>Construction</StyledTitle>
          </Col>
        </Row>

        <Spacer size={4} />

        <Row>
          <StyledCol lg={{ offset: 0, span: 4 }}>
            <Case>
              <CubeOuter color="#FFFFFF" radius={0.5} showLines />
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
              <CubeOuter color="#FFFFFF" radius={0.5} showLines />
              <CubeParticles color="#FFF" density={100} radius={0.5} />
            </Case>
            <Spacer size={4} />
            Block with particlals
          </StyledCol>
        </Row>

        <Spacer size={24} />

        <Row>
          <Col lg={{ span: 10 }}>
            <StyledTitle>Blocks</StyledTitle>
          </Col>
        </Row>

        <Spacer size={4} />

        <Row>
          <StyledCol lg={{ offset: 0, span: 3 }}>
            <Case>
              <Air radius={0.5} showLines={showLines} />
            </Case>
            <Spacer size={4} />
            Air
          </StyledCol>
          <StyledCol lg={{ offset: 0, span: 3 }}>
            <Case>
              <Dirt radius={0.5} showLines={showLines} />
            </Case>
            <Spacer size={4} />
            Dirt
          </StyledCol>
          <StyledCol lg={{ offset: 0, span: 3 }}>
            <Case>
              <Stone radius={0.5} showLines={showLines} />
            </Case>
            <Spacer size={4} />
            Stone
          </StyledCol>
        </Row>

        <Spacer size={14} />

        <Row>
          <StyledCol lg={{ offset: 0, span: 3 }}>
            <Case>
              <Water radius={0.5} showLines={showLines} />
            </Case>
            <Spacer size={4} />
            Water
          </StyledCol>
          <StyledCol lg={{ offset: 0, span: 3 }}>
            <Case>
              <RedStone radius={0.5} showLines={showLines} />
            </Case>
            <Spacer size={4} />
            Red Stone
          </StyledCol>
          <StyledCol lg={{ offset: 0, span: 3 }}>
            <Case>
              <Gold radius={0.5} showLines={showLines} />
            </Case>
            <Spacer size={4} />
            Gold
          </StyledCol>
        </Row>

        <Spacer size={24} />

        <Row>
          <Col lg={{ span: 10 }}>
            <StyledTitle>Structures</StyledTitle>
          </Col>
        </Row>

        <Spacer size={4} />

        <Row>
          <StyledCol lg={{ offset: 0, span: 6 }}>
            <SmallHouseCase
              // @ts-expect-error wip
              cameraPosition={[3, 0, 5]}
            >
              <SmallHouse radius={0.5} showLines={showLines} />
            </SmallHouseCase>
            <Spacer size={4} />
            Small House
          </StyledCol>
          <StyledCol lg={{ offset: 0, span: 6 }}>
            <SmallHouseCase
              // @ts-expect-error wip
              cameraPosition={[3, 0, 5]}
            >
              <Tree radius={0.5} showLines={showLines} />
            </SmallHouseCase>
            <Spacer size={4} />
            Tree
          </StyledCol>
        </Row>
      </Container>
    </Root>
  );
};

export default Content;
