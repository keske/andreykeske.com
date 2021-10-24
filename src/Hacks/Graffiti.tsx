/* eslint max-lines: 0 */

import * as React from 'react';

// Libs
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Text,
  Title,
} from '../components';

const { PUBLIC_URL } = process.env;

const Description = styled(Text)`
  font-size: 12px;
  opacity: 0.4;
  padding-left: 13 px;
  padding-top: 10px;
`;

const StyledCol = styled(Col)`
  padding-bottom: 20px;
  padding-top: 20px;
`;

const Image = styled.img<{ alt: string; src: string }>`
  border-radius: 21px;
  width: 100%;
`;

const Graffiti: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Container>
      <Row>
        <StyledCol lg={{ offset: 2, span: 7 }}>
          <Image
            alt="Graffiti"
            src={`${PUBLIC_URL}/static/graffiti/1.jpg`}
          />
          <Description>Keske, Kaze, 2007</Description>
        </StyledCol>

        <StyledCol lg={{ offset: 1, span: 7 }}>
          <Image
            alt="Graffiti"
            src={`${PUBLIC_URL}/static/graffiti/2.jpg`}
          />
          <Description>Keske, Kaze, 2007</Description>
        </StyledCol>

        <StyledCol lg={{ offset: 3, span: 7 }}>
          <Image
            alt="Graffiti"
            src={`${PUBLIC_URL}/static/graffiti/3.jpg`}
          />
          <Description>Keske, Kaze, 2007</Description>
        </StyledCol>

        <StyledCol lg={{ offset: 0, span: 7 }}>
          <Image
            alt="Graffiti"
            src={`${PUBLIC_URL}/static/graffiti/4.jpg`}
          />
          <Description>Kaze, Keske, 2007</Description>
        </StyledCol>

        <StyledCol lg={{ offset: 2, span: 7 }}>
          <Image
            alt="Graffiti"
            src={`${PUBLIC_URL}/static/graffiti/5.jpg`}
          />
          <Description>Kaze, Keske, 2007</Description>
        </StyledCol>

        <StyledCol lg={{ offset: 1, span: 6 }}>
          <Image
            alt="Graffiti"
            src={`${PUBLIC_URL}/static/graffiti/6.png`}
          />
          <Description>Keske, Zebo (Bird), 2010</Description>
        </StyledCol>

        <StyledCol lg={{ offset: 3, span: 7 }}>
          <Image
            alt="Graffiti"
            src={`${PUBLIC_URL}/static/graffiti/7.jpg`}
          />
          <Description>Keske, 2007</Description>
        </StyledCol>

        <StyledCol lg={{ offset: 1, span: 7 }}>
          <Image
            alt="Graffiti"
            src={`${PUBLIC_URL}/static/graffiti/8.jpg`}
          />
          <Description>
            Keske (Skull and right thing), Kaze, 2007
          </Description>
        </StyledCol>

        <StyledCol lg={{ offset: 3, span: 7 }}>
          <Image
            alt="Graffiti"
            src={`${PUBLIC_URL}/static/graffiti/9.jpg`}
          />
          <Description>Keske, Kaze, 2007</Description>
        </StyledCol>

        <StyledCol lg={{ offset: 2, span: 7 }}>
          <Image
            alt="Graffiti"
            src={`${PUBLIC_URL}/static/graffiti/10.jpg`}
          />
          <Description>Keske, Ksenia, 2009</Description>
        </StyledCol>

        <StyledCol lg={{ offset: 1, span: 6 }}>
          <Image
            alt="Graffiti"
            src={`${PUBLIC_URL}/static/graffiti/11.jpg`}
          />
          <Description>Ksenia, Keske, 2009</Description>
        </StyledCol>

        <StyledCol lg={{ offset: 3, span: 6 }}>
          <Image
            alt="Graffiti"
            src={`${PUBLIC_URL}/static/graffiti/12.jpg`}
          />
          <Description>Keske, 2009</Description>
        </StyledCol>

        <StyledCol lg={{ offset: 2, span: 7 }}>
          <Title>Graffiti</Title>
          <Text>
            The initial point of my decision to move into an
            art/design topic was graffiti. Being a kid, I found that
            the whole process of making a piece has the intention of
            hacking the streets, society, and my mom&apos;s stress
            level.
          </Text>

          <ProjectTopics topics={['Graffiti']} />
          <ProjectYear>2006—2012</ProjectYear>
        </StyledCol>
      </Row>
    </Container>
  </ProjectWrapper>
);

export default Graffiti;
