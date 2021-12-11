/* eslint max-lines: 0 */

import * as React from "react";

// Libs
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";

// Components
import { ProjectWrapper, ProjectYear } from "../components";

const { PUBLIC_URL } = process.env;

const StyledCol = styled(Col)`
  padding-bottom: 20px;
  padding-top: 20px;
`;

const Image = styled.img<{ alt: string; src: string }>`
  border-radius: 21px;
  width: 100%;
`;

const Rossette: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Container>
      <Row>
        <StyledCol lg={{ offset: 0, span: 8 }}>
          <Image
            alt="Graffiti"
            src={`${PUBLIC_URL}/static/rossette/Rossette.jpg`}
          />
        </StyledCol>

        <StyledCol lg={{ offset: 3, span: 7 }}>
          <ProjectYear>2011</ProjectYear>
        </StyledCol>
      </Row>
    </Container>
  </ProjectWrapper>
);

export default Rossette;
