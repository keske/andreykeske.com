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
  Title,
} from "../components";

const { PUBLIC_URL } = process.env;

const Inner = styled.div`
  /* margin-top: -300px; */
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

const SoftVideoPlayer: React.FC = (): JSX.Element => (
  <StyledProjectWrapper>
    <Inner>
      <Container>
        <Row>
          <Col lg={{ offset: 1, span: 9 }}>
            <Image src={`${PUBLIC_URL}/static/soft-ui/preview.png`} />
            <StyledTitle>Soft Interface &mdash; Video Player</StyledTitle>

            <Link to="/soft-video-player">
              <StyledButton>Touch the soft 👉</StyledButton>
            </Link>

            <Spacer size={8} />

            <StyledProjectTopics topics={["Soft UI"]} />
            <StyledProjectYear>2022</StyledProjectYear>
          </Col>
        </Row>
      </Container>
    </Inner>
  </StyledProjectWrapper>
);

export default SoftVideoPlayer;
