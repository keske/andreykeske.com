import * as React from "react";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";

// Components
import {
  Mark,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Text,
  Title,
} from "../components";

const { PUBLIC_URL } = process.env;

const Image = styled.img<{ alt: string; src: string }>`
  width: 100%;
`;

const Mistress: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ offset: 1, span: 9 }}>
          <Image
            alt="Preview"
            src={`${PUBLIC_URL}/static/mistress/preview.png`}
          />

          <Title>Mistress</Title>
          <Text>
            Software engineering in Matriarchy. Default git&apos;s branch has
            been replaced from
            {' '}
            <Mark>master</Mark>
            {' '}
            to
            {' '}
            <Mark>mistress</Mark>
          </Text>

          <ProjectTopics topics={["Git", "Social Commentary"]} />
          <ProjectYear>2022</ProjectYear>
        </Col>
      </Row>
    </Container>
  </ProjectWrapper>
);

export default Mistress;
