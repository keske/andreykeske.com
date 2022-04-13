import * as React from "react";

// Libs
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";

// Components
import {
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Text,
  Title,
} from "../components";

const { PUBLIC_URL } = process.env;

const Details = styled.div`
  opacity: 0.5;
`;

const StyledImg = styled.img`
  width: 100%;
`;

const FinderFromTheSide: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ span: 10 }} md={{ span: 12 }}>
          <StyledImg
            alt="Finder"
            src={`${PUBLIC_URL}/static/finder-from-the-side/finder-and-line.png`}
          />
        </Col>
      </Row>

      <Row>
        <Col lg={{ span: 8 }}>
          <Title>Finder From the Side</Title>

          <Text>
            On the motives of the Flatland: A Romance of Many Dimensions
            {" "}
            <a href="https://en.wikipedia.org/wiki/Flatland">
              wiki
              <sup>↗</sup>
            </a>
          </Text>

          <Details>
            <ProjectTopics topics={["Interface"]} />
            <ProjectYear>2022</ProjectYear>
          </Details>
        </Col>
      </Row>
    </Container>
  </ProjectWrapper>
);

export default FinderFromTheSide;
