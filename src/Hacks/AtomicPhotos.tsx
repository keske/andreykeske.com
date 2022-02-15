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

const Inner = styled.div`
  display: none;
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
  height: 100vh;
  padding: 0;
`;

const AtomicMinecraft: React.FC = (): JSX.Element => (
  <StyledProjectWrapper>
    <AtomicPhotos />

    <Spacer size={8} />

    <Inner>
      <Container>
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
