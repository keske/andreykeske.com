import * as React from "react";

// Libs
import { Col, Container, Row } from "react-bootstrap";

// Components
import {
  Mark,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Quote,
  Text,
  Title,
  UploadcareImage,
} from "../components";

console.log(Date.now());

const TimestampTattoo: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ offset: 1, span: 4 }} xs={{ offset: 0, span: 3 }}>
          <UploadcareImage src="https://ucarecdn.com/6895ff34-0b17-46c8-8109-4ed571387cd0/" />
        </Col>
        <Col lg={{ offset: 0, span: 6 }} xs={{ offset: 0, span: 9 }}>
          <Title>Timestamp Tattoo</Title>
          <Text>
            There are two timestamp tattoos one on the neck{" "}
            <Mark>1662414749388</Mark> and the other one on the leg
            <Mark>1662414749387</Mark> with a slight difference between them,
            I&apos;m going to quote Carlo Rovelli:
            <Quote>
              ...With the timepieces of specialized laboratories, this slowing
              down of time can be detected between levels just a few centimeters
              apart: a clock placed on the floor runs a little more slowly than
              one on a table...
            </Quote>
            Source:{" "}
            <a href="https://www.goodreads.com/book/show/36442813-the-order-of-time">
              The Order of Time
            </a>
          </Text>

          <ProjectTopics topics={["Tattoo"]} />
          <ProjectYear>2022</ProjectYear>
        </Col>
      </Row>
    </Container>
  </ProjectWrapper>
);

export default TimestampTattoo;
