import * as React from "react";

// Libs
import { Col, Container, Row } from "react-bootstrap";

// Components
import {
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  ResponsiveFrame,
  Title,
} from "../components";

const DropboxIntoiCloud: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ offset: 1, span: 11 }}>
          <ResponsiveFrame
            src="https://www.youtube.com/embed/BWn0g4ztG1Y"
            title="IKEA Place"
          />

          <Title>Moving Dropbox into iCloud</Title>

          <ProjectTopics topics={["Joke"]} />
          <ProjectYear>2021</ProjectYear>
        </Col>
      </Row>
    </Container>
  </ProjectWrapper>
);

export default DropboxIntoiCloud;
