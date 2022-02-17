import * as React from "react";

// Libs
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";

// Components
import {
  // Button,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Spacer,
  Text,
  Title,
} from "../components";

import AtomicPhotos from "./AtomicPhotos/Root";

const { PUBLIC_URL } = process.env;

const AtomicPhotosWrapper = styled.div`
  background-color: #000;
  height: 80vh;
  margin-left: 5vw;
  width: 100%;
`;

const Inner = styled.div`
  /* display: none; */
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

const StyledImage = styled.img`
  width: 100%;
`;

const StyledProjectWrapper = styled(ProjectWrapper)`
  background-color: #000;
  height: 100vh;
  padding: 0;
`;

const AtomicMinecraft: React.FC = (): JSX.Element => (
  <StyledProjectWrapper>
    <Spacer size={8} />

    <Inner>
      <Container>
        <Row>
          <Col lg={{ offset: 0, span: 6 }}>
            <AtomicPhotosWrapper>
              <AtomicPhotos
                height={120}
                showControls={false}
                src={`${PUBLIC_URL}/static/atomic-photos/me-prepared.jpeg`}
                // src={`${PUBLIC_URL}/static/atomic-photos/plane-prepared.jpg`}
                width={120}
              />
            </AtomicPhotosWrapper>
          </Col>
          <Col lg={{ offset: 1, span: 4 }}>
            <StyledImage
              alt="Plane"
              src={`${PUBLIC_URL}/static/atomic-photos/me-origin.jpeg`}
              // src={`${PUBLIC_URL}/static/atomic-photos/plane-origin.jpg`}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={{ offset: 2, span: 10 }}>
            <StyledTitle>Atomic Photos</StyledTitle>

            <StyledText>Description</StyledText>

            <Spacer size={8} />

            <StyledProjectTopics topics={["Social Commentary"]} />
            <StyledProjectYear>2022</StyledProjectYear>
          </Col>
        </Row>
      </Container>
    </Inner>
  </StyledProjectWrapper>
);

export default AtomicMinecraft;
