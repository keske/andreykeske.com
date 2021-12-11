/* eslint max-lines: 0 */

import * as React from "react";

// Libs
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";

// Components
import {
  Mark,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Spacer,
  Text,
  Title,
} from "../components";

const { PUBLIC_URL } = process.env;

const StyledCol = styled(Col)`
  padding-bottom: 20px;
  padding-top: 20px;
`;

const Image = styled.img<{ alt: string; src: string }>`
  border-radius: 21px;
  width: 100%;
`;

const BluriOSGirls: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Container>
      <Row>
        <StyledCol
          lg={{ offset: 0, span: 3 }}
          sm={{ span: 6 }}
          xs={{ span: 6 }}
        >
          <Image
            alt="Graffiti"
            src={`${PUBLIC_URL}/static/blur-ios-girls/1.png`}
          />
        </StyledCol>
        <StyledCol
          lg={{ offset: 0, span: 3 }}
          sm={{ span: 6 }}
          xs={{ span: 6 }}
        >
          <Image
            alt="Graffiti"
            src={`${PUBLIC_URL}/static/blur-ios-girls/2.png`}
          />
        </StyledCol>
        <StyledCol
          lg={{ offset: 0, span: 3 }}
          sm={{ span: 6 }}
          xs={{ span: 6 }}
        >
          <Image
            alt="Graffiti"
            src={`${PUBLIC_URL}/static/blur-ios-girls/3.png`}
          />
        </StyledCol>
        <StyledCol
          lg={{ offset: 0, span: 3 }}
          sm={{ span: 6 }}
          xs={{ span: 6 }}
        >
          <Image
            alt="Graffiti"
            src={`${PUBLIC_URL}/static/blur-ios-girls/4.png`}
          />
        </StyledCol>

        <StyledCol lg={{ offset: 3, span: 7 }}>
          <Title>Censorship in iOS 7</Title>
          <Text>
            With the release of the new iOS 7, I immediately installed the beta
            version. Until people are arguing about the new design, I saw an
            interesting thing.
          </Text>
          <Text>
            The iOS 7 has many translucent elements in design and these elements
            give the opportunity to use them as censorship.
          </Text>
          ****
          <Spacer size={2} />
          <Text>
            It was in 2012 I believe.
            <br />
            But now this works not so well as back then. Anyway, I want to keep
            it here, and because it&apos;s kinda
            {' '}
            <Mark>NSFW</Mark>
            {' '}
            I put it at
            the end of the all works.
          </Text>
          <ProjectTopics topics={["UI", "iOS"]} />
          <ProjectYear>2011</ProjectYear>
        </StyledCol>
      </Row>
    </Container>
  </ProjectWrapper>
);

export default BluriOSGirls;
